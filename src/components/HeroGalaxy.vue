<script setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'

// Three.js + TresJS ficam em um chunk separado, carregado depois do primeiro paint.
const GalaxyCanvas = defineAsyncComponent(() => import('./GalaxyCanvas.vue'))
const bg = import.meta.env.BASE_URL + 'assets/space.webp'
const ready = ref(false)
onMounted(() => {
  const start = () => (ready.value = true)
  if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 800 })
  else setTimeout(start, 150)
})

const today = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
})

const links = [
  { label: 'PROJETOS', href: '#projetos' },
  { label: 'EXPERIÊNCIA', href: '#experiencia' },
  { label: 'CONTATO', href: '#contato' }
]
</script>

<template>
  <header class="hero" style="position:relative;height:900px;overflow:hidden;background:#040406">
    <img
      :src="bg"
      fetchpriority="high"
      alt=""
      style="position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover"
    />
    <div class="sky"><div class="st st1"></div><div class="st st2"></div></div>

    <div class="shoot" style="left:16%;top:14%"></div>
    <div class="shoot" style="left:58%;top:22%;animation-delay:-6s;animation-duration:15s"></div>

    <div class="galaxy-wrap">
      <GalaxyCanvas v-if="ready" />
    </div>

    <div style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 40%,transparent 38%,#040406 100%)"></div>
    <div style="position:absolute;left:0;right:0;bottom:0;height:520px;pointer-events:none;background:linear-gradient(to top,#040406 8%,transparent 100%)"></div>

    <div style="position:absolute;left:24px;top:96px;width:28px;height:28px;border-left:1px solid #7A7D90;border-top:1px solid #7A7D90"></div>
    <div style="position:absolute;right:24px;top:96px;width:28px;height:28px;border-right:1px solid #7A7D90;border-top:1px solid #7A7D90"></div>
    <div style="position:absolute;right:56px;top:100px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.12em;color:#7A7D90;text-align:right;line-height:1.7">
      23.55° S · 46.63° W<br />NÚCLEO ATIVO
    </div>

    <nav style="position:absolute;left:0;right:0;top:0;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;padding:20px 48px;border-bottom:1px solid #1E1F2B">
      <div style="font-family:Anton,sans-serif;font-size:22px;letter-spacing:0.04em;text-transform:uppercase">Danilo Honda</div>
      <div style="display:flex;flex-wrap:wrap;gap:32px;font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.08em">
        <a v-for="l in links" :key="l.href" :href="l.href" class="navlink">{{ l.label }}</a>
      </div>
    </nav>

    <div style="position:absolute;left:48px;right:48px;bottom:96px;display:flex;flex-direction:column;gap:14px">
      <div style="font-family:'JetBrains Mono',monospace;font-size:14px;letter-spacing:0.14em;color:#3FB6C4;text-transform:uppercase">
        &gt; Analista de dados · IA generativa
      </div>
      <h1 style="margin:0;display:flex;flex-wrap:wrap;column-gap:36px;font-family:Anton,sans-serif;font-weight:400;font-size:clamp(72px,13vw,190px);line-height:0.9;text-transform:uppercase">
        <span>Danilo</span>
        <span style="color:transparent;-webkit-text-stroke:2px #D4D0C6">Honda</span>
      </h1>
      <div style="display:flex;flex-wrap:wrap;gap:24px;justify-content:space-between;align-items:flex-end;margin-top:8px">
        <p style="margin:0;font-size:18px;line-height:1.55;color:#7A7D90;max-width:520px">
          Analista de dados que transforma números em dashboards, agentes de IA e interfaces que dá vontade de explorar.
        </p>
        <div style="font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:0.1em;color:#D4D0C6;display:flex;gap:28px;align-items:center">
          <span style="color:#7A7D90">{{ today }} · SÃO PAULO</span>
          <a href="#projetos" class="navlink" style="color:#D4D0C6">
            ROLE <span class="arrow" style="color:var(--brasa)">↓</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.galaxy-wrap {
  position: absolute;
  inset: 0;
}
.navlink {
  color: #7a7d90;
  text-decoration: none;
  transition: color 0.2s;
}
.navlink:hover {
  color: #d4d0c6;
}
</style>
