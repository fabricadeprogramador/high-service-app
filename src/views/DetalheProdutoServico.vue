<template>
  <v-container>
    <div>
      <v-btn
        :ripple="false"
        text
        small
        color="white"
        class="indigo--text text--darken-4 no-uppercase pa-0"
        width="auto"
        height="auto"
        @click="voltar()"
        >< Voltar</v-btn
      >
    </div>

    <h3 class="mt-3 indigo--text text--darken-4">
      {{ produtoServicoDetalhado.nome }}
    </h3>

    <v-card class="mt-3" width="100%">
      <v-img
        contain
        src="https://images-na.ssl-images-amazon.com/images/I/31qbRG1OonL._AC_SY400_.jpg"
        max-height="200px"
      ></v-img>
    </v-card>

    <div
      class="empresaVendedora mt-2 indigo--text text--darken-4"
      v-text="'Oferecido por: ' + empresaVendedora.empresa"
    ></div>

    <div class="mt-4">
      Descrição:
    </div>

    <div
      class="descricaoProdutoServicoDetalhado"
      v-text="produtoServicoDetalhado.descricao"
    ></div>

    <v-col cols="12" sm="6" md="6" lg="6" class="text-center">
      <v-btn
        :ripple="false"
        text
        small
        color="white"
        class="text-decoration-underline mt-3 no-uppercase indigo--text text--darken-4 pa-0"
        width="auto"
        height="auto"
        @click="acessarMensagem()"
        >Enviar Mensagem</v-btn
      >
    </v-col>
    <v-divider class="mt-5"></v-divider>
    <div class="mt-1 tituloDoValor">
      Valor:
    </div>
    <money
      class="valorDoProdutoServico ma-0 font-weight-bold"
      v-model="produtoServicoDetalhado.valor"
      v-bind="money"
      readonly
    ></money>

    <v-row class="my-5 mx-0">
      <v-spacer></v-spacer>
      <v-btn width="100%" color="primary" class="no-uppercase pa-7"
        >Adicionar ao Carrinho</v-btn
      >
      <v-spacer></v-spacer>
    </v-row>

    <!-- <div v-for="card in cards" :key="card.title">
      <v-card @click="acessaProduto()" class="my-2">
        <v-layout fluid>

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
    </div> -->
  </v-container>
</template>

<script>
import { Money } from "v-money";
export default {
  components: { Money },
  data() {
    return {
      search: "",
      produtoServicoDetalhado: {
        nome: "Caderno Pequeno",
        tipo: "Produto",
        valor: 10,
        descricao: "Caderno escolar tamanho pequeno",
        ativo: false,
        _id: "5ef296df1fbc8709b0c9da47",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/31qbRG1OonL._AC_SY400_.jpg",
      },
      empresaVendedora: {
        _id: "5ef14b221ded992e3c0ebd20",
        empresa: "papelaria",
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false,
      },
      voltar() {
        this.$router.push("/");
      },
      acessarMensagem() {},
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
.valorDoProdutoServico {
  outline: none;
  font-size: 1.5em;
}
.empresaVendedora {
  font-size: 1em;
}
.tituloDoValor {
  font-size: 0.8em;
}
</style>
