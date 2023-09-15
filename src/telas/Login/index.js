import { Text, View , TextInput, Alert, TouchableOpacity,Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import styles from "./style"
import BackgroundGradient from '../../componentes/BackgroundGradient'
import Logo from '../../componentes/Logo'
import {Picker} from '@react-native-picker/picker';
import usuarioRoutes from '../../dados/Rotas/usuarioRoutes'
import proprietarioRoutes from '../../dados/Rotas/proprietarioRoutes'
import FlashMessage, { showMessage } from 'react-native-flash-message';

import Teste from '../../test/test';

export default function Login(props) {
 
  useEffect(() => {
    try{    
      if(props.route.params.cad){
        
        showMessage({
          message: "Cadastrado com sucesso!",
          type: "success",
        }); 
      }   
      props.route.params.cad=false
    }catch{}
  
  });

  const [doc, setDoc] = useState(null);
  const [senha, setSenha] = useState(null);
  const [tipoLogin, setTipoLogin] = useState(null);
  const [docNull, setDocNull] = useState(null);
  const [senhaNull, setSenhaNull] = useState(null);
  const [tipoNull, setTipoNull] = useState(null);

  function isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (/^(\d)\1+$/.test(cpf)) {
      return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
  }
  function isValidCNPJ(cnpj){
    if (/^(\d)\1+$/.test(cnpj))
      return false;

    // Validação do primeiro dígito verificador
    let sum = 0;
    let weight = 2;

    for (let i = 11; i >= 0; i--) {
      sum += cnpj.charAt(i) * weight;
      weight = (weight + 1) % 10 || 2;
    }

    let mod = sum % 11;
    let digit = mod < 2 ? 0 : 11 - mod;

    if (parseInt(cnpj.charAt(12)) !== digit)
      return false;

    // Validação do segundo dígito verificador
    sum = 0;
    weight = 2;

    for (let i = 12; i >= 0; i--) {
      sum += cnpj.charAt(i) * weight;
      weight = (weight + 1) % 10 || 2;
    }

    mod = sum % 11;
    digit = mod < 2 ? 0 : 11 - mod;

    if (parseInt(cnpj.charAt(13)) !== digit)
      return false;

    return true;
  }

  function test(tipoLogin){
    try{
      if(tipoLogin == 'p'){
        setDoc(Teste.LoginProprietario.doc)
        setSenha(Teste.LoginProprietario.senha)
      }else if(tipoLogin == 'u'){
        setDoc(Teste.LoginUsuario.doc)
        setSenha(Teste.LoginUsuario.senha)
      }else{
        throw new error
      }
    }catch{}
  }

  async function verificacao(){    
    setDocNull(null)
    setSenhaNull(null)
    setTipoNull(null)

    if(doc != null && senha != null && tipoLogin != null){
      if(doc.length == 11){
        if(isValidCPF(doc)){
          if(tipoLogin == 'p'){
            const proprietario = await proprietarioRoutes.getLogin(doc,senha)
            if(proprietario){
              props.navigation.navigate('LayoutProprietario',{proprietario: proprietario})
            }else{
              Alert.alert('Proprietário não encontrado','Confira os dados informados')
            }
          }else{
            const usuario = await usuarioRoutes.getLogin(doc,senha)
            if(usuario){
              props.navigation.navigate('LayoutUsuario',{usuario: usuario})
            }else{
              Alert.alert('Usuário não encontrado','Confira os dados informados')
            }
          }
        }else{
          setDocNull('Documento inválido!')
        }
      }else if(doc.length == 14){
        if(isValidCNPJ(doc)){
          if(tipoLogin == 'p'){
            const proprietario = await proprietarioRoutes.getLogin(doc,senha)
            if(proprietario){
              props.navigation.navigate('LayoutProprietario',{proprietario: proprietario})
            }else{
              Alert.alert('Proprietário não encontrado','Confira os dados informados')
            }
          }else{
            Alert.alert('Usuário incorreto','Confira os dados informados')
          }
        }else{
          setDocNull('Documento inválido!')
        }
      }else{
        setDocNull('Documento inválido!')
      }
    }else{
      if(doc == null || doc == ""){
        setDocNull("Campo obrigatório*")
      }else{
        setDocNull(null)
      }
      if(senha == null || senha == ""){
        setSenhaNull("Campo obrigatório*")
      }else{
        setSenhaNull(null)
      }
      if(tipoLogin==null){
        setTipoNull("Selecione uma opção*")
      }else{
        setTipoLogin(null)
      }
    }
  };
  function cadastro(){
    props.navigation.navigate('RegistroSelect')
  }
  
  
    return (
      <View style={styles.container}>
        <BackgroundGradient></BackgroundGradient>
        <View>
          <Logo w={150} h={120} top={0}></Logo>
          <Text style={styles.tx}>CPF/CNPJ</Text>
          <Text style={styles.errorMessage}>{docNull}</Text>
          <TextInput 
            keyboardType='numeric' 
            maxLength={11}  
            style = {styles.txInput}
            onChangeText={setDoc}
          ></TextInput>
          <Text style={styles.tx}>Senha</Text>
          <Text style={styles.errorMessage}>{senhaNull}</Text>
          <TextInput 
            maxLength={30} 
            secureTextEntry={true}  
            style = {styles.txInput}
            onChangeText={setSenha}
          ></TextInput>
          <Text style={styles.errorMessage}>{tipoNull}</Text>
          <Picker
            selectedValue={tipoLogin}
            onValueChange={(Value)=>{setTipoLogin(Value),test(Value)}}
            style={styles.picker} 
            >
            <Picker.Item label="Selecione um tipo..." value={null} />
            <Picker.Item label="Usuário" value="u" />
            <Picker.Item label="Proprietário" value="p" />
          </Picker>

          <TouchableOpacity
            style={styles.btn}
            onPress={verificacao}>
            <Text style={styles.txBtn}>Login</Text>
          </TouchableOpacity>

          <Text style={{fontSize:15,marginTop:10}} onPress={cadastro}>Não possui login? 
             <Text style={{fontWeight:"bold"}}> Cadastre-se </Text>
          </Text>
        </View>
        <FlashMessage position="bottom"/>
      </View>
      
    )
}