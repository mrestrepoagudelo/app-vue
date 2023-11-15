import { createStore } from 'vuex'
import storePersona from '@/modules/persona/store'
import storeAuth from '@/modules/auth/store'

export default createStore({
   modules: {
      auth: storeAuth,
      persona: storePersona,
   }
})