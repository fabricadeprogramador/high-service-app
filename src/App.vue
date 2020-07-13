<template>
  <v-app>
    <!-- Área do conteúdo -->
    <v-content class="ma-3" app>
      <router-view></router-view>
    </v-content>

    <!-- Área de navegação -->
  <v-list>
     <v-bottom-navigation :value="activeBtn" grow color="indigo">
        <v-list-item v-for="item in menu" :key="item.titulo" link router :to="item.rota">
          <v-list-item-action>
            <v-icon>{{ item.icone }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-bottom-navigation>
  </v-list>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    activeBtn: "",
    menu: [
      {
        titulo: "Home",
        icone: "mdi-home",
        rota: "/"
      },
      {
        titulo: "Cart",
        icone: "mdi-cart",
        rota: "transacoes"
      },
      {
        titulo: "Login",
        icone: "mdi-login",
        rota: "login"
      }
    ]
  }),
  computed: {

  }
};
</script>
