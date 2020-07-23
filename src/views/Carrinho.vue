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
    <h3 class="mt-3 indigo--text text--darken-4">
      Seu Carrinho
    </h3>
    <div
      class="empresaVendedora indigo--text text--darken-4"
      v-text="'Vendedor: ' + empresaVendedora.empresa"
    ></div>

    <v-divider class="mt-2"></v-divider>

    <v-card
      class="mt-2"
      v-for="produtoServico in carrinho"
      :key="produtoServico.title"
    >
      <v-row align="center" justify="center" dense>
        <v-col cols="3" align="center" justify="center">
          <v-img height="50px" width="50px" :src="produtoServico.src"></v-img>
        </v-col>
        <v-col cols="6">
          <v-card-text class="pa-2" v-text="produtoServico.title"></v-card-text>
          <money
            class="pl-1 valorDeUmCardDoGrid blue--text text--lighten-2"
            v-model="produtoServico.valor"
            v-bind="money"
            readonly
          ></money>
        </v-col>
        <v-col cols="3">
          <v-row align="center" justify="center">
            <v-icon
              @click="removeProdutoServico(produtoServico)"
              align-end
              class="pa-2"
              >mdi-delete-outline</v-icon
            >
          </v-row>
          <v-row align="center" justify="center">
            <v-flex xs1>
              <v-text-field
                class="quantidade ma-0 pa-0"
                v-model="produtoServico.quantidade"
                type="number"
              ></v-text-field>
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="mt-8">
      <v-row>
        <v-col>
          <v-card-text class="pa-0 pl-3">
            Preço Total
          </v-card-text>
        </v-col>
        <v-col> R$ {{ precoTotal() }} </v-col>
        <!-- <money
            class="pl-1 valorDeUmCardDoGrid blue--text text--lighten-2"
            v-model="variavelPrecoTotal"
            v-bind="money"
            readonly
          ></money> -->
      </v-row>
    </v-card>

    <v-container class="ml-0 mt-5 pa-0">Escolha o cartão</v-container>

    <v-select
      color
      v-model="cartaoEscolhido"
      :items="selectCartoesDoCliente"
      filled
      label="Escolha o cartão"
    ></v-select>

    <v-btn
      :ripple="false"
      text
      small
      color="white"
      class="indigo--text text--darken-4 no-uppercase pa-0"
      width="auto"
      height="auto"
      @click="cadastrarNovoCartao()"
      >&#43; Novo Cartão</v-btn
    >
    <v-row class="mt-15" align="center" justify="center">
      <v-col align="center" justify="center">
        <v-btn class="pa-6 no-uppercase" width="100%" color="primary"
          >Finalizar</v-btn
        >
      </v-col>
    </v-row>
    <!-- <div v-for="card in cards" :key="card.title">
      <v-card class="my-2">
        <v-layout fluid>
          <v-layout fluid>
            <v-img
              class="align-start mt-1 ml-1 pa-0"
              :src="card.src"
              width="10px"
              height="50px"
            ></v-img>
          </v-layout>
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
          </v-layout>
          <v-layout column>
            <v-row no-gutters>
              <v-col class="text-right">
                <v-icon align-end class="pa-2">mdi-delete-outline</v-icon>
                <v-container class="pa-0 ma-0">
                  <v-text-field
                    class="quantidade ma-0 pa-0 centered-input"
                    v-model="foo"
                    type="number"
                    append-outer-icon="mdi-plus-box"
                    @click:append-outer="increment()"
                    prepend-icon="mdi-minus-box"
                    @click:prepend="decrement()"
                  ></v-text-field>
                </v-container>
              </v-col>
            </v-row>
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
      cartaoEscolhido: "",
      selectCartoesDoCliente: ["Cartão Visa", "Cartão Master"],
      // cartoesDoCliente: [
      //   {
      //     numero: "8408884484844848",
      //     bandeira: "Visa",
      //     vencimento: "01/2020",
      //     CVV: "111",
      //   },
      //   {
      //     numero: "8408884484840505",
      //     bandeira: "Mastercard",
      //     vencimento: "03/2020",
      //     CVV: "222",
      //   },
      // ],

      quantidade: 1,
      foo: 1,
      carrinho: [
        {
          title: "Tênis Azul Claro",
          valor: 100.0,
          empresaVendedora: "Só Tênis",
          src:
            "https://thumbs.dreamstime.com/b/sneakers-sports-shoes-side-view-white-background-blue-slippers-177145333.jpg",
          link: "/DetalhaProduto",
          quantidade: 1,
          _id: "111",
        },
        {
          title: "Serviço de Engenharia",
          valor: 1000.0,
          empresaVendedora: "The Best Engenharia",
          src:
            "https://thumbs.dreamstime.com/b/surveyors-work-two-land-31349173.jpg",
          link: "/DetalhaProduto",
          quantidade: 1,
          _id: "222",
        },
        {
          title: "Serviço de Manicure",
          valor: 60.0,
          empresaVendedora: "Beauty Unhas",
          src:
            "https://thumbs.dreamstime.com/b/manicure-cat-s-eye-blue-stained-glass-gel-polish-picture-rhinestones-nails-85399835.jpg",
          link: "/DetalhaProduto",
          quantidade: 1,
          _id: "333",
        },
      ],
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
      removeProdutoServico(produtoServico) {
        let stop = false;
        let i = 0;
        while (stop == false || i < this.carrinho.length) {
          if (produtoServico._id == this.carrinho[i]._id) {
            this.carrinho.splice(i, 1);
            stop = true;
          }
          i++;
        }
      },
      cadastrarNovoCartao() {
        this.$router.push("/Pagamentos");
      },
      voltar() {
        this.$router.push("/");
      },
      increment() {
        this.foo = parseInt(this.foo, 10) + 1;
      },
      decrement() {
        this.foo = parseInt(this.foo, 10) - 1;
      },
      precoTotal() {
        let precoTotal = 0;
        for (let i = 0; i < this.carrinho.length; i++) {
          precoTotal += this.carrinho[i].valor;
        }
        precoTotal = precoTotal.toFixed(2);
        return precoTotal;
      },
      geraSelectCartoesDoCliente() {
        for (let i = 0; i < cartoesDoCliente.length; i++) {
          selectCartoesDoCliente.push(cartoesDoCliente[i].numero);
        }
      },
      // mounted() {
      //   this.geraSelectCartoesDoCliente();
      // },
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
.empresaVendedora {
  font-size: 0.65em;
}
.quantidade {
  width: 10px;
  text-align: center;
}
</style>
