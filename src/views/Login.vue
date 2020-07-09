<template>
  <v-img
    src="https://lh3.googleusercontent.com/proxy/NJXCseNiCpyqHEtyFusQytdOW6eOSYsgkRoQo7_zKifKVRVgJD76V0LRfQ0AE6MrlfEZ72odmhnT0CbpRGC8HbtVEAH6ArWkvWYK_s_-aC4YpT5RXgWJ2jkmEQf0y1G0DyM7W5a20TRp"
    max-height="95%">
        <v-content class="pa-5">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" md="7" lg="6" xl="4">
                <v-card class="elevation-12 pa-10">
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
                 
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
    </v-img>
</template>
