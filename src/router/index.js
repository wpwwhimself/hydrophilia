import { createRouter, createWebHashHistory } from 'vue-router'

import Header from '@/components/Header.vue'

import NotFound from '@/views/404.vue'
import MainVue from '@/views/Main.vue'
import AboutVue from '@/views/About.vue'
import AlbumsVue from '@/views/Albums.vue'
import AlbumVue from '@/views/Album.vue'
import ProjectsVue from '@/views/Projects.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', components: {free: MainVue} },
      { path: '/about', components: { wrapped: AboutVue, free: Header } },
      { path: '/albums', components: { wrapped: AlbumsVue, free: Header } },
      { path: '/albums/:albumName', components: { wrapped: AlbumVue, free: Header } },
      { path: '/projects', components: { wrapped: ProjectsVue, free: Header } },
      { path: '/:pathMatch(.*)*', components: { wrapped: NotFound, free: Header} },
    ]
})