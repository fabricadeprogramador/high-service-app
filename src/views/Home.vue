<template>
  <div>
    <v-row>
    
    <div class="d-flex flex-column mb-2 pa-3">
    <v-text-field 
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Buscar Produtos"
        outlined
        dense
      ></v-text-field>
    </div>
      <v-spacer></v-spacer>

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

    </v-row>


    <div class="d-flex d-sm-none">
      <template>
        <v-carousel circle :show-arrows="false" height="120px" hide-delimiter-background>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-sm-flex d-md-none">
      <template>
        <v-carousel circle :show-arrows="false" height="220px"  hide-delimiter-background>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-md-flex d-lg-none">
      <template>
        <v-carousel cirle :show-arrows="false"  height="320px" hide-delimiter-background>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-lg-flex d-xl-none">
      <template>
        <v-carousel circle :show-arrows="false" height="420px" hide-delimiter-background>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <div class="d-none d-xl-flex">
      <template>
        <v-carousel circle :show-arrows="false" height="720px" hide-delimiter-background>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </template>
    </div>

    <template>
      <v-div class="mx-auto mt-5" max-width="500">
        <v-container class="pb-0 mt-5">
          <div
            class="tituloGridOfCards indigo--text text--darken-4 align-start pa-0"
          >Últimos produtos adicionados</div>
        </v-container>
        <v-container class="pt-0" fluid>
          <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="150px"
                ></v-img>

                <div class='pa-1'>
                  <div class="tituloDeUmCardDoGrid indigo--text text--darken-4" v-text="card.title"></div>
                  <money
                    class="valorDeUmCardDoGrid blue--text text--lighten-2"
                    v-model="card.valor" v-bind="money" readonly
                  ></money>
                  <div class="empresaVendedoraDeUmCardDoGrid" v-text="'Loja: '+card.empresaVendedora"></div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-div>
    </template>
  </div>
</template>
  </div>
</template>

<script>
import { Money } from "v-money";
export default {
  components: {Money},
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
      cards: [
        {
          title: "Tênis Azul Claro",
          valor: 100.0,
          empresaVendedora: "Só Tênis",
          src:
            "https://thumbs.dreamstime.com/b/sneakers-sports-shoes-side-view-white-background-blue-slippers-177145333.jpg",
          flex: 6
        },
        {
          title: "Serviço de Engenharia",
          valor: 1000.0,
          empresaVendedora: "The Best Engenharia",
          src:
            "https://thumbs.dreamstime.com/b/surveyors-work-two-land-31349173.jpg",
          flex: 6
        },
        {
          title: "Serviço de Manicure",
          valor: 60.0,
          empresaVendedora: "Beauty Unhas",
          src:
            "https://thumbs.dreamstime.com/b/manicure-cat-s-eye-blue-stained-glass-gel-polish-picture-rhinestones-nails-85399835.jpg",
          flex: 6
        }
      ],
    money: {
      decimal: ",",
      thousands: ".",
      prefix: "R$ ",
      suffix: "",
      precision: 2,
      masked: false
    },
      clienteLogado: true,
      msnLogOut: "Fazer o logout",
      methods: {
        logOut() {}
      }
    };
  }
};
</script>
<style>
.tituloGridOfCards {
  font-size: 0.9em;
  font-weight: 500;
}
.tituloDeUmCardDoGrid {
  font-size: 0.8em;
}
.valorDeUmCardDoGrid{
  font-size: 0.9em;
}

.empresaVendedoraDeUmCardDoGrid{
  font-size: 0.6em;
}
</style>