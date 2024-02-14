import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PrivateView from '../views/PrivateView.vue'
import PublicView from '../views/PublicView.vue'
import HomeView from '../views/HomeView.vue'



function checkAuth(){
  let password = localStorage.getItem('token')
  if(password === ''){
    return true
  } else {
    return false
  }
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/users',
      component: PublicView
    },
    {
      path: '/profile',
      component: PrivateView
    },
    {
      path: '/login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) =>{
  if(to.path === '/private' && !checkAuth()){
    next('/login')
  } else{
    next()
  }
})


export default router
