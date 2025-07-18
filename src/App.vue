<template>
  <header class="header">
    <img :src="require('@/assets/logo.png')" alt="" />
  </header>
  <main id="app">
    <section class="intro">
      <p class="tag">ONLINE - GRATUITO</p>
      <h1 class="main-title">SORTEADOR DE NÚMEROS</h1>
      <div class="faq">
        <div class="faq-item">
          <img src="assets/Frame.png" alt="" />
          <div>
            <strong>Como funciona o sorteador de números?</strong>
            <p>
              O sorteador utiliza um algoritmo de geração aleatória para criar
              números dentro do intervalo especificado pelo usuário.
            </p>
          </div>
        </div>
        <div class="faq-item">
          <img src="assets/Frame.png" alt="" />
          <div>
            <strong>Posso escolher o intervalo dos números?</strong>
            <p>
              Sim, você pode definir os valores mínimo e máximo para o intervalo
              dos números sorteados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="sorteio-box">
      <RandomierComponents />
    </section>
  </main>
</template>

<script>
import RandomierComponents from './components/RandomierComponents.vue';

export default {
  name: 'App',
  components: { RandomierComponents },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
body {
  background-color: #0b0b0b;
  font-family: 'Sora', sans-serif;
}
#app {
  background-image: url('assets/fundo.png');
  min-height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.main-title {
  font-size: 3rem;
  font-weight: 900;
  text-align: left;
  margin-bottom: 2rem;
}
.intro {
  max-width: 600px;
  width: 100%;
}
.tag {
  font-family: monospace;
  font-size: 0.9rem;
  color: #d3d3d3;
  margin-bottom: 1rem;
}
.faq {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.faq-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: #c58de7;
}
.faq-item img {
  width: 20px;
  margin-top: 4px;
}
.faq-item strong {
  font-size: 1rem;
  color: #fff;
}
.faq-item p {
  font-size: 0.9rem;
  margin-top: 4px;
  color: #d1cbdc;
}
.sorteio-box {
  margin-top: 4rem;
  width: 100%;
  max-width: 700px;
}
</style>
