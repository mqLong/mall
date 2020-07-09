import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'




Vue.use(VueRouter)


const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


  const routes = [    
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',    
    component: () => import( '../views/About.vue')
  },
  {
    path: '/worktable',
    name: 'Worktable',    
    component: () => import( '../views/Worktable.vue')
  },
  {
    path: '/mine',
    name: 'Mine',    
    component: () => import( '../views/Mine.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
