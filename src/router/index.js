import { createRouter, createWebHashHistory } from 'vue-router'

import AboutVue from '@/views/About.vue'
import AlbumsVue from '@/views/Albums.vue'
import AlbumVue from '@/views/Album.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: AboutVue },
      { path: '/albums', component: AlbumsVue },
      { path: '/albums/:albumName', component: AlbumVue },
    ]
})