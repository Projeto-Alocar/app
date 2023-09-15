import { Text, View , TouchableOpacity , TextInput, Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from "./style"
import BackgroundGradient from '../../../componentes/BackgroundGradient'
import Logo from '../../../componentes/Logo'
import proprietarioRoutes from '../../../dados/Rotas/proprietarioRoutes'

import Teste from '../../../test/test';

export default function RegistroProprietario(props){
  const [doc, setDoc] = useState(null);
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [numero, setNumero] = useState(null);

  const [docNull, setDocNull] = useState(null);
  const [nomeNull, setNomeNull] = useState(null);
  const [emailNull, setEmailNull] = useState(null);
  const [senhaNull, setSenhaNull] = useState(null);
  const [numeroNull, setNumeroNull] = useState(null);
  
  useEffect(() => {
    try{    
      setDoc(Teste.RegistroProprietario.doc);
      setNome(Teste.RegistroProprietario.nome);
      setEmail(Teste.RegistroProprietario.email);
      setSenha(Teste.RegistroProprietario.senha);
      setNumero(Teste.RegistroProprietario.numero);
    }catch{}
    
  }, [])

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
  async function verificacao(){
    setDocNull(null);
    setNomeNull(null);
    setEmailNull(null);
    setSenhaNull(null);
    setNumeroNull(null);

    if(doc != null && nome != null && email != null && senha != null && numero != null){
      if(!doc.length == 11){
        setDocNull("Dados Incorretos*")
        return
      }
      if(!nome.includes(" ")){
        setNomeNull("Dados Incorretos*")
        return
      }
      if(!email.includes("@")){
        setEmailNull("Dados Incorretos*")
        return
      }
      if(!numero.length == 11){
        setNumeroNull("Dados Incorretos*")
        return
      }
      if(doc.length == 11){
        if(isValidCPF(doc)){{
          const proprietario ={
            Doc: doc,
            Nome: nome,
            Email: email,
            Senha: senha,
            Numero: numero
          }
          const adicionado = await proprietarioRoutes.setRegister(proprietario)
          if(adicionado){
            props.navigation.navigate('Login',{cad: true})
          }else{
            Alert.alert('Erro','CPF já cadastrado!')
          }
        }
        }else{
          setDocNull('Cpf inválido!')
        }
      }else if(doc.length == 14){
        if(isValidCNPJ(doc)){{
          const proprietario ={
            Doc: doc,
            Nome: nome,
            Email: email,
            Senha: senha,
            Numero: numero
          }
          const adicionado = await proprietarioRoutes.setRegister(proprietario)
          if(adicionado){
            props.navigation.navigate('Login',{cad: true})
          }else{
            Alert.alert('Erro','CNPJ já cadastrado!')
          }
        }
        }else{
          setDocNull('CNPJ inválido!')
        }
      }
    }else{
      if(doc == null || doc == ""){
        setDocNull("Campo obrigatório*")
      }else{
        setDocNull(null)
      }
      if(nome == null || nome == ""){
        setNomeNull("Campo obrigatório*")
      }else{
        setNomeNull(null)
      }
      if(email == null || email == ""){
        setEmailNull("Campo obrigatório*")
      }else{
        setEmailNull(null)
      }
      if(senha == null || senha == ""){
        setSenhaNull("Campo obrigatório*")
      }else{
        setSenhaNull(null)
      }
      if(numero==null || numero == ""){
        setNumeroNull("Campo obrigatório*")
      }else{
        setNumeroNull(null)
      }
    }
  };
  
  return (
    <View style={styles.container}>
      <BackgroundGradient></BackgroundGradient>
      <View>
        <Logo w={150} h={120} top={0}></Logo>
        <Text style={styles.tx}>CPF/CNPJ</Text>
        <Text style={styles.errorMessage}>{docNull}</Text>
        <TextInput keyboardType='numeric' maxLength={14} style = {styles.txInput} onChangeText={setDoc}></TextInput>

        <Text style={styles.tx}>Nome Completo</Text>
        <Text style={styles.errorMessage}>{nomeNull}</Text>
        <TextInput maxLength={100} style = {styles.txInput} onChangeText={setNome}></TextInput>

        <Text style={styles.tx}>Email</Text>
        <Text style={styles.errorMessage}>{emailNull}</Text>
        <TextInput maxLength={100} style = {styles.txInput} onChangeText={setEmail}></TextInput>

        <Text style={styles.tx}>Senha</Text>
        <Text style={styles.errorMessage}>{senhaNull}</Text>
        <TextInput maxLength={30} secureTextEntry={true} style = {styles.txInput} onChangeText={setSenha}></TextInput>

        <Text style={styles.tx}>Número</Text>
        <Text style={styles.errorMessage}>{numeroNull}</Text>
        <TextInput keyboardType='numeric' maxLength={11} style = {[styles.txInput,{marginBottom: 15}]} onChangeText={setNumero}></TextInput>
        
        <TouchableOpacity
          style={styles.btn}
          onPress={verificacao}
          >
          <Text style={styles.txBtn}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
