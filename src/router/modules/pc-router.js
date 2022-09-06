export default [
    {
        path:'/',
        name:'main',
        component:()=>import('@/views/pc-layout/index.vue'),
        children:[
            {
                path:'',
                name:'home',
                component:()=>import('@/views/pc-layout/main/index.vue')
            }
        ]
    }
]