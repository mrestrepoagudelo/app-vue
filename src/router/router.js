import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
import authRouter from '@/modules/auth/router'
import homeRouter from "@/modules/home/router";
import personaRouter from '@/modules/persona/router'

const routes = [
  { ...authRouter },
  {
    ...homeRouter,
    beforeEnter: [isAuthenticatedGuard],
  },
  {
    ...personaRouter,
    beforeEnter: [isAuthenticatedGuard],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/modules/shered/pages/ErrorNotFound.vue')
  }
  // { path: '/', component: () => import('@/modules/persona/components/Main.vue') },
  // { path: '/', component: () => import('@/components/Counter.vue') },
  // { path: '/l', component: () => import('@/modules/persona/components/ListarWithStore.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

//TODO:guard global
// router.beforeEach((to, from, next) => {
//   // console.log({to, from, next});
//   // let {path} = to;
//   // if(path == "/persona"){
//   //    console.log("autenticado");
//   //    next();
//   // }else{
//   //    console.log("No está autenticado");
//   //   next('/home');
//   // }

//     next();
// });
export default router;