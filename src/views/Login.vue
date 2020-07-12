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
        <v-card height="60%" width="60%" class="elevation-12 pa-10">
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
            <v-btn color="primary" dark>ENTRAR</v-btn>
          </div>
        </v-row>
            
        </v-card>
      </v-row>
    </v-parallax>
  </div>
</template>
