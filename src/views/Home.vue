<template>
  <div>
    <div class="d-flex align-end flex-column mb-2">
      <v-icon
        align-self="right"
        size="20"
        v-if="clienteLogado"
        color="grey"
        @click="logOut()"
        v-bind:title="msnLogOut"
      >mdi-logout</v-icon>
    </div>

    <div class="d-flex d-sm-none">
      <template>
        <v-carousel :show-arrows="false" cirle height="120px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-sm-flex d-md-none">
      <template>
        <v-carousel :show-arrows="false" cirle height="220px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-md-flex d-lg-none">
      <template>
        <v-carousel :show-arrows="false" cirle height="320px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-lg-flex d-xl-none">
      <template>
        <v-carousel :show-arrows="false" cirle height="420px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-xl-flex">
      <template>
        <v-carousel :show-arrows="false" cirle height="720px">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://linhadermotivin.com.br/content/user_4/images/Banners-INTERNAS-1200x410-BRASIL-4%281%29.jpg"
        },
        {
          src:
            "https://linhadermotivin.com.br/content/user_4/images/Banners-INTERNAS-1200x410-BRASIL-1.jpg"
        },
        {
          src:
            "https://linhadermotivin.com.br/content/user_1/images/dermotivin-control-banner.jpeg"
        }
      ],
      clienteLogado: true,
      msnLogOut: "Fazer o logout",
      methods: {
        logOut() {}
      }
    };
  }
};
</script>
