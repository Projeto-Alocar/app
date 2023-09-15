import { View , TouchableOpacity, Text, BackHandler, Image } from "react-native";
import React,{useState,useEffect } from 'react'
import BackgroundGradient from "../../../../componentes/BackgroundGradient";
import styles from "./style";
import TxtCidade from '../../../../componentes/TxtCidade'
import solicitacoesRoutes from '../../../../dados/Rotas/solicitacaoRoutes'

import Teste from '../../../../test/test';

export default function LayoutUsuario(props){   
    var usuario = null 
    try {
        usuario = Teste.SetarUsuario
    } catch (error) {
        usuario = props.route.params.usuario;
    }

    async function veiculos(){
        props.navigation.navigate("LayoutVeiculosUsuario",{usuario: usuario})
    }
    async function agendamentos(){
        const solicitacoes = await solicitacoesRoutes.getByIdUsuario(usuario.Id)
        props.navigation.navigate("LayoutSolicitacoesUsuario",{usuario: usuario, solicitacoes: solicitacoes})
    }
    return(
        <View style={styles.container}> 
            <BackgroundGradient></BackgroundGradient> 
            <TxtCidade cidade={usuario.Cidade}></TxtCidade>
            <TouchableOpacity
                style={styles.btn}
                onPress={veiculos}>
                <Image
                    source ={require('../../../../../assets/img/carro.png')}
                    fadeDuration={0}
                    style={styles.imgBtn}
                ></Image>
                <Text style={styles.txBtn}>Buscar Veículos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={agendamentos}>
                <Image
                    source ={require('../../../../../assets/img/agenda.png')}
                    fadeDuration={0}
                    style={styles.imgBtn}
                ></Image>
                <Text style={styles.txBtn}>Agendamentos</Text>
            </TouchableOpacity>
        </View>
    )
}