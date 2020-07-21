<template>
  <v-container>
    <v-btn
      :ripple="false"
      text
      small
      color="white"
      class="indigo--text text--darken-4 no-uppercase pa-0"
      width="auto"
      height="auto"
      @click="voltar()"
      >&#60; Voltar</v-btn
    >
    <v-container fluid width="100%" class="pa-0 mt-3">
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Buscar Produtos"
        outlined
        dense
      ></v-text-field>
    </v-container>
    <div v-for="card in cards" :key="card.title">
      <v-card @click="detalhaProduto()" class="my-2">
        <v-layout fluid>
          <v-img
            class="align-start mt-1 ml-1 pa-0"
            :src="card.src"
            width="10px"
            height="50px"
          ></v-img>
          <v-layout column>
            <div>
              <v-textarea
                class="tituloDeUmCardDoGrid indigo--text text--darken-4"
                v-text="card.title"
              ></v-textarea>
            </div>
            <div>
              <money
                class="valorDeUmCardDoGrid blue--text text--lighten-2"
                v-model="card.valor"
                v-bind="money"
                readonly
              ></money>
            </div>
            <div>
              <div
                class="empresaVendedoraDeUmCardDoGrid"
                v-text="'Loja: ' + card.empresaVendedora"
              ></div>
            </div>
          </v-layout>
        </v-layout>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { Money } from "v-money";
export default {
  components: { Money },
  data() {
    return {
      search: "",
      cards: [
        {
          title: "Tênis Azul Claro",
          valor: 100.0,
          empresaVendedora: "Só Tênis",
          src:
            "https://thumbs.dreamstime.com/b/sneakers-sports-shoes-side-view-white-background-blue-slippers-177145333.jpg",
          link: "/DetalhaProduto",
        },
        {
          title: "Serviço de Engenharia",
          valor: 1000.0,
          empresaVendedora: "The Best Engenharia",
          src:
            "https://thumbs.dreamstime.com/b/surveyors-work-two-land-31349173.jpg",
          link: "/DetalhaProduto",
        },
        {
          title: "Serviço de Manicure",
          valor: 60.0,
          empresaVendedora: "Beauty Unhas",
          src:
            "https://thumbs.dreamstime.com/b/manicure-cat-s-eye-blue-stained-glass-gel-polish-picture-rhinestones-nails-85399835.jpg",
          link: "/DetalhaProduto",
        },
      ],
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
      detalhaProduto() {
        this.$router.push("/DetalheProdutoServico");
      },
      voltar() {
        this.$router.push("/");
      },
    };
  },
};
</script>

<style>
.inputNumeroLimpo input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.no-uppercase {
  text-transform: none;
}
.tituloGridOfCards {
  font-size: 0.9em;
  font-weight: 500;
}
.tituloDeUmCardDoGrid {
  padding-top: 0px;
  margin-top: 0px;
  font-size: 0.8em;
  margin-left: 5px;
}
.valorDeUmCardDoGrid {
  outline: none;
  font-size: 0.9em;
  margin-left: 5px;
}
.empresaVendedoraDeUmCardDoGrid {
  font-size: 0.6em;
  margin-left: 5px;
}
</style>
