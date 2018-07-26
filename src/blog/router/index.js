import Layout from '@/blog/layout/Layout'

export const childrenRoutes = [
    {
        path: '/',
        component: () => import('@/blog/views/Home'),
        name: "Home",
        meta: {
            isMenuItem: true,
            title: 'Strona Główna'
        }
    },
    {
        path: '/article/:slug',
        component: () => import('@/blog/views/Article'),
        name: "Article"
    },
    {
        path: '/articles/:id',
        component: () => import('@/blog/views/ArticlesFromCategory'),
        name: "ArticlesFromCategory"
    }
]

export default [
    {
        path: '',
        component: Layout,
        redirect: '/',
        children: childrenRoutes
    }
]