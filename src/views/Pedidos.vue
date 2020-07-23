<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="pedido in pedidos" :key="pedido._id" cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline"
            >Pedido:
            <span class="font-weight-bold spaced-span">
              #{{ pedido._id }}</span
            ></v-card-title
          >

          <v-card-subtitle class="ml-2 mt-1">
            <div>Empresa: {{ pedido.empresa }}</div>
            <div>Data: {{ pedido.data }}</div>
            <div>Valor: R$ {{ pedido.valor.toFixed(2) }}</div>
            <div>
              Status:
              <span
                class="font-weight-bold spaced-span blue--text"
                v-if="pedido.status == 'Em Andamento'"
              >
                {{ pedido.status }}</span
              >

              <span
                class="font-weight-bold spaced-span red--text"
                v-if="pedido.status == 'Cancelado'"
              >
                {{ pedido.status }}</span
              >

              <span
                class="font-weight-bold spaced-span green--text"
                v-if="pedido.status == 'Concluído'"
              >
                {{ pedido.status }}</span
              >
            </div>
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="abrirDetalhes(pedido)">
              <v-icon>mdi-shopping-search</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- JANELA DE DETALHES DO PEDIDO -->
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title class="headline"
          >Pedido: #{{ pedidoSelecionado._id }}</v-card-title
        >
        <v-card-subtitle class="mt-1">
          <div>Empresa: {{ pedidoSelecionado.empresa }}</div>
          <div>Data: {{ pedidoSelecionado.data }}</div>
          <div>Status: {{ pedidoSelecionado.status }}</div>
        </v-card-subtitle>

        <v-card-text>
          <v-card class="mx-auto" tile>
            <v-data-table
              :headers="headers"
              :items="pedidoSelecionado.produtosServicos"
              :items-per-page="5"
              class="elevation-1"
              fixed-header
            >
              <template v-slot:item.valor="{ item }">
                R$ {{ item.valor.toFixed(2) }}
              </template>
            </v-data-table>
          </v-card>
        </v-card-text>

        <v-card-title class="subtitle-1">
          <v-spacer />
          Total: R$
          {{ parseFloat(pedidoSelecionado.valor).toFixed(2) }}</v-card-title
        >

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" text @click="dialog = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import PedidosRequestUtil from "@/util/PedidosRequestUtil";

export default {
  data: () => ({
    clienteId: "",
    dialog: false,
    headers: [
      {
        text: "Nome",
        align: "start",
        sortable: false,
        value: "nome",
      },
      { text: "Tipo", value: "tipo" },
      { text: "Valor", value: "valor" },
    ],
    pedidoSelecionado: {},
    pedidos: [],
  }),
  mounted() {
    this.getClienteId();
    this.buscarTransacoes(this.clienteId);
  },
  methods: {
    abrirDetalhes(pedido) {
      this.pedidoSelecionado = pedido;
      this.dialog = true;
    },

    buscarTransacoes() {
      PedidosRequestUtil.buscarPedidosCliente(this.clienteId).then(
        (pedidos) => {
          this.pedidos = pedidos;
        }
      );
    },

    getClienteId() {
      /**
       *  TODO: ID estático inicialmente pois depende da regra de autenticação para obter o ID do cliente logado
       *  PS.: Usuário precisa estar logado
       */
      this.clienteId = "5f19001dca55a0e557473c86";
    },
  },
};
</script>

<style>
.spaced-span {
  margin: 0px 10px;
}
</style>
