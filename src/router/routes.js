
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageUsers.vue'), name: "SmartChat" },
      { path: '/chat', component: () => import('src/pages/Pagechat.vue'), name: "Chat" },
      { path: '/auth', component: () => import('src/pages/PageAuth.vue') , name: "Login"},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
