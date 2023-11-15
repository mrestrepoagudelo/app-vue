import { ref } from "vue";

const useCounter = (initValue = 10) => {
   const counter = ref(initValue);

   //los metodos los puedo crear acá o en el return
   // const increment = () => {
   //    counter.value++;
   // }

   // const decrease = () => {
   //    counter.value--;
   // }

   return {
      //properties reactivas
      counter,

      //methods reactivos
      increment: () => {
         counter.value++;
      },

      decrease: () => {
         counter.value--;
      }
   }
}

export default useCounter;