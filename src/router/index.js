import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Vehicles from '../views/vehicles/Vehicles.vue'
import VehicleDetails from '../views/vehicles/VehicleDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
    
  },

  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles
  },
  {
    path:'/vehicles/:id',
    name:'VehicleDetails',
    component: VehicleDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
