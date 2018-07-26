import Vue from 'vue'
import Router from 'vue-router'
import blogRoutes from '@/blog/router'

Vue.use(Router)

export default new Router({
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [
        ...blogRoutes
    ]
})