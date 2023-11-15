import getRandomInt from '@/helpers/getRandomInt';

const personaStore = {
   namespaced: true,

   state: () => ({
      count: 0,
      otraProp: 'Mauricio',
      isLoading: false
   }),

   //tienen que ser sync, son las que modifican el state
   mutations: {
      increment(state) {
         state.count++
      },

      incrementByInt(state, intValue) {
         state.count = intValue
      },

      changeName(state, name) {
         state.otraProp = name
      },

      isLoading(state, value) {
         state.isLoading = value;
      }
   },

   //pueden ser async
   actions: {
      async incrementCount(context) {
         context.commit('isLoading', true);
         const randomInt = await getRandomInt();
         context.commit('incrementByInt', randomInt);
         context.commit('isLoading', false);
      }
   },

   getters: {
      getCount(state) {
         return state.count;
      }
   }
}

export default personaStore;