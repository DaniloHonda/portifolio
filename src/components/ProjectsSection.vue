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
          url="dento · repositório privado"
          tag="AGENTES · IA"
          title="Dento"
          desc="Agente pessoal multiagente com memória de longo prazo, que apoia a gestão de finanças, agenda, notícias e investimentos."
          :bullets="[
            'Orquestração multiagente com OMP e Hermes.',
            'Segundo cérebro: persistência e recuperação de memória entre conversas.',
            'Gestão integrada de finanças, agenda, notícias e investimentos em um só lugar.'
          ]"
          :chips="['Python', 'LLM', 'OMP', 'Hermes', 'Memória persistente']"
          :links="[{ label: 'repositório privado' }]"
        >
          <template #screen>
            <div class="ln big" style="transform:rotate(158.2deg)"></div>
            <div class="ln big" style="transform:rotate(-158.2deg)"></div>
            <div class="ln big" style="transform:rotate(21.8deg)"></div>
            <div class="ln big" style="transform:rotate(-21.8deg)"></div>
            <div class="nd c" style="left:50%;top:50%;font-size:13px;padding:9px 14px">orquestrador</div>
            <div class="nd" style="left:calc(50% - 200px);top:calc(50% - 80px);font-size:12px">finanças</div>
            <div class="nd" style="left:calc(50% - 200px);top:calc(50% + 80px);font-size:12px">agenda</div>
            <div class="nd" style="left:calc(50% + 200px);top:calc(50% - 80px);font-size:12px">notícias</div>
            <div class="nd" style="left:calc(50% + 200px);top:calc(50% + 80px);font-size:12px">investimentos</div>
            <div class="cap" style="position:absolute;left:16px;right:16px;bottom:14px;margin:0;text-align:center">
              SEGUNDO CÉREBRO · MEMÓRIA PERSISTENTE
            </div>
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
            <div style="height:100%;display:flex;align-items:center;justify-content:center;gap:32px;padding:0 28px">
              <div class="plate"></div>
              <div style="flex:1;max-width:230px">
                <div class="cap">MACROS ESTIMADOS PELA IA</div>
                <div class="cap" style="margin:10px 0 0">PROTEÍNA</div><div class="mc"><i style="width:62%"></i></div>
                <div class="cap" style="margin:0">CARBOIDRATO</div><div class="mc"><i style="width:82%"></i></div>
                <div class="cap" style="margin:0">GORDURA</div><div class="mc"><i style="width:38%"></i></div>
              </div>
            </div>
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
