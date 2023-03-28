<script setup lang="ts">
import type { Project } from '@/types';
import Popper from "vue3-popper";

const props = defineProps<{
  project: Project,
}>();

// statuses
let icon: string, status: string;
switch(props.project.status){
  case 0: status = "finished"; icon = "check"; break;
  case 1: status = "open"; icon = "spinner fa-spin-pulse"; break;
  case 2: status = "scrapped"; icon = "trash"; break;
  case 3: status = "fused"; icon = "arrows-to-circle"; break;
}
</script>

<template>
  <div :class="`project ${status}`">
    <span class="flex-down">
      <h2>{{ project.name ? `${project.id} ${project.name}` : `${project.id}` }}</h2>
      
      <span :class="status">
        <i :class="`fa-solid fa-${icon}`"></i>
        {{ status }}
      </span>
    </span>
    <span class="flex-down">
      <p v-if="project.status == 3"><i>with <b>{{ project.title }}</b></i></p>
      <h3 v-else-if="project.title">{{ project.title }}</h3>
      <p v-else class="grayed-out">untitled (yet)</p>
      <p>{{ project.album }}</p>
    </span>
    <span class="project-meta">
      <Popper content="Inspired by" :hover="true" placement="left" :arrow="true">
        <i class="fa-solid fa-cloud"></i>
      </Popper>
      <span v-if="project.inspiredBy">{{ project.inspiredBy.replace(/([A-Z]).* ([A-Z]).*/g, "$1.$2.") }}</span>
      <span v-else class="grayed-out">no data</span>
      
      <Popper content="Date created" :hover="true" placement="left" :arrow="true">
        <i class="fa-solid fa-right-to-bracket"></i>
      </Popper>
      <span v-if="project.dateIn">{{ project.dateIn }}</span>
      <span v-else class="grayed-out">no data</span>
    
      <Popper content="Date closed" :hover="true" placement="left" :arrow="true">
        <i class="fa-solid fa-right-from-bracket"></i>
      </Popper>
      <span v-if="project.dateOut">{{ project.dateOut }}</span>
      <span v-else class="grayed-out">no data</span>
    </span>
  </div>
</template>

<style scoped>
.project{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.project h2, .project h3, .project p{
  margin: 0;
}
.project .flex-down{
  gap: 0;
}
.project-meta{
  display: grid;
  grid-template-columns: 2em 1fr;
}
span.finished{ color: hsl(100, 80%, 70%) }
span.open{ color: hsl(0, 80%, 70%) }
span.scrapped{ color: hsl(50, 80%, 70%) }
span.fused{ color: hsl(270, 80%, 70%) }

@media screen and (max-width: 600px){
  .project{
    grid-template-columns: auto;
  }
  .project .flex-down{
    flex-direction: row;
    gap: 1em;
    align-items: center;
    justify-content: center;
  }
}
</style>