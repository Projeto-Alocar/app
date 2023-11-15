import { Text, View , TouchableOpacity , TextInput, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import styles from "./style"
import BackgroundGradient from '../../../componentes/BackgroundGradient'
import Logo from '../../../componentes/Logo'
import usuarioRoutes from '../../../dados/Rotas/usuarioRoutes.js'
import eleitorRoutes from '../../../dados/Rotas/eleitorRoutes.js'

import Teste from '../../../test/test.js';

export default function RegistroUsuario(props){
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState(null);
  const [nome, setNome] = useState(null);
  const [dataNascimento, setDataNascimento] = useState(null);
  const [nomeMae, setNomeMae] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [numero, setNumero] = useState(null);

  const [cpfNull, setCpfNull] = useState(null);
  const [nomeNull, setNomeNull] = useState(null);
  const [dataNascimentoNull, setDataNascimentoNull] = useState(null);
  const [nomeMaeNull, setNomeMaeNull] = useState(null);
  const [emailNull, setEmailNull] = useState(null);
  const [senhaNull, setSenhaNull] = useState(null);
  const [numeroNull, setNumeroNull] = useState(null);  
  
  useEffect(() => {
    try{    
      setCpf(Teste.RegistroUsuario.cpf),
      setNome(Teste.RegistroUsuario.nome),
      setDataNascimento(Teste.RegistroUsuario.dataNascimento),
      setNomeMae(Teste.RegistroUsuario.nomeMae),
      setEmail(Teste.RegistroUsuario.email),
      setSenha(Teste.RegistroUsuario.senha),
      setNumero(Teste.RegistroUsuario.numero)
    }catch{}
  
  }, [])

  function isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
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

  async function verificacao(){
    setCpfNull(null);
    setNomeNull(null);
    setDataNascimentoNull(null);
    setNomeMaeNull(null);
    setEmailNull(null);
    setSenhaNull(null);
    setNumeroNull(null);  

    if(cpf != null && nome != null && dataNascimento != null && nomeMae != null && email != null && senha != null && numero != null ){
      if(!cpf.length == 11){
        setCpfNull("Dados Incorretos*")
        return
      }
      if(!nome.includes(" ")){
        setNomeNull("Dados Incorretos*")
        return
      }if(!nomeMae.includes(" ")){
        setNomeMaeNull("Dados Incorretos*")
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
      if(isValidCPF){
        setLoading(true)
        const cidade = await eleitorRoutes.consulta(cpf,dataNascimento,nomeMae)
        setLoading(false)
        var a = dataNascimento.split("/")
        a = a.reverse()
        const dataNascimentoUS = a.join('')
        if(cidade){
          const usuario ={
            CPF: cpf,
            Nome: nome,
            DataNascimento: dataNascimentoUS,
            NomeMae: nomeMae,
            Cidade: cidade.split(': ')[1],
            Email: email,
            Senha: senha,
            Numero: numero
          }
          const adicionado = await usuarioRoutes.setRegister(usuario)
          if(adicionado){
            props.navigation.navigate('Login',{cad: true})
          }else{
            Alert.alert('Erro','CPF já cadastrado!')
          }
        }else{
          Alert.alert('Dados incorretos!','Não foi encontrado um Titulo de Eleitor com seus dados')
        }
      }else{
        setCpfNull('Cpf inválido!')
      }
      
    }else{
      if(cpf == null || cpf == ""){
        setCpfNull("Campo obrigatório*")
      }
      if(nome == null || nome == ""){
        setNomeNull("Campo obrigatório*")
      }
      if(dataNascimento == null || dataNascimento == ""){
        setDataNascimentoNull("Campo obrigatório*")
      }
      if(nomeMae == null || nomeMae == ""){
        setNomeMaeNull("Campo obrigatório*")
      }
      if(email == null || email == ""){
        setEmailNull("Campo obrigatório*")
      }
      if(senha == null || senha == ""){
        setSenhaNull("Campo obrigatório*")
      }
      if(numero==null || numero == ""){
        setNumeroNull("Campo obrigatório*")
      }
    }
  };
    return (
      <View style={styles.container}>
        <BackgroundGradient></BackgroundGradient>
        <View>
          <Logo w={90} h={50} top={50}></Logo>
          <Text style={styles.tx}>CPF</Text>
          <Text style={styles.errorMessage}>{cpfNull}</Text>
          <TextInput keyboardType='numeric' maxLength={11} style = {styles.txInput} onChangeText={setCpf} ></TextInput>

          <Text style={styles.tx}>Nome Completo</Text>
          <Text style={styles.errorMessage}>{nomeNull}</Text>
          <TextInput maxLength={100} style = {styles.txInput} onChangeText={setNome} ></TextInput>

          <Text style={styles.tx}>Data de Nascimento</Text>
          <Text style={styles.errorMessage}>{dataNascimentoNull}</Text>
          <TextInput maxLength={10} style = {styles.txInput} onChangeText={setDataNascimento}   placeholder='DD/MM/AAAA'></TextInput>


          <Text style={styles.tx}>Nome da Mãe</Text>
          <Text style={styles.errorMessage}>{nomeMaeNull}</Text>
          <TextInput maxLength={100} style = {styles.txInput} onChangeText={setNomeMae} ></TextInput>

          <Text style={styles.tx}>Email</Text>
          <Text style={styles.errorMessage}>{emailNull}</Text>
          <TextInput maxLength={100} style = {styles.txInput} onChangeText={setEmail} ></TextInput>

          <Text style={styles.tx}>Senha</Text>
            <Text style={styles.errorMessage}>{senhaNull}</Text>
          <TextInput maxLength={30} secureTextEntry={true} style = {styles.txInput} onChangeText={setSenha} ></TextInput>

          <Text style={styles.tx}>Número</Text>
            <Text style={styles.errorMessage}>{numeroNull}</Text>
          <TextInput keyboardType='numeric' maxLength={11} style = {[styles.txInput,{marginBottom: 15}]} onChangeText={setNumero} ></TextInput>
          
          <TouchableOpacity
            style={styles.btn}
            onPress={verificacao}
          >
            <Text style={styles.txBtn}>Cadastrar</Text>
          </TouchableOpacity>

          <Spinner
            visible={loading}
            textContent={'Carregando...'}
            textStyle={{color:"white"}}
          />

        </View>
      </View>
    )
}
