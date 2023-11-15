<template>
   <router-view v-slot="{ Component }">
     <keep-alive>
       <component :is="Component" />
     </keep-alive>
   </router-view>
 </template>
 
 <script>
 import useAuth from '@/modules/auth/composables/useAuth'
 
 export default {
   setup() {
     const { authStatus, checkAuthStatus } = useAuth()
     checkAuthStatus()
 
     return {
       authStatus
     }
   }
 }
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
 </style>
 