import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from './utils'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ℹ️ We are redirecting to different pages based on role.
    // NOTE: Role is just for UI purposes. ACL is based on abilities.
    {
      path: '/',
      redirect: to => {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}')
        // const userRole = userData && userData.role ? userData.role : null
        const userRole = userData ? 'admin' : null
        if (userData && userRole) {
          return { name: 'home' }
          }
        return { name: 'login', query: to.query }
      },
    },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})


// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach((to, from, next)  => {
  const isLoggedIn = isUserLoggedIn()
  if (isLoggedIn) {
    next();
  } else {
    if (to.name !== 'login') {
      next({ name: 'login', query: { to: to.name !== 'home' ? to.fullPath : undefined } });
    }
    else {
        next();
    }
  }
  /*
  
    ℹ️ Commented code is legacy code
  
    if (!canNavigate(to)) {
      // Redirect to login if not logged in
      // ℹ️ Only add `to` query param if `to` route is not index route
      if (!isLoggedIn)
        return next({ name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } })
  
      // If logged in => not authorized
      return next({ name: 'not-authorized' })
    }
  
    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn)
      next('/')
  
    return next()
  
    */
  // if (isLoggedIn){
  //     return '/'
  // }
  //   else {
  //       return { name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
  // }
  // if (canNavigate(to)) {
  //   // to.meta.redirectIfLoggedIn &&
  //   if (to.meta.redirectIfLoggedIn && isLoggedIn)
  //     return '/'
  // }
  // else {
  //   if (isLoggedIn)
  //     return { name: 'not-authorized' }
  //   else
  //     return { name: 'login', query: { to: to.name !== 'index' ? to.fullPath : undefined } }
  // }
})
export default router
