import { Text, View , TouchableOpacity , TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import styles from "./style"
import BackgroundGradient from '../../../componentes/BackgroundGradient'
import Logo from '../../../componentes/Logo'

export default function RegistroSelect(props){
  async function tipoUsuario(){
    props.navigation.navigate('RegistroUsuario')
  };
  async function tipoProprietario(){
    props.navigation.navigate('RegistroProprietario')
  };
  
    return (
      <View style={styles.container}>
        <BackgroundGradient></BackgroundGradient>
        <View>
          <Logo w={150} h={120} top={0}></Logo>
          <TouchableOpacity
            style={styles.btn}
            onPress={tipoUsuario}
          >
            <Text style={styles.txBtn}>Usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={tipoProprietario}
          >
            <Text style={styles.txBtn}>Proprietario</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}
