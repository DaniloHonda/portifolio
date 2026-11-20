<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import * as THREE from 'three'
import { useLoop } from '@tresjs/core'

const COUNT = 170000
const RADIUS = 5.4
const BRANCHES = 3

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uFade;
  attribute float aSize;
  attribute float aRand;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float tw = 0.78 + 0.22 * sin(uTime * (0.5 + aRand * 1.8) + aRand * 40.0);
    gl_PointSize = uSize * aSize * uPixelRatio * (1.0 / -mv.z) * tw;
    vColor = aColor;
    vAlpha = uFade * tw;
  }
`

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float s = pow(1.0 - smoothstep(0.0, 0.5, d), 2.4);
    if (s < 0.01) discard;
    gl_FragColor = vec4(vColor * 1.5, s * vAlpha);
  }
`

function gauss() {
  return (Math.random() + Math.random() + Math.random() + Math.random() - 2) / 2
}

function buildGeometry() {
  const extra = 3
  const n = COUNT + extra
  const pos = new Float32Array(n * 3)
  const col = new Float32Array(n * 3)
  const size = new Float32Array(n)
  const rnd = new Float32Array(n)

  const cInner = new THREE.Color('#ffd49a')
  const cMid = new THREE.Color('#f2a874')
  const cOuter = new THREE.Color('#6a8dff')
  const cViolet = new THREE.Color('#9a78ff')
  const cEmber = new THREE.Color('#ff5a4e')
  const cWhite = new THREE.Color('#ffffff')
  const tmp = new THREE.Color()

  const bulge = Math.floor(COUNT * 0.15)
  const haze = Math.floor(COUNT * 0.2)
  const disc = Math.floor(COUNT * 0.15)
  let dim = 1

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3
    let x, y, z, t, s
    dim = 1

    if (i >= COUNT - disc) {
      // diffuse disc between the arms
      const r = 0.3 + -Math.log(1 - Math.random() * 0.97) * 1.5
      const th = Math.random() * Math.PI * 2
      x = Math.cos(th) * Math.min(r, RADIUS)
      z = Math.sin(th) * Math.min(r, RADIUS)
      y = gauss() * 0.14 * Math.exp(-r * 0.2)
      t = Math.min(r, RADIUS) / RADIUS
      tmp.copy(cMid).lerp(cOuter, THREE.MathUtils.smoothstep(t, 0.15, 0.85)).multiplyScalar(0.8)
      s = 0.35 + Math.random() * 0.8
    } else if (i >= COUNT - disc - haze) {
      // wide, dim, large sprites along the arms: the nebulous glow
      const r = 0.5 + Math.pow(Math.random(), 1.2) * (RADIUS - 0.7)
      const branch = i % BRANCHES
      const ang = (branch / BRANCHES) * Math.PI * 2 + r * 0.92
      const w = 0.35 + r * 0.16
      x = Math.cos(ang) * r + gauss() * w
      z = Math.sin(ang) * r + gauss() * w
      y = gauss() * 0.12
      t = r / RADIUS
      tmp.copy(cMid).lerp(cOuter, THREE.MathUtils.smoothstep(t, 0.1, 0.7))
      if (Math.random() < 0.25) tmp.lerp(cViolet, 0.6)
      s = 3.2 + Math.random() * 4.2
      dim = 0.09
    } else if (i < bulge) {
      const r = Math.pow(Math.random(), 2.0) * 1.25
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      x = r * Math.sin(ph) * Math.cos(th)
      z = r * Math.sin(ph) * Math.sin(th)
      y = r * Math.cos(ph) * 0.5
      t = r / RADIUS
      tmp.copy(cInner).lerp(cEmber, Math.random() * 0.3).lerp(cWhite, Math.max(0, 0.22 - r * 0.4))
      s = 0.45 + Math.random() * 1.3
    } else {
      const r = 0.3 + Math.pow(Math.random(), 1.3) * (RADIUS - 0.3)
      const branch = i % BRANCHES
      const ang = (branch / BRANCHES) * Math.PI * 2 + r * 0.92
      const sp = 0.2 + r * 0.1
      x = Math.cos(ang) * r + gauss() * sp * r * 0.8
      z = Math.sin(ang) * r + gauss() * sp * r * 0.8
      y = gauss() * 0.16 * Math.exp(-r * 0.22)
      t = r / RADIUS
      const k = THREE.MathUtils.smoothstep(t, 0.1, 0.75)
      tmp.copy(cMid).lerp(cOuter, k)
      const roll = Math.random()
      if (roll < 0.1) tmp.lerp(cViolet, 0.7)
      else if (roll < 0.125) tmp.lerp(cEmber, 0.85)
      else if (roll < 0.16) tmp.lerp(cWhite, 0.75)
      s = 0.32 + Math.random() * 0.95
      if (Math.random() < 0.012) s *= 2.6
    }

    pos[i3] = x
    pos[i3 + 1] = y
    pos[i3 + 2] = z
    const fall = (1.0 - 0.45 * Math.min(1, t * 1.1)) * dim
    col[i3] = tmp.r * fall
    col[i3 + 1] = tmp.g * fall
    col[i3 + 2] = tmp.b * fall
    size[i] = s
    rnd[i] = Math.random()
  }

  // soft core glow: a few very large, dim sprites at the center
  const glow = [
    { s: 46, c: '#ff7a4a', a: 0.06 },
    { s: 24, c: '#ffc58a', a: 0.1 },
    { s: 10, c: '#fff1e0', a: 0.2 }
  ]
  glow.forEach((g, k) => {
    const j = COUNT + k
    pos[j * 3] = 0
    pos[j * 3 + 1] = 0
    pos[j * 3 + 2] = 0
    tmp.set(g.c)
    col[j * 3] = tmp.r * g.a
    col[j * 3 + 1] = tmp.g * g.a
    col[j * 3 + 2] = tmp.b * g.a
    size[j] = g.s
    rnd[j] = 0
  })

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geo.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  geo.setAttribute('aRand', new THREE.BufferAttribute(rnd, 1))
  return geo
}

