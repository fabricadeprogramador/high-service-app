<template>
    <div>
        <v-for>
        <v-col cols="12">
           <v-card
            color="#385F73"
            dark>
                <v-col cols="12">
                    <v-list-item-icon>
                        <v-icon x-large>mdi-set-center-right</v-icon>
                    </v-list-item-icon>
                </v-col>
                <v-row>
                    <v-col cols="3">
                        <v-card-text><h3>1234</h3></v-card-text>
                    </v-col>
                     <v-col cols="3">
                        <v-card-text><h3>5678</h3></v-card-text>
                    </v-col>
                     <v-col cols="3">
                        <v-card-text><h3>9012</h3></v-card-text>
                    </v-col>
                     <v-col cols="3">
                        <v-card-text><h3>3456</h3></v-card-text>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-card-subtitle>Card Holder</v-card-subtitle>
                        <v-card-text><h3 class="font-weight-regular">Fulano de Tal</h3></v-card-text>
                    </v-col>
                    <v-col cols="6">
                        <v-card-subtitle>Card Save</v-card-subtitle>
                        <v-card-text><h3 class="font-weight-regular">06/28</h3></v-card-text>
                    </v-col>
                </v-row>
            </v-card>
       </v-col>
    </v-for>
    <v-col cols="12">
        <v-card color="blue">
            <v-card-actions color="blue">
                <v-btn text color="white headline">Adicionar Cartão</v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
    </div>
</template>

