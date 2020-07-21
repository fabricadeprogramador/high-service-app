<template>
    <v-row justify="center">
        <v-col cols="12" sm="8" md="7" lg="4">
            <v-card color="#385F73" dark max-width="650" class="rounded-xl">
                <v-row class="ma-2">
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-icon x-large>mdi-set-center-right</v-icon>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3">
                        <v-list color="#385F73">
                            <v-list-item-group v-model="item" class="pa-2 d-flex justify-center">
                                <v-list-item v-for="(item,i) in items" :key="i">
                                    <v-list-item-title v-text="item.text" class="headline"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="3">
                        <v-list color="#385F73">
                            <v-list-item-group v-model="item2" class="pa-2 d-flex justify-center">
                                <v-list-item v-for="(item2,i) in items2" :key="i">
                                    <v-list-item-title v-text="item2.text" class="headline"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="3">
                        <v-list color="#385F73">
                            <v-list-item-group v-model="item3" class="pa-2 d-flex justify-center">
                                <v-list-item v-for="(item3,i) in items3" :key="i">
                                    <v-list-item-title v-text="item3.text" class="headline"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="3">
                        <v-list color="#385F73">
                            <v-list-item-group v-model="item4" class="pa-2 d-flex justify-center">
                                <v-list-item v-for="(item4,i) in items4" :key="i">
                                    <v-list-item-title v-text="item4.text" class="headline"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" sm="6" md="6" lg="6">
                        <v-card-subtitle >Card Holder</v-card-subtitle>
                        <v-list color="#385F73">
                            <v-list-item-group v-model="nome">
                                <v-list-item v-for="(nome,i) in nomes" :key="i">
                                    <v-list-item-title v-text="nome.text"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                    <v-col cols="6" sm="6" md="6" lg="6">
                        <v-card-subtitle>Card Holder</v-card-subtitle>
                        <v-list color="#385F73">
                            <v-list-item-group v-model="ano">
                                <v-list-item v-for="(ano,i) in anos" :key="i">
                                    <v-list-item-title v-text="ano.text"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-col>
                </v-row>
            </v-card>
            <v-row class="mt-10">
                <v-col cols="12">
                    <router-link to="/perfil">
                        <v-btn block color="blue" dark flat>Cadastrar Cartão</v-btn>
                    </router-link>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: ()=>({
        item:1,
        items:[
            {text: '1234'},
        ],
        items2:[
            {text: '1234'},
        ],
        items3:[
            {text: '1234'},
        ],
        items4:[
            {text: '1234'},
        ],
        nome:1,
        nomes:[
            {text: 'Karen Bachinne'},
        ],
        ano:1,
        anos:[
            { text: '06/28'},
        ]
    }),
    
}
</script>