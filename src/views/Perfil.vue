<template>
  <v-list flat>
    <v-subheader>
      <p class="font-weight-bold">PERFIL</p>
    </v-subheader>
    <v-divider></v-divider>
    <v-list-item-group v-model="item" color="primary">
      <v-list-item
        v-for="item in menu"
        :key="item.text"
        link
        router
        :to="item.rota"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    item: "",
    menu: [
      { text: "Meus Dados", icon: "mdi-account", rota: "MeusDadosConsulta" },
      { text: "Pedidos", icon: "mdi-basket", rota: "pedidos" }, //mdi-cart-outline
      {
        text: "Minhas formas de pagamentos",
        icon: "mdi-credit-card",
        rota: "pagamentos",
      },
      { text: "Logout", icon: "mdi-account-remove", rota: "login" },
    ],
  }),
};
</script>
