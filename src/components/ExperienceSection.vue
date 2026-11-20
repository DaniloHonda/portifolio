<script setup>
import { experience } from '../data/site.js'
</script>

<template>
  <section id="experiencia" class="sec" style="background:#0A0A0F">
    <div class="inn">
      <div>
        <div class="lab">02 / EXPERIÊNCIA</div>
        <h2 class="sh">Onde já trabalhei</h2>
      </div>
      <div>
        <div v-for="e in experience" :key="e.title" class="xp">
          <div class="xd">{{ e.date }}</div>
          <div>
            <div class="xt">{{ e.title }}</div>
            <div class="xo">{{ e.org }}</div>
            <ul class="pul">
              <li v-for="b in e.bullets" :key="b">{{ b }}</li>
            </ul>
            <div v-if="e.chips.length" class="chips" style="margin-top:12px">
              <span v-for="c in e.chips" :key="c">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
