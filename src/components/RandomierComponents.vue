<template>
  <div class="sorteador">
    <!--<h2>Sorteador de Números</h2>-->
    <div class="input-group" v-if="show">
      <label>Qtd: <input type="number" v-model.number="count" min="1" /></label>
      <label>De: <input type="number" v-model.number="min" /></label>
      <label>Até: <input type="number" v-model.number="max" /></label>
      <label
        ><input type="checkbox" v-model="allowRepeat" /> Permitir
        repetidos</label
      >
      <button @click="sortear()">Sortear ➞</button>
    </div>

    <div class="resultados" v-if="resultados.length">
      <h3>Resultados</h3>
      <ul>
        <li v-for="(num, idx) in resultados" :key="idx">{{ num }}</li>
      </ul>
      <button class="try" @click="repetir()">
        Sortear novamente <img :src="require('@/assets/try.png')" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomierComponents',
  data() {
    return {
      count: 1,
      min: 1,
      max: 100,
      allowRepeat: false,
      resultados: [],
      show: true,
    };
  },
  methods: {
    sortear() {
      this.resultados = [];
      this.show = true;

      if (this.min >= this.max) {
        return alert('Máximo deve ser maior que mínimo!');
      }

      const range = this.max - this.min + 1;

      if (!this.allowRepeat && this.count > range) {
        return alert('Não é possível repetir o sorteio, limite atingido.');
      }

      while (this.resultados.length < this.count) {
        const n = Math.floor(Math.random() * range) + this.min;
        if (this.allowRepeat || !this.resultados.includes(n)) {
          this.resultados.push(n);
        }
      }

      this.show = false;
    },

    repetir() {
      // Faz a tela inicial voltar e limpa os resultados
      this.resultados = [];
      this.show = true;
    },
  },
};
</script>

<style scoped>
.sorteador {
  background-color: #0b0b0b;

  padding: 2rem;
  border-radius: 16px;
  color: #ffffff;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 0 16px rgba(197, 141, 231, 0.2);
}
.resultados button {
  margin: 20px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: left;
  margin-bottom: 1.5rem;
}

.try {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.input-group label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #d1cbdc;
  justify-content: center;
  align-items: center;
}

input[type='number'] {
  background-color: #1a1a1a;
  border: 1px solid #333;
  padding: 0.5rem;
  border-radius: 6px;
  color: #ffffff;
  width: 80px;
  margin-top: 0.3rem;
}

input[type='checkbox'] {
  margin-top: 0.7rem;
  transform: scale(1.2);
  accent-color: #c58de7;
}

button {
  background-color: #7d6bb0;
  background-image: linear-gradient(to right, #c58de7, #7d6bb0);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(197, 141, 231, 0.5);
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #c58de7;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
}

li {
  background-color: #c58de7;
  color: #0b0b0b;
  font-weight: bold;
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pop 0.4s ease;
}

@keyframes pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
