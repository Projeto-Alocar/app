import { Text, View , TextInput, Alert, TouchableOpacity,Image } from 'react-native'
import React,{useState, useEffect,useCallback} from 'react'
import styles from "./style"
import Logo from '../../componentes/Logo'
import {Picker} from '@react-native-picker/picker';
import usuarioRoutes from '../../dados/Rotas/usuarioRoutes.js'
import proprietarioRoutes from '../../dados/Rotas/proprietarioRoutes.js'
import FlashMessage, { showMessage } from 'react-native-flash-message';

import Teste from '../../test/test.js';

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

  function setarTipoLogin(value){
    setTipoLogin(value)
    if(value == 'p'){
      if(Teste.LoginProprietario){
        setDoc(Teste.LoginProprietario.doc)
        setSenha(Teste.LoginProprietario.senha)
      }
    }else if(value == 'u'){
      if(Teste.LoginUsuario){
        setDoc(Teste.LoginUsuario.doc)
        setSenha(Teste.LoginUsuario.senha)
      }
    }
  }

  async function btnLogin_Click(){    
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
  function btnCadastro_Click(){
    props.navigation.navigate('RegistroSelect')
  }
  
    return (
      <View style={styles.container}>
        <View>
          <View style={{marginBottom:30}}>
            <Logo w={280} h={60} top={0}></Logo>
          </View>
          
          <View style={styles.Vtx}>
            <Text style={styles.tx}>CPF/CNPJ</Text>
            <Text style={styles.errorMessage}>{docNull}</Text>
          </View>
          <TextInput 
            keyboardType='numeric' 
            maxLength={14}  
            style = {styles.txInput}
            onChangeText={setDoc}
          ></TextInput>

          <View style={styles.Vtx}>
            <Text style={styles.tx}>Senha</Text>
            <Text style={styles.errorMessage}>{senhaNull}</Text>
          </View>   
          <TextInput 
            maxLength={30} 
            secureTextEntry={true}  
            style = {styles.txInput}
            onChangeText={setSenha}
          ></TextInput>
          
          <View style={{alignSelf:'center',marginTop:25}}>
            <Text style={styles.errorMessage}>{tipoNull}</Text>
          </View>
          
          <View style={styles.vPicker}>
            <Picker
              itemStyle={styles.txCad}
              selectedValue={tipoLogin}
              onValueChange={(value)=>setarTipoLogin(value)}
              >
              <Picker.Item label="Selecione..." value={null} />
              <Picker.Item label="Usuário" value="u" />
              <Picker.Item label="Proprietário" value="p" />
            </Picker>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={btnLogin_Click}>
            <Text style={styles.txBtn}>Login</Text>
          </TouchableOpacity>
          <Text style={{marginTop:5,alignSelf:"center"}}> Esqueceu sua senha?</Text>
        </View>
        <View style={styles.Vcadastro}>
            <Text style={styles.txCad} onPress={btnCadastro_Click}>Não possui login? 
              <Text style={styles.txCadClick}> Cadastre-se</Text>
            </Text>
          </View>
        <FlashMessage position="bottom"/>
      </View>
      
    )
}
