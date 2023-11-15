<template>
   <h2>{{ label }}</h2>
   <p>{{ counter }}</p>
   <!-- <button @click="saludo">{{label}}</button> -->
   <button @click="increment">+1</button>
   <button @click="decrease">-1</button>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
   name: 'Counter',
   props: {
      label: {
         type: String,
         default: "Contador",
         required: true
      },
      valor: {
         type: Number,
         required: true,
         default: 100,
      }
   },

   setup() {
      const { counter, increment, decrease } = useCounter(25);
      return {
         counter, increment, decrease
      }
      
   }
};
</script>

<style></style>