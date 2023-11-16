import { View , TouchableOpacity, Text, BackHandler, Image} from "react-native";
import React,{useState,useEffect} from 'react'
import BackgroundGradient from "../../../../componentes/BackgroundGradient";
import styles from "./style.js";
import solicitacoesRoutes from '../../../../dados/Rotas/solicitacaoRoutes.js'

import Teste from '../../../../test/test.js';
export default function LayoutProprietario(props){
    const [proprietario, setProprietario] = useState(null);

    useEffect(() => {          
        try {
            if(Teste.SetarProprietario){
                setProprietario(Teste.SetarProprietario)
            }else{
                throw new error
            }
        } catch (error) {
            const fetchData = async () => {
                setProprietario(props.route.params.proprietario)
            }
            fetchData()
        }
    }, [])
    
    async function telaVeiculos(){
        props.navigation.navigate("LayoutVeiculosProprietario",{ proprietario: proprietario})
    }
    async function telaAgendamentos(){
        const solicitacoes = await solicitacoesRoutes.getByIdPoprietario(proprietario.Id)
        props.navigation.navigate("LayoutSolicitacoesProprietario",{solicitacoes: solicitacoes})
    }
    return(
        <View style={styles.container}> 
            <BackgroundGradient></BackgroundGradient>
            <TouchableOpacity
                style={styles.btn}
                onPress={telaVeiculos}>
                <Image
                    source ={require('../../../../../assets/img/carro.png')}
                    fadeDuration={0}
                    style={styles.imgBtn}
                ></Image>
                <Text style={styles.txBtn}>Meus Veículos</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={telaAgendamentos}>
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