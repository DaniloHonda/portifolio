<script setup>
import { contacts } from '../data/site.js'
</script>

<template>
  <section id="contato" class="sec" style="background:#0A0A0F">
    <div class="inn" style="align-items:flex-start">
      <div>
        <div class="lab">04 / CONTATO</div>
        <h2 class="sh" style="font-size:clamp(56px,9vw,120px)">Vamos conversar.</h2>
        <p class="lead">Aberto a conversar sobre oportunidades e projetos com dados e IA.</p>
      </div>
      <div class="links">
        <a
          v-for="c in contacts"
          :key="c.label"
          class="lk"
          :class="{ pri: c.primary }"
          :href="c.href"
          target="_blank"
          rel="noopener"
          >{{ c.label }}</a
        >
      </div>
    </div>
  </section>
</template>
