import React,{useState,useEffect} from "react";
import styles from "./style";
import { View, Image,Text,TouchableOpacity} from "react-native";
import proprietarioRoutes from '../../../../dados/Rotas/proprietarioRoutes.js'

export default function LayoutVeiculoUsuario(props){
    const [veiculo] = useState(props.route.params.veiculo)
    const [usuario] = useState(props.route.params.usuario)
    const [proprietario,setProprietario] = useState({Id:null,Nome:"",Email:"",Numero:null})

    async function getProprietario(){
        const prop = await proprietarioRoutes.getById(veiculo.IdProprietario)
        setProprietario(prop)
        return prop
    }
    useEffect(() => {
        getProprietario()
    },[])

    function agendar(){}

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.Vimg}>
                    <Image
                        resizeMode="contain"
                            source ={require('../../../../../assets/img/carro.png')}
                            fadeDuration={0}
                            style={styles.imgVert}
                        >
                    </Image>
                </View>
                <Text style={styles.txtTitulo}>{veiculo.Modelo}</Text>
                <View style={styles.Vinfo}>
                    <Text style={styles.txtInfo}>Proprietario: {proprietario.Nome} </Text>
                    <Text style={styles.txtInfo}>Fone: {proprietario.Numero} </Text>
                    <Text style={styles.txtInfo}>Ano: {veiculo.Ano}</Text>
                    <Text style={styles.txtInfo}>Cor: {veiculo.Cor}</Text>
                    <Text style={styles.txtInfo}>Placa: {veiculo.Placa}</Text>
                    <Text style={styles.txtInfo}>Endereço: {veiculo.Endereco}</Text>
                </View>

                <View style={styles.VimgHori}>
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
                <TouchableOpacity 
                style={styles.btn}
                onPress={agendar}>
                    <Text style={styles.txBtn}>Agendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}