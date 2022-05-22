<template>
  <div>
    <div v-for="vagas in vaga" :key="vagas.id">
      <jobCard
      :cargo="vagas.cargo"
      :cidade="vagas.cidade"
      :estado="vagas.estado"
      :conhecimentos="vagas.conhecimentos"
      :formacao="vagas.formacao"
      :jornada="vagas.jornada"
      :logo="vagas.logo"
      :regime="vagas.regime"
      :remuneracao="vagas.remuneracao"
      :requisitos="vagas.requisitos"
      >
      </jobCard>
    </div>
    <div>
      <input type="text" v-model="search" placeholder="Pesquisar..." class="form-control">
      <button class="btn btn-primary mt-4" @click="buscaCards">Buscar</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jobCard from "./jobCard.vue"


export default {
  name: 'jobPanel',
  props: {
  },
  components: {
    jobCard
  },
  data(){
    return {
      cards:[],
      search: "",
      vaga: [],
    }
  },
  mounted(){
    buscaCards()
  },
  methods: {
    buscaCards(){
      axios.get(`${this.URL}/cards/${this.filtro}`)
            .then(response => {
                console.log(response.data)
                this.vaga = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
  }
}
</script>


<style scoped>

</style>
