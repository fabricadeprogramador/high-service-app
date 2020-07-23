<template>
    <v-row justify="center">
        <v-col cols="4">
            <v-card max-width="600" class="pa-3" elevation="5">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <label>Numero do Cartão</label>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3" sm="3">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <label>Data de Expiração</label>
                        </v-col>
                        <v-col cols="6">
                            <label>Código de Segurança</label>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                        <v-col cols="6">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col cols="12">
                            <label>Seu Nome</label>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                auto-grow 
                                outlined 
                                rows="1" 
                                row-height="12">
                            </v-textarea>
                        </v-col>
                    </v-row>
                    <v-row class="mt-10">
                        <v-col cols="12">
                            <router-link to="/pagamentos">
                                <v-btn block color="blue" dark flat>Salvar</v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>
    