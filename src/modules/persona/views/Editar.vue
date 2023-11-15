<template lang="">
   <div>
      <h1>Editar</h1>
      {{ persona }}
      <button ref="btnVolver" @click="cancelar">Volvler</button>
   </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";

export default {
   setup(props, { emit }) {
      const persona = ref();
      const btnVolver = ref();

      const cancelar = () => {
         emit("event-listener");
         limpiar();
      }

      const editar = async (idPersona) => {
         const { data } = await axios.get(`https://reqres.in/api/users/${idPersona}`);
         persona.value = data.data

         // console.log(persona.value);
         // if (data.data.length > 0) {
         //    personas.value = data.data;
         //    currentPage.value = page;
         //    errorMessage.value = null;
         // } else if (currentPage.value > 0) {
         //    errorMessage.value = 'No hay mas personas...';
         // }

         // console.log("Editar from component Editar");
      }

      const limpiar = () =>{
         persona.value = {};
      }

      return {
         cancelar,
         editar,
         persona
      }
   }
}
</script>
<style lang="">
   
</style>