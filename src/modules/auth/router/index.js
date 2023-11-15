export default {
   path: "/",
   name: "auth",
   component: () => import('@/modules/auth/layout/AuthLayout.vue'),
   children: [
      {
         path: '',
         name: 'login',
         component: () => import('@/modules/auth/views/Login.vue'),
      },
      {
         path: '/register',
         name: 'register',
         component: () => import('@/modules/auth/views/Register.vue'),
      }
   ]
}