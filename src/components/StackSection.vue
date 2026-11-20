<script setup>
import { stack } from '../data/site.js'
</script>

<template>
  <section id="stack" class="sec" style="background:#040406">
    <div class="inn">
      <div>
        <div class="lab">03 / STACK</div>
        <h2 class="sh">Com o que eu construo</h2>
      </div>
      <div class="sg">
        <div v-for="g in stack" :key="g.title" class="sc">
          <h4>{{ g.title }}</h4>
          <div class="chips"><span v-for="i in g.items" :key="i">{{ i }}</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
