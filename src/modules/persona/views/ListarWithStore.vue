<template lang="">
   <div>
      <h1>Ejemplo Store Listar</h1>
      <!-- <p>Store count 1: {{countComputed}}</p> -->
      <p>Store count 2: {{ count }}</p>
      <p>Store nombre 3: {{ otraProp }}</p>
      <p>Store getter: {{ getCount }}</p>
      <p v-if="loading">Loading ...</p>
      <button @click="changeState">Cambiar el estado vuex</button>
      <button @click="dispararAction">Dispara action del estado vuex</button>

      <hr>
      <h1>Listar</h1>

      <h2 v-if="isLoading">Espere por favor...</h2>
      <h2 v-else="isLoading">Personas</h2>
      <h5 v-if="errorMessage">{{errorMessage}}</h5>

      <div v-if="personas.length > 0" style="display:flex; justify-content: center; margin:20px;">
         <table>
            <tr>
               <th>id</th>
               <th>email</th>
               <th>first_name</th>
               <th>last_name</th>
            </tr>
            <tr @dblclick="editarPersona($event)" v-for="persona in personas" :key="persona.id">
               <td>{{persona.id}}</td>
               <td>{{persona.email}}</td>
               <td>{{persona.first_name}}</td>
               <td>{{persona.last_name}}</td>
            </tr>
         </table>
      </div>
      
      <div style="display:flex; justify-content: center; margin:20px;">
         <button @click="prevPage">Prev</button>
         <button @click="nextPage">Next</button>
         <p style="margin:0;">Página: {{currentPage}}</p>
      </div>

      <!-- <div style="display:flex; justify-content: center; margin:20px;">
         <button @click="editarPersona">Llamar el editar</button>
      </div> -->
      
   </div>
</template>

<script>
import axios from "axios";
import { ref, computed } from "vue";
import { mapState, mapGetters, useStore } from "vuex";

export default {
   setup(props, { emit }) {
      const store = useStore();
      const nameStore = 'persona';
      const personas = ref([]);
      const isLoading = ref(false);
      const currentPage = ref(1);
      const errorMessage = ref();

      console.log(store);

      const getPersonas = async (page = 1) => {
         if (page <= 0) page = 1;
         isLoading.value = true;

         const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);

         if (data.data.length > 0) {
            personas.value = data.data;
            currentPage.value = page;
            errorMessage.value = null;
         } else if (currentPage.value > 0) {
            errorMessage.value = 'No hay mas personas...';
         }

         isLoading.value = false;
      }

      const nextPage = () => {
         getPersonas(currentPage.value + 1);
      }

      const prevPage = () => {
         getPersonas(currentPage.value - 1);
      }

      const editarPersona = (event) => {
         let idPersona = event.target.parentNode.childNodes[0].textContent;
         emit("event-listener", { id: idPersona });
      }

      const changeState = () => {
         store.commit(`${nameStore}/increment`);
         store.commit(`${nameStore}/changeName`, 'Alberto');
      }

      const dispararAction = () => {
         store.dispatch(`${nameStore}/incrementCount`);
      }

      getPersonas();

      return {
         //propiedades
         personas,
         isLoading,
         currentPage,
         errorMessage,

         //métodos
         changeState,
         dispararAction,
         nextPage,
         prevPage,
         editarPersona,

         //store
         countComputed:() => store.state[nameStore].count,
         getCount: computed(() => store.getters[nameStore+'/getCount']),
         count: computed(() => store.state[nameStore].count),
         otraProp: computed(() => store.state[nameStore].otraProp),
         loading: computed(() => store.state[nameStore].isLoading)
      }
   }
}
</script>
<style scope></style>