<template lang="">
   <div>
      <h1>Main</h1>
      <hr>
      <Listar 
         @event-listener="listarEventListener" 
         v-show="visibleListar" />

      <Editar 
         @event-listener="editarEventListener" 
         ref="editarRef" 
         v-show="visibleEditar" />

   </div>
</template>

<script>
import { onMounted, ref, defineAsyncComponent } from 'vue';

export default {
   components: {
      Editar: defineAsyncComponent(() => import('./Editar.vue')),
      Listar: defineAsyncComponent(() => import('./Listar.vue')),
   },

   setup() {
      const visibleListar = ref(true);
      const visibleEditar = ref(false);
      const editarRef = ref(null);

      onMounted(() => {
         console.log("Main Montado");
      })

      const disparaMetodoChild = (params) => {
         editarRef.value.editar();
      }

      const listarEventListener = (params) => {
         editarRef.value.editar(params.id);
         showEditar();
      }

      const editarEventListener = (params) => {
         // console.log(params);
         showListar();
      }

      const showListar = () => {
         // const { visibleListar, visibleEditar } = toRefs(props)
         visibleListar.value = true;
         visibleEditar.value = false;
      }

      const showEditar = () => {
         // const { visibleListar, visibleEditar } = toRefs(props)
         visibleEditar.value = true;
         visibleListar.value = false;
      }

      return {
         //properties reactivas
         visibleListar,
         visibleEditar,

         //métodos reactivos
         listarEventListener,
         editarEventListener,
         disparaMetodoChild,

         //refs
         editarRef
      }
   }
}
</script>
<style lang="">
   
</style>