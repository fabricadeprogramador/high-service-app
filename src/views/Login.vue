<template>
  <div>
    <div class="img-background">
      <v-row
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
        style="height: 1280px"
        >
          <v-card width="60%" class="elevation-12 pa-6">
            <v-row justify="center">
                <v-avatar class="ma-3" size="90">
                  <img src="../assets/logo_HS.jpg">
                </v-avatar>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-form >
                  <v-text-field
                    ref="refInputUsername"
                    label="Username"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    :maxlength="10"/>
                  </v-form>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-form >
                  <v-text-field
                    ref="refInputPassword"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="text"
                    :maxlength="6"/>
                </v-form>
              </v-col>
            </v-row>
              <v-row justify="center">
                <div>
                  <v-btn color="primary" dark >ENTRAR</v-btn>
                </div>
              </v-row>
              <v-row class="pa-5">
                <v-col cols="12" sm="6" md="6" lg="6" class="text-center">
                  <v-btn text small color="primary" class="text-decoration-underline text-start">Recuperar Senha</v-btn>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6" class="text-center">
                  <v-btn text small color="primary" class="text-decoration-underline">Novo Cadastro</v-btn>
                </v-col>
              </v-row> 
          </v-card>
      </v-row>
    </div>     
  </div>
</template>

<style>

.img-background{
background-image: url("../assets/teste.jpg");
background-size: cover;
}

</style>
