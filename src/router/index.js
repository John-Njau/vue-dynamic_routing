import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import NotFound from '../views/NotFoundView'
import JobsView from '../views/jobs/JobsView'
import JobDetails from '../views/jobs/JobDetailsView'

Vue.use(VueRouter)

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
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props :true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/home',
    redirect: '/'
  },
  // catchaall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
