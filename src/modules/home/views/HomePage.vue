<template lang="">
   <div>
      <h3>HOME</h3>
      <h4>user: {{username}}</h4>
      <button @click="onLogout">LOGOUT</button>
      <button @click="showPersonas">PERSONAS</button>
   </div>
</template>
<script>
import { useRouter } from 'vue-router';
import useAuth from '@/modules/auth/composables/useAuth';

export default {
   setup() {
      const router = useRouter()
      const { username, logout } = useAuth()

      const showPersonas = () => {
         router.push({ name: "persona" });
      }

      const onLogout = () => {
         router.push("/");
         logout();
      }

      return {
         username,
         showPersonas,
         onLogout
      }
   }
}
</script>