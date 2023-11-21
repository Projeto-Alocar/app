import { Text, View , TouchableOpacity , TextInput, Alert} from 'react-native'
import React,{useState} from 'react'
import styles from "./style"
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
        <View>
          <View style={{marginBottom:30}}>
            <Logo w={280} h={60} top={0}></Logo>
          </View>
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
