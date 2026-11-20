<script setup>
defineProps({
  url: String,
  tag: String,
  title: String,
  desc: String,
  bullets: { type: Array, default: () => [] },
  chips: { type: Array, default: () => [] },
  links: { type: Array, default: () => [] },
  big: Boolean,
  screenHeight: { type: Number, default: 250 }
})
</script>

<template>
  <article class="portal">
    <div class="bar">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      <span class="url">{{ url }}</span>
    </div>
    <div class="screen" :style="{ height: screenHeight + 'px' }">
      <slot name="screen" />
    </div>
    <div class="pbody" :style="big ? { padding: '32px' } : null">
      <div class="tag">{{ tag }}</div>
      <h3 class="ptitle" :style="big ? { fontSize: '46px' } : null">{{ title }}</h3>
      <p class="pdesc">{{ desc }}</p>
      <ul v-if="bullets.length" class="pul">
        <li v-for="b in bullets" :key="b">{{ b }}</li>
      </ul>
      <div class="chips">
        <span v-for="c in chips" :key="c">{{ c }}</span>
      </div>
      <div class="links">
        <template v-for="l in links" :key="l.label">
          <a
            v-if="l.href"
            class="lk"
            :class="{ pri: l.primary }"
            :href="l.href"
            target="_blank"
            rel="noopener"
            >{{ l.label }}</a
          >
          <span v-else class="lk off">{{ l.label }}</span>
        </template>
      </div>
    </div>
  </article>
</template>
