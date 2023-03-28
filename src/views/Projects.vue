<script setup lang="ts">
import projects from "@/data/projects.json";
import Project from "@/components/Project.vue";
import type { Project as tProject } from "@/types";
import Button from "@/components/Button.vue";

projects.sort((a, b) => {
  const [date1, date2] = [
    new Date(a.dateIn || "1970-01-01"),
    new Date(b.dateIn || "1970-01-01"),
  ];

  return date2.getTime() - date1.getTime();
});

// an array which counts statuses of projects
let counts = [0, 0, 0, 0, 0];

projects.forEach(el => {
  counts[el.status]++; counts[4]++;
});

const statusesCounts: {[key: string]: number} = {
  all: counts[4],
  open: counts[1],
  finished: counts[0],
  scrapped: counts[2],
  fused: counts[3],
};

/**
 * filters
 */
function pFilter(status: string): void{
  //clear previous filter
  document.querySelectorAll<HTMLElement>(`.project`).forEach(el => { el.style.display = "grid"; });
  if(status == "all") return;
  document.querySelectorAll<HTMLElement>(`.project:not(.${status})`).forEach(el => { el.style.display = "none"; });
}
</script>

<template>
  <h1>Projects' list</h1>
  <div id="filters" class="flex-right center">
    <span>
      <i class="fa-solid fa-filter"></i>
      Filter by status:
    </span>
    <Button v-for="name in Object.keys(statusesCounts)"
      @click="() => pFilter(name)">
      {{ name }} <small>({{ statusesCounts[name] }})</small>
    </Button>
  </div>
  <div class="flex-down">
    <Project v-for="project in projects" :project="(project as unknown as tProject)" />
  </div>
</template>

<style scoped>
small{
  font-size: 0.75em;
}
#filters{
  margin-bottom: 1em;
}
</style>
