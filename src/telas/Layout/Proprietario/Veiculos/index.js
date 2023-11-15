import { View, Text,BackHandler,FlatList,SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import BackgroundGradient from '../../../../componentes/BackgroundGradient'
import styles from './style'
import Teste from '../../../../test/test.js';
import FlashMessage, { showMessage } from 'react-native-flash-message';

import veiculosRoutes from '../../../../dados/Rotas/veiculoRoutes.js'

export default function LayoutVeiculosProprietario(props){
  const [proprietario] = useState(props.route.params.proprietario)
  const [veiculos,setVeiculos] = useState(null)
  
  useEffect(() => {          
    try {
      if(Teste.VeiculosProprietario){
        setVeiculos(Teste.VeiculosProprietario)
      }else{
        throw new error
      }
    } catch (error) {
      const fetchData = async () => {
        setVeiculos( await veiculosRoutes.getByDono(proprietario.Id))
      }
      fetchData()
    }
  }, [])
  
  async function setVehicle(){
    props.navigation.navigate("LayoutAdicionarVeiculosProprietario",{proprietario: proprietario})
  }
  
  function veiculoClick(veiculo){
    props.navigation.navigate('LayoutVeiculoProprietario', {proprietario: proprietario, veiculo: veiculo})
  }
  useEffect(() => {
    BackHandler.removeEventListener('backPress', () => true)
  }, [])
  return (
    <View>
      <View style={styles.container}>
        <BackgroundGradient></BackgroundGradient>
        <View style={styles.title}>
          <Text style={styles.txtTitulo}>Meus Veiculos</Text>
          <TouchableOpacity
            style={styles.touchBtn}
            onPress={setVehicle}>
            <Image
              source ={require('../../../../../assets/img/add.png')}
              fadeDuration={0}
              style={styles.imgTitle}
            ></Image>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
        <FlatList
        data={veiculos}
        keyExtractor={item => item.Modelo}
        numColumns={2} //Número de colunas
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
      <FlashMessage position="top"/>
    </View>
  )
}
