<script setup>
import ProjectCard from './ProjectCard.vue'

const github = ['JurisAI · TypeScript', 'ListfyApp · Dart', 'ListfyAPI · C#', 'ProcessamentoDeArquivosgRPC · C++', 'ComputacaoParalela · C++', 'FinancialWeb · PHP']
</script>

<template>
  <section id="projetos" class="sec" style="background:#040406">
    <div class="inn">
      <div>
        <div class="lab">01 / PROJETOS</div>
        <h2 class="sh">Para abrir e mexer.</h2>
        <p class="lead">
          Dados, IA e interface, do protótipo ao produto em uso. Cada projeto abre numa janela: veja o que é, como foi feito e onde está o código.
        </p>
      </div>

      <div class="grid2">
        <ProjectCard
          big
          :screen-height="340"
          url="danilohonda.github.io/cpdiabeticretinopathy-demo"
          tag="TCC · VISÃO COMPUTACIONAL"
          title="Retinopatia diabética"
          desc="Classifica os cinco estágios da doença em fotos de fundo de olho e compara um modelo treinado para a tarefa com LLMs multimodais de uso geral."
          :bullets="[
            'ConvNeXt-Small como regressão ordinal, com pré-processamento Ben Graham e ajuste de limiares pelo QWK.',
            'Acurácia de 83% e QWK de 0,83 em 5.270 imagens de teste, contra QWK de 0,28 a 0,45 para os LLMs.',
            'Deep dive com método, resultados por classe, análise de erros e limitações.'
          ]"
          :chips="['Python', 'PyTorch', 'timm', 'Deep Learning', 'Visão computacional']"
          :links="[
            { label: 'abrir deep dive ↗', href: 'https://danilohonda.github.io/cpdiabeticretinopathy-demo/', primary: true },
            { label: 'repositório privado' }
          ]"
        >
          <template #screen>
            <div style="height:100%;display:flex;align-items:center;justify-content:center;gap:56px;padding:0 32px">
              <div class="retina"></div>
              <div style="display:flex;flex-direction:column;gap:16px">
                <div>
                  <div class="stat">83%</div>
                  <div class="cap" style="margin:2px 0 0">ACURÁCIA · CONVNEXT-SMALL</div>
                </div>
                <div>
                  <div class="stat">0,83</div>
                  <div class="cap" style="margin:2px 0 0">KAPPA QUADRÁTICO PONDERADO</div>
                </div>
                <div>
                  <div class="stat">5.270</div>
                  <div class="cap" style="margin:2px 0 0">IMAGENS DE TESTE</div>
                </div>
              </div>
            </div>
          </template>
        </ProjectCard>

        <ProjectCard
          big
          :screen-height="340"
          url="danilohonda.github.io/dento-deepdive"
          tag="AGENTES · IA"
          title="Dento"
          desc="Assistente pessoal que roda no meu servidor e funciona como app no celular, com agenda, notícias do dia, gastos e conversas com o agente Hermes."
          :bullets="[
            'Agenda de dia, semana e mês, com eventos criados no app e leitura do Google Agenda.',
            'Notícias por tema (clima, IA, política e mercado) e painel de gastos com a origem de cada transação.',
            'Em construção: lembretes, acompanhamento de investimentos, resumo diário e salvamento no segundo cérebro.'
          ]"
          :chips="['Python', 'LLM', 'OMP', 'Hermes', 'Memória persistente']"
          :links="[
            { label: 'abrir deep dive ↗', href: 'https://danilohonda.github.io/dento-deepdive/', primary: true },
            { label: 'repositório privado' }
          ]"
        >
          <template #screen>
            <svg viewBox="0 0 700 340" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block" role="img" aria-label="Dento orquestra agentes: agenda, notícias, finanças, segundo cérebro e Hermes">
              <defs>
                <radialGradient id="dentoOrb" cx="40%" cy="35%" r="70%">
                  <stop offset="0%" stop-color="#FFB4A8" />
                  <stop offset="45%" stop-color="#E5383B" />
                  <stop offset="100%" stop-color="#5A1A2E" />
                </radialGradient>
                <filter id="dentoGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <!-- conexões do orquestrador -->
              <g stroke="#2A2C3D" stroke-width="1.5" fill="none">
                <path d="M350 170 L350 62" />
                <path d="M350 170 L150 120" />
                <path d="M350 170 L150 228" />
                <path d="M350 170 L550 120" />
                <path d="M350 170 L550 228" />
              </g>
              <g stroke="#3FB6C4" stroke-width="1.5" fill="none" stroke-dasharray="4 6" opacity="0.8">
                <path d="M350 170 L150 120" />
                <path d="M350 170 L550 228" />
              </g>
              <!-- balão do usuário e resposta do assistente -->
              <rect x="22" y="22" width="190" height="34" rx="17" fill="#1E1F2B" />
              <text x="117" y="44" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="#D4D0C6">Tenho algo amanhã?</text>
              <rect x="470" y="268" width="210" height="46" rx="14" fill="#0A0A0F" stroke="#E5383B" stroke-opacity="0.6" />
              <text x="575" y="290" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" fill="#D4D0C6">2 eventos e 1 notícia relevante</text>
              <text x="575" y="306" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#7A7D90">quer que eu marque um lembrete?</text>
              <!-- orquestrador -->
              <circle cx="350" cy="170" r="66" fill="none" stroke="#E5383B" stroke-opacity="0.25" />
              <circle cx="350" cy="170" r="48" fill="url(#dentoOrb)" filter="url(#dentoGlow)" />
              <text x="350" y="176" text-anchor="middle" font-family="Anton, sans-serif" font-size="22" fill="#040406" letter-spacing="1">DENTO</text>
              <!-- agentes -->
              <g font-family="JetBrains Mono, monospace" font-size="12" text-anchor="middle">
                <rect x="290" y="34" width="120" height="30" rx="15" fill="#0A0A0F" stroke="#E5383B" />
                <text x="350" y="54" fill="#D4D0C6">Hermes · LLM</text>
                <rect x="80" y="104" width="140" height="32" rx="16" fill="#0A0A0F" stroke="#3FB6C4" />
                <text x="150" y="125" fill="#D4D0C6">agenda</text>
                <rect x="80" y="212" width="140" height="32" rx="16" fill="#0A0A0F" stroke="#E5383B" />
                <text x="150" y="233" fill="#D4D0C6">finanças</text>
                <rect x="480" y="104" width="140" height="32" rx="16" fill="#0A0A0F" stroke="#8F7CF0" />
                <text x="550" y="125" fill="#D4D0C6">notícias</text>
                <rect x="470" y="212" width="160" height="32" rx="16" fill="#0A0A0F" stroke="#8F7CF0" />
                <text x="550" y="233" fill="#D4D0C6">segundo cérebro</text>
              </g>
            </svg>
          </template>
        </ProjectCard>
      </div>

      <div class="grid3">
        <ProjectCard
          url="danilohonda.github.io/visuais-powerbi-demo"
          tag="EM PRODUÇÃO · BI"
          title="Visuais para Power BI"
          desc="Biblioteca proprietária de 16 visuais personalizados, usada pelo time de People Analytics da XP."
          :bullets="['SLA com mediana e P90, funil com conversão e matriz de calor.', 'Cálculos validados contra a base nominal.']"
          :chips="['TypeScript', 'Power BI', 'PBIP']"
          :links="[
            { label: 'abrir demo ↗', href: 'https://danilohonda.github.io/visuais-powerbi-demo', primary: true },
            { label: 'código ↗', href: 'https://github.com/DaniloHonda/visuais-powerbi-demo' }
          ]"
        >
          <template #screen>
            <div style="padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:20px;align-content:start">
              <div>
                <div class="cap">FUNIL · CONVERSÃO</div>
                <div class="fn" style="width:100%">Inscrição</div>
                <div class="fn" style="width:78%;opacity:0.85">Triagem</div>
                <div class="fn" style="width:54%;opacity:0.65">Entrevista</div>
                <div class="fn" style="width:30%;opacity:0.45">Decisão</div>
              </div>
              <div>
                <div class="cap">MATRIZ DE CALOR</div>
                <div class="hm"><div v-for="n in 24" :key="n"></div></div>
              </div>
            </div>
          </template>
        </ProjectCard>

        <ProjectCard
          url="github.com/devBrait/nutrihub-ai-api"
          tag="FULL STACK · IA"
          title="NutriHub"
          desc="Microsserviços em que a IA estima calorias e macronutrientes a partir de fotos de refeições e monta dietas personalizadas."
          :bullets="['Autenticação, pacientes e clínicas, com JWT.']"
          :chips="['C#', '.NET', 'React', 'TypeScript', 'PostgreSQL']"
          :links="[{ label: 'código ↗', href: 'https://github.com/devBrait/nutrihub-ai-api' }]"
        >
          <template #screen>
            <svg viewBox="0 0 700 340" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block" role="img" aria-label="Foto de refeição analisada pela IA, com estimativa de calorias e macronutrientes (exemplo ilustrativo)">
              <!-- prato visto de cima, com três partes -->
              <circle cx="200" cy="170" r="122" fill="#11121A" stroke="#2A2C3D" stroke-width="2" />
              <circle cx="200" cy="170" r="98" fill="#1B1C27" />
              <path d="M200 170 L200 78 A92 92 0 0 1 279.7 216 Z" fill="#E5383B" opacity="0.9" />
              <path d="M200 170 L279.7 216 A92 92 0 0 1 120.3 216 Z" fill="#3FB6C4" opacity="0.85" />
              <path d="M200 170 L120.3 216 A92 92 0 0 1 200 78 Z" fill="#6BBF59" opacity="0.85" />
              <circle cx="200" cy="170" r="22" fill="#1B1C27" />
              <g fill="#D4D0C6" opacity="0.6">
                <circle cx="160" cy="120" r="5" /><circle cx="240" cy="110" r="4" /><circle cx="255" cy="250" r="5" />
              </g>
              <!-- resultado da análise -->
              <text x="380" y="62" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="1.5" fill="#7A7D90">ESTIMATIVA POR FOTO · EXEMPLO</text>
              <text x="380" y="132" font-family="Anton, sans-serif" font-size="60" fill="#D4D0C6">520 kcal</text>
              <g font-family="JetBrains Mono, monospace" font-size="12" fill="#D4D0C6">
                <text x="380" y="180">proteína</text>
                <rect x="380" y="190" width="260" height="10" fill="#1E1F2B" /><rect x="380" y="190" width="161" height="10" fill="#E5383B" />
                <text x="380" y="222">carboidrato</text>
                <rect x="380" y="232" width="260" height="10" fill="#1E1F2B" /><rect x="380" y="232" width="213" height="10" fill="#3FB6C4" />
                <text x="380" y="264">gordura</text>
                <rect x="380" y="274" width="260" height="10" fill="#1E1F2B" /><rect x="380" y="274" width="99" height="10" fill="#8F7CF0" />
              </g>
              <text x="380" y="318" font-family="JetBrains Mono, monospace" font-size="11" fill="#7A7D90">foto → IA → macros → dieta personalizada</text>
            </svg>
          </template>
        </ProjectCard>

        <ProjectCard
          url="eco-urban-ihc.vercel.app"
          tag="PROTÓTIPO · INTERFACE"
          title="EcoUrban"
          desc="Protótipo da disciplina de Interação Humano-Computador, publicado na Vercel."
          :chips="['TypeScript', 'Vercel', 'IHC']"
          :links="[
            { label: 'abrir ↗', href: 'https://eco-urban-ihc.vercel.app', primary: true },
            { label: 'código ↗', href: 'https://github.com/DaniloHonda/EcoUrbanIHC' }
          ]"
        >
          <template #screen>
            <div class="mapgrid">
              <div class="pin" style="left:22%;top:34%;background:var(--brasa);box-shadow:0 0 18px 4px var(--brasa)"></div>
              <div class="pin" style="left:48%;top:62%;background:#3FB6C4;box-shadow:0 0 18px 4px #3FB6C4"></div>
              <div class="pin" style="left:72%;top:32%;background:#8F7CF0;box-shadow:0 0 18px 4px #8F7CF0"></div>
              <div class="pin" style="left:80%;top:70%;background:var(--brasa);box-shadow:0 0 18px 4px var(--brasa)"></div>
              <div class="nd c" style="left:50%;top:16%;background:#040406">protótipo · IHC</div>
            </div>
          </template>
        </ProjectCard>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;border-top:1px solid #1E1F2B;padding-top:24px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:0.1em;color:#7A7D90;margin-right:8px">MAIS NO GITHUB</span>
        <div class="chips"><span v-for="g in github" :key="g">{{ g }}</span></div>
        <a class="lk" href="https://github.com/DaniloHonda" target="_blank" rel="noopener" style="margin-left:auto">github.com/DaniloHonda →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.retina {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  flex: none;
  background: radial-gradient(circle at 62% 45%, #f2c879 0, #f2c879 7%, #a33a1e 9%, #5a1810 46%, #1a0707 72%, #050304 74%);
  box-shadow: 0 0 60px #e5383b44;
}
.stat {
  font-family: Anton, sans-serif;
  font-size: 54px;
  line-height: 1;
}
.plate {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  flex: none;
  border: 9px solid #1e1f2b;
  background: radial-gradient(circle at 40% 40%, #c98b4a 0, #8a4f22 40%, #3b2410 75%);
}
.mapgrid {
  position: absolute;
  inset: 0;
  background-color: #06060a;
  background-image: linear-gradient(#1e1f2b 1px, transparent 1px), linear-gradient(90deg, #1e1f2b 1px, transparent 1px);
  background-size: 32px 32px;
}
.pin {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
</style>
