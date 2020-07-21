<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="pedido in pedidos" :key="pedido._id" cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline"
            >Pedido: #{{ pedido._id }}</v-card-title
          >

          <v-card-subtitle class="ml-2 mt-1">
            <div>Empresa: {{ pedido.empresa }}</div>
            <div>Data: {{ pedido.data }}</div>
            <div>Status: {{ pedido.status }}</div>
            <div>Valor: R${{ pedido.valor.toFixed(2) }}</div>
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
    <v-dialog v-model="dialog" max-width="350">
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
          <v-card class="mx-auto" max-width="300" tile>
            <v-list shaped>
              <v-subheader>Produtos/Serviços</v-subheader>
              <v-list-item-group
                v-model="pedidoSelecionado.produtosServicos"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in pedidoSelecionado.produtosServicos"
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.nome"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.tipo"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-title v-text="item.valor"></v-list-item-title>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-card-text>

        <v-card-title class="subtitle-1">
          <v-spacer />
          Total: R$ {{ pedidoSelecionado.valor }}</v-card-title
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
export default {
  data: () => ({
    dialog: false,
    pedidoSelecionado: {},
    pedidos: [
      {
        _id: 1,
        empresa: "Empresa A",
        valor: 150.0,
        data: "20/07/2020",
        status: "Em Andamento",
        produtosServicos: [
          {
            nome: "Produto G",
            tipo: "Produto",
            valor: 420.0,
            descricao: "Definições do produto G aqui",
          },
          {
            nome: "Produto Y",
            tipo: "Produto",
            valor: 15.5,
            descricao: "Definições do produto Y aqui",
          },
          {
            nome: "Serviço K",
            tipo: "Serviço",
            valor: 1527.58,
            descricao: "Definições do serviço K aqui",
          },
        ],
      },
      {
        _id: 2,
        empresa: "Empresa D",
        valor: 200.0,
        data: "20/07/2020",
        status: "Concluído",
        produtosServicos: [
          {
            nome: "Produto G",
            tipo: "Produto",
            valor: 420.0,
            descricao: "Definições do produto G aqui",
          },
          {
            nome: "Produto Y",
            tipo: "Produto",
            valor: 15.5,
            descricao: "Definições do produto Y aqui",
          },
          {
            nome: "Serviço K",
            tipo: "Serviço",
            valor: 1527.58,
            descricao: "Definições do serviço K aqui",
          },
        ],
      },
      {
        _id: 3,
        empresa: "Empresa B",
        valor: 52.35,
        data: "20/07/2020",
        status: "Em Andamento",
        produtosServicos: [
          {
            nome: "Produto G",
            tipo: "Produto",
            valor: 420.0,
            descricao: "Definições do produto G aqui",
          },
          {
            nome: "Produto Y",
            tipo: "Produto",
            valor: 15.5,
            descricao: "Definições do produto Y aqui",
          },
          {
            nome: "Serviço K",
            tipo: "Serviço",
            valor: 1527.58,
            descricao: "Definições do serviço K aqui",
          },
        ],
      },
    ],
  }),
  methods: {
    abrirDetalhes(pedido) {
      this.pedidoSelecionado = pedido;
      this.dialog = true;
    },

    buscarTransacoes() {},
  },
};
</script>

<style></style>
