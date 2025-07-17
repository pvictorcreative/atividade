<template>
  <div class="sorteador">
    <h2>Sorteador de Números</h2>
    <div class="input-group">
      <label>Qtd: <input type="number" v-model.number="count" min="1" /></label>
      <label>De: <input type="number" v-model.number="min" /></label>
      <label>Até: <input type="number" v-model.number="max" /></label>
      <label
        ><input type="checkbox" v-model="allowRepeat" /> Permitir
        repetidos</label
      >
      <button @click="sortear">Sortear</button>
    </div>

    <div v-if="resultados.length">
      <h3>Resultados</h3>
      <ul>
        <li v-for="(num, idx) in resultados" :key="idx">{{ num }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sorteador',
  data() {
    return {
      count: 1,
      min: 1,
      max: 100,
      allowRepeat: false,
      resultados: [],
    };
  },
  methods: {
    sortear() {
      this.resultados = [];
      if (this.min >= this.max) {
        return alert('Máximo deve ser maior que mínimo!');
      }
      const range = this.max - this.min + 1;
      if (!this.allowRepeat && this.count > range) {
        return alert(
          'Quantidade maior que intervalo possibilitando sem repetição.'
        );
      }

      while (this.resultados.length < this.count) {
        const n = Math.floor(Math.random() * range) + this.min;
        if (this.allowRepeat || !this.resultados.includes(n)) {
          this.resultados.push(n);
        }
      }
    },
  },
};
</script>

<style scoped>
.sorteador {
  font-family: Arial;
  padding: 20px;
}
.input-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.input-group label {
  display: flex;
  align-items: center;
  gap: 4px;
}
button {
  padding: 6px 12px;
}
</style>
