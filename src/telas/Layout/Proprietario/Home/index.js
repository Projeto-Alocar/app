import { View , TouchableOpacity, Text, BackHandler, Image} from "react-native";
import React,{useState,useEffect} from 'react'
import BackgroundGradient from "../../../../componentes/BackgroundGradient";
import styles from "./style";
import solicitacoesRoutes from '../../../../dados/Rotas/solicitacaoRoutes'

import Teste from '../../../../test/test';

export default function LayoutProprietario(props){
    const [proprietario, setProprietario] = useState(null);

    useEffect(() => {
        try {
            setProprietario(Teste.SetarProprietario)
        } catch (error) {
            setProprietario(useState(props.route.params.proprietario))
        }
    }, [])
    
    async function veiculos(){
        props.navigation.navigate("LayoutVeiculosProprietario",{ proprietario: proprietario})
    }
    async function agendamentos(){
        const solicitacoes = await solicitacoesRoutes.getByIdPoprietario(proprietario.Id)
        props.navigation.navigate("LayoutSolicitacoesProprietario",{solicitacoes: solicitacoes})
    }
    return(
        <View style={styles.container}> 
            <BackgroundGradient></BackgroundGradient>
            <TouchableOpacity
                style={styles.btn}
                onPress={veiculos}>
                <Image
                    source ={require('../../../../../assets/img/carro.png')}
                    fadeDuration={0}
                    style={styles.imgBtn}
                ></Image>
                <Text style={styles.txBtn}>Meus Veículos</Text>
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