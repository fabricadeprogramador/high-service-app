<template>
  <v-form v-model="valid" ref="form">
    <div>
      <v-btn
        text
        small
        color="white"
        class="indigo--text text--darken-4 no-uppercase pa-0"
        width="auto"
        height="auto"
        @click="voltar()"
        >< Voltar</v-btn
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
        v-model="novoCliente.nome"
        label="Nome Completo"
        :rules="nameRules"
        counter
        :maxlength="30"
        type="text"
      ></v-text-field>

      <v-text-field
        v-mask="'###.###.###-##'"
        v-model="novoCliente.cpf"
        class="inputNumeroLimpo"
        label="CPF"
        :rules="cpfRules"
        :maxlength="14"
        type="text"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.tel"
        label="Telefone"
        v-mask="['(##) ####-####', '(##) #####-####']"
        :rules="telRules"
        :maxlength="15"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.email"
        label="E-mail"
        :rules="emailRules"
        type="text"
        counter
        :maxlength="30"
      ></v-text-field>

      <v-select
        v-model="novoCliente.sexo"
        :items="sexo"
        label="Sexo"
        :rules="sexoRules"
      ></v-select>

      <h3 class="mt-5">Endereço:</h3>

      <v-text-field
        v-model="novoCliente.logradouro"
        label="Logradouro"
        :rules="logradouroRules"
        type="text"
        counter
        :maxlength="30"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.nr"
        label="Número"
        v-mask="'######'"
        type="text"
        :maxlength="6"
        class="inputNumeroLimpo"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.complemento"
        label="Complemento"
        type="text"
        counter
        :maxlength="30"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.bairro"
        label="Bairro"
        :rules="bairroRules"
        type="text"
        counter
        :maxlength="30"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.cep"
        v-mask="'#####-###'"
        label="CEP"
        :rules="cepRules"
        type="text"
        :maxlength="9"
      ></v-text-field>

      <v-text-field
        v-model="novoCliente.cidade"
        label="Cidade"
        :rules="cidadeRules"
        type="text"
        counter
        :maxlength="30"
      ></v-text-field>

      <v-select
        v-model="novoCliente.uf"
        :items="uf"
        label="UF"
        :rules="ufRules"
      ></v-select>
    </div>
    <v-row class="ma-5">
      <v-spacer></v-spacer>
      <v-col>
        <v-btn color="primary" :disabled="!valid">Salvar</v-btn>
      </v-col>
      <v-col>
        <v-btn color="primary" @click="cancelar()">Cancelar</v-btn>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: { mask },
  data() {
    return {
      valid: true,
      novoCliente: {
        nome: "",
        cpf: "",
        sexo: "",
        tel: "",
        email: "",
        logradouro: "",
        nr: "",
        complemento: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
        ativo: Boolean,
      },
      nameRules: [(v) => (!!v && v.length >= 4) || "Digite o nome do cliente"],
      cpfRules: [
        (v) => (!!v && v.length == 14) || "Digite o CPF com 11 dígitos",
      ],
      telRules: [
        (v) =>
          (!!v && v.length >= 14) ||
          "Digite o telefone com pelo menos 8 números",
      ],
      emailRules: [(v) => /.+@.+\..+/.test(v) || "Digite um e-mail válido"],
      sexoRules: [(v) => !!v || "Selecione o sexo"],
      logradouroRules: [(v) => (!!v && v.length >= 6) || "Digite o logradouro"],
      bairroRules: [(v) => (!!v && v.length >= 6) || "Digite o bairro"],
      cepRules: [(v) => (!!v && v.length == 9) || "Digite o CEP com 8 dígitos"],
      cidadeRules: [(v) => (!!v && v.length >= 4) || "Digite o nome da cidade"],
      ufRules: [(v) => !!v || "Selecione o estado"],
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
      voltar() {
        this.$router.push("/Login");
      },
      cancelar() {
        this.$refs.form.reset();
        // this.$router.push("/Login");
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
