<template>
  <div>
    <v-parallax
      src="../assets/teste.jpg"
      height="750"
      jumbotron
      dark
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-card width="65%" class="elevation-12 pa-6">
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
          <v-col cols="12" sm="12" md="6" lg="6" class="text-start">
           <v-btn text small color="primary" class="text-decoration-underline text-start">Recuperar Senha</v-btn>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" class="text-end">
           <v-btn text small color="primary" class="text-decoration-underline">Novo Cadastro</v-btn>
          </v-col>
        </v-row> 
        </v-card>
      </v-row>
    </v-parallax>
  </div>
</template>
