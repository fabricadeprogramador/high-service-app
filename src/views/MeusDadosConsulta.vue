<template>
  <v-form>
    <div>
      <v-btn
        :ripple="false"
        text
        small
        color="white"
        class="indigo--text text--darken-4 no-uppercase pa-0"
        width="auto"
        height="auto"
        @click="voltar()"
        >&#60; Voltar</v-btn
      >
      <!-- <v-btn
        :ripple="false"
        text="true"
        tile="true"
        elevation="0"
        depressed="true"
        color="white"
        class="indigo--text text--darken-4 no-uppercase pa-0"
        width="auto"
        height="auto"
        @click="voltar()"
        >< Voltar</v-btn> -->
    </div>
    <div class="pa-3">
      <h3 class="mt-5">Seus dados:</h3>
      <v-text-field
        v-model="meusDadosConsulta.nome"
        label="Nome Completo"
        type="text"
        readonly
      ></v-text-field>

      <v-text-field
        v-mask="'###.###.###-##'"
        v-model="meusDadosConsulta.cpf"
        class="inputNumeroLimpo"
        label="CPF"
        type="text"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.tel"
        label="Telefone"
        v-mask="['(##) ####-####', '(##) #####-####']"
        type="text"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.email"
        label="E-mail"
        type="text"
        :maxlength="30"
        readonly
      ></v-text-field>

      <v-select
        v-model="meusDadosConsulta.sexo"
        :items="sexo"
        label="Sexo"
        readonly
      ></v-select>

      <h3 class="mt-5">Endereço:</h3>

      <v-text-field
        v-model="meusDadosConsulta.logradouro"
        label="Logradouro"
        type="text"
        :maxlength="30"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.nr"
        label="Número"
        v-mask="'######'"
        type="text"
        :maxlength="6"
        class="inputNumeroLimpo"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.complemento"
        label="Complemento"
        type="text"
        :maxlength="30"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.bairro"
        label="Bairro"
        type="text"
        :maxlength="30"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.cep"
        v-mask="'#####-###'"
        label="CEP"
        type="text"
        :maxlength="9"
        readonly
      ></v-text-field>

      <v-text-field
        v-model="meusDadosConsulta.cidade"
        label="Cidade"
        type="text"
        readonly
      ></v-text-field>

      <v-select
        v-model="meusDadosConsulta.uf"
        :items="uf"
        label="UF"
        readonly
      ></v-select>
    </div>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      sexo: ["M", "F"],
      uf: [
        "AC",
        "AL",
        "AM",
        "AP",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RO",
        "RS",
        "RR",
        "SC",
        "SE",
        "SP",
        "TO",
      ],
      meusDadosConsulta: {
        _id: "5ed6e10a34ec181824841fcf",
        nome: "Jao",
        cpf: "231.181.684-48",
        sexo: "F",
        tel: "(67)11111-1111",
        email: "testeemail@teste.com",
        logradouro: "Rua da banana",
        nr: "25",
        complemento: "teste1",
        bairro: "teste1",
        cep: "11111-111",
        cidade: "teste1",
        uf: "MS",
        ativo: true,
        __v: 0,
      },
      voltar() {
        this.$router.push("/Perfil");
      },
    };
  },
};
</script>

<style>
.inputNumeroLimpo input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.no-uppercase {
  text-transform: none;
}
</style>
