<template>
  <v-app>
    <!-- Área do conteúdo -->
    <v-content class="ma-3" app>
      <router-view></router-view>
    </v-content>

    <!-- Área de navegação -->
    <v-bottom-navigation v-model="bottomNav" shift app>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    bottomNav: 2
  }),
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
      }
    }
  }
};
</script>
