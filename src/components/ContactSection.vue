<script setup>
import { contacts } from '../data/site.js'

const emailLink = contacts.find((c) => c.href.startsWith('mailto:'))
const email = emailLink ? emailLink.href.replace('mailto:', '') : ''
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
          :target="c.href.startsWith('mailto:') ? undefined : '_blank'"
          :rel="c.href.startsWith('mailto:') ? undefined : 'noopener'"
          >{{ c.label }}</a
        >
        <p v-if="email" class="mail" style="margin:14px 0 0;font-family:'JetBrains Mono',monospace;font-size:14px;color:#D4D0C6;user-select:all">
          {{ email }}
        </p>
      </div>
    </div>
  </section>
</template>
