import React,{useState} from "react";
import styles from "./style";
import { View, Image,Text,TouchableOpacity} from "react-native";

import TxtCidade from '../../../../componentes/TxtCidade'

import BackgroundGradient from "../../../../componentes/BackgroundGradient";

export default function LayoutVeiculoUsuario(props){
    const [veiculo] = useState(props.route.params.veiculo)
    const [usuario] = useState(props.route.params.usuario)
    //console.log(veiculo)
    //console.log(usuario)
    function agendar(){

    }
    return (
        <View>
            <View style={styles.container}>
                <BackgroundGradient/>
                <TxtCidade cidade={usuario.Cidade}></TxtCidade>
                <Text style={styles.txtTitulo}>{veiculo.Modelo}</Text>
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
                onPress={agendar}>
                    <Text style={styles.txBtn}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}