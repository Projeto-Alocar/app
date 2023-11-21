import { View, Text,BackHandler,TouchableOpacity,FlatList,SafeAreaView, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import TxtCidade from '../../../../componentes/TxtCidade'
import styles from './style'
import Teste from '../../../../test/test';
import veiculosRoutes from '../../../../dados/Rotas/veiculoRoutes'

export default function LayoutVeiculosUsuario(props){
  const [veiculos, setVeiculos] = useState(null)
  const [usuario] = useState(props.route.params.usuario)

  async function changeVehicle(){
      try {
        if(Teste.VeiculosUsuario){   
          setVeiculos(Teste.VeiculosUsuario)
        }else {
          throw new error
        }
      } catch (error) {
        setVeiculos(await veiculosRoutes.getByCidade(usuario.Cidade))
      }
  }
  

  function veiculoClick(veiculo){
    props.navigation.navigate('LayoutVeiculoUsuario', {usuario: usuario, veiculo: veiculo})
  }

  useEffect(() => {
    changeVehicle()
    BackHandler.removeEventListener('backPress', () => true)
  }, [])
  return (
    <View>
      <View style={styles.container}>
        <TxtCidade cidade={usuario.Cidade}></TxtCidade>
        <Text style={styles.txtTitulo}>Veiculos</Text>
        <SafeAreaView>
          <FlatList
          data={veiculos}
          keyExtractor={item => item.Modelo}
          numColumns={2} // Número de colunas
          renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={()=>veiculoClick(item)}>
                    <View style={styles.itemList}>
                      <Image
                        source ={require('../../../../../assets/img/carro.png')}
                        fadeDuration={0}
                        style={styles.imgList}
                      ></Image>
                      <Text style={styles.txtList}>{item.Modelo}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
        </SafeAreaView>
      </View>
    </View>
  )
}
