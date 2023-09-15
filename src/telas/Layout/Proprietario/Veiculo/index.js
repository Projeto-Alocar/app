import React,{useState} from "react";
import styles from "./style";
import { View, Image,Text,TouchableOpacity,Alert} from "react-native";

import Teste from '../../../../test/test';
import veiculosRoutes from '../../../../dados/Rotas/veiculoRoutes'
import BackgroundGradient from "../../../../componentes/BackgroundGradient";

export default function LayoutVeiculoProprietario(props){
    const [veiculo] = useState(props.route.params.veiculo)
    const [proprietario] = useState(props.route.params.proprietario)
    
    function editVeiculo(){
        props.navigation.navigate('LayoutEditarVeiculoProprietario', {proprietario: proprietario, veiculo:veiculo})
    }
    async function removeVeiculo(){
        try {
            if(Teste.VeiculosProprietario){
              Alert.alert("Erro","Modo Teste Ativo")
            }else{
              throw new error
            }
            
        } catch (error) {
        const del = await veiculosRoutes.deleteVehicle(veiculo.Id)
        if(del){
            Alert.alert("Veiculo deletado com sucesso!")
            props.navigation.navigate('LayoutVeiculosProprietario', {proprietario: proprietario})
        }else{
            Alert.alert("Erro","Erro ao deletar veículo")
        }
        }
    }
    function removeClick(){
        Alert.alert("Remover", "Você realmente deseja remover o Veiculo?",[
            {text: 'Cancelar'},
            {
                text: 'Excluir', 
                style: "cancel",
                onPress: removeVeiculo
            }
        ])
    }
    
    function agenda(){
        
    }
    return (
        <View>
            <View style={styles.container}>
                <BackgroundGradient/>
                <View style={styles.title}>
                    <Text style={styles.txtTitulo}>{veiculo.Modelo}</Text>
                    <View style={styles.icons}>
                        <TouchableOpacity
                            style={styles.touchBtn}
                            onPress={editVeiculo}>
                            <Image
                            source ={require('../../../../../assets/img/editar.png')}
                            fadeDuration={0}
                            style={styles.imgTitle}
                            ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.touchBtn}
                            onPress={removeClick}>
                            <Image
                            source ={require('../../../../../assets/img/remover.png')}
                            fadeDuration={0}
                            style={styles.imgTitle}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.itemList}>
                    <Image
                    resizeMode="contain"
                        source ={require('../../../../../assets/img/carro.png')}
                        fadeDuration={0}
                        style={styles.imgVert}
                    ></Image>
                    <View style={{flexDirection:'row'}}>
                        <Image
                        resizeMode="contain"
                            source ={require('../../../../../assets/img/carro.png')}
                            fadeDuration={0}
                            style={styles.imgHori}
                        ></Image>
                        <Image
                        resizeMode="contain"
                            source ={require('../../../../../assets/img/carro.png')}
                            fadeDuration={0}
                            style={styles.imgHori}
                        ></Image>
                    </View>
                </View>
                <Text style={styles.txtInfo}>Informações</Text>
                <View>
                    <Text style={styles.txtInfo}>Ano: {veiculo.Ano}</Text>
                    <Text style={styles.txtInfo}>Cor: {veiculo.Cor}</Text>
                    <Text style={styles.txtInfo}>Placa: {veiculo.Placa}</Text>
                    <Text style={styles.txtInfo}>Endereço: {veiculo.Endereco}</Text>
                </View>
                <TouchableOpacity 
                style={styles.btn}
                onPress={agenda}>
                    <Text style={styles.txBtn}>Agenda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}