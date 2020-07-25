<template>
  <v-container>
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
    </div>
    <v-col cols="12" sm="6" md="6" lg="6" class="text-center">
      <h3 class="mt-3 indigo--text text--darken-4">
        ENVIE SUA MENSAGEM
      </h3>
    </v-col>

    <h5>Destinatário: {{ empresaVendedora.empresa }}</h5>
    <h5>Produto: {{ produtoServicoDetalhado.nome }}</h5>
    <v-textarea
      class="mt-5"
      outlined
      placeholder="Digite sua mensagem aqui..."
      name="Mensagem"
      label="Mensagem"
      v-model="textoMensagem"
    ></v-textarea>

    <v-row>
      <v-spacer></v-spacer>
      <v-btn @click="enviarMensagem()" color="primary" class="no-uppercase pa-5"
        >Enviar Mensagem</v-btn
      >
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      textoMensagem: "",
      produtoServicoDetalhado: {
        nome: "Caderno Pequeno",
        tipo: "Produto",
        valor: 10,
        descricao: "Caderno escolar tamanho pequeno",
        ativo: false,
        _id: "5ef296df1fbc8709b0c9da47",
        src:
          "https://images-na.ssl-images-amazon.com/images/I/31qbRG1OonL._AC_SY400_.jpg",
      },
      empresaVendedora: {
        _id: "5ef14b221ded992e3c0ebd20",
        empresa: "papelaria",
      },
      clienteAutenticado: {
        _id: "",
      },
      voltar() {
        this.$router.push("/DetalheProdutoServico");
      },
      enviarMensagem() {
        let pacoteEnvioMensagem = {};
        pacoteEnvioMensagem._idEmpresaVendedora = this.empresaVendedora._id;
        pacoteEnvioMensagem._idProdutoServico = this.produtoServicoDetalhado._id;
        pacoteEnvioMensagem._idCliente = this.clienteAutenticado._id;
        alert("Mensagem enviada!");
        this.voltar();
        //Aqui dispara requisição para API enviando pacoteEnvioMensagem
      },
    };
  },
};
</script>

<style>
.no-uppercase {
  text-transform: none;
}
.empresaVendedora {
  font-size: 1em;
}
</style>