const geometry = buildGeometry()
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  uniforms: {
    uTime: { value: 0 },
    uSize: { value: 30 },
    uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 2) },
    uFade: { value: 0 }
  }
})

const points = new THREE.Points(geometry, material)
points.frustumCulled = false

const spin = new THREE.Group()
spin.add(points)
const tilt = new THREE.Group()
tilt.add(spin)
tilt.position.set(0, 0.55, 0)
const BASE_Z = -0.38
tilt.rotation.z = BASE_Z
tilt.scale.setScalar(0.72)

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const pointer = { x: 0, y: 0, tx: 0, ty: 0 }

function onMove(e) {
  pointer.tx = e.clientX / window.innerWidth - 0.5
  pointer.ty = e.clientY / window.innerHeight - 0.5
}

onMounted(() => window.addEventListener('pointermove', onMove, { passive: true }))
onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  geometry.dispose()
  material.dispose()
})

const { onBeforeRender } = useLoop()
onBeforeRender(({ delta, elapsed }) => {
  material.uniforms.uTime.value = elapsed
  const fade = Math.min(1, elapsed / 2.6)
  const ease = 1 - Math.pow(1 - fade, 3)
  material.uniforms.uFade.value = ease
  tilt.scale.setScalar(0.72 + 0.28 * ease)

  if (!reduceMotion) spin.rotation.y += delta * 0.045

  pointer.x += (pointer.tx - pointer.x) * Math.min(1, delta * 2.5)
  pointer.y += (pointer.ty - pointer.y) * Math.min(1, delta * 2.5)
  tilt.rotation.x = pointer.y * 0.16
  tilt.rotation.z = BASE_Z + pointer.x * 0.14
})
</script>

<template>
  <primitive :object="tilt" />
</template>
