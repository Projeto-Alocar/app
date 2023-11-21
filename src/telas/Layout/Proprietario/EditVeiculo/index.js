import { View, Text,TextInput, TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from './style'
import ImageViewer from '../../../../componentes/ImageView'
import * as ImagePicker from 'expo-image-picker';

import Teste from '../../../../test/test';

export default function LayoutEditarVeiculosProprietario(props){ 
  const [proprietario] = useState(props.route.params.proprietario)
  const [infos] = useState(props.route.params.veiculo)
  const [modelo, setModelo] = useState(infos.Modelo);
  const [ano, setAno] = useState(infos.Ano);
  const [cor, setCor] = useState(infos.Cor);
  const [placa, setPlaca] = useState(infos.Placa);
  const [cidade, setCidade] = useState(infos.Cidade);
  const [endereco, setEndereco] = useState(infos.Endereco);
  const [foto1,setFoto1] = useState(infos.Imagem1);
  const [foto2,setFoto2] = useState(infos.Imagem2);
  const [foto3,setFoto3] = useState(infos.Imagem3);

  const [modeloNull, setModeloNull] = useState(null);
  const [anoNull, setAnoNull] = useState(null);
  const [corNull, setCorNull] = useState(null);
  const [placaNull, setPlacaNull] = useState(null);
  const [cidadeNull, setCidadeNull] = useState(null);
  const [enderecoNull, setEnderecoNull] = useState(null);

  const [selectedImage1, setSelectedImage1] = useState(null)
  const [selectedImage2, setSelectedImage2] = useState(null)
  const [selectedImage3, setSelectedImage3] = useState(null)
    
  async function cobranca(){

    setModeloNull(null); 
    setAnoNull(null); 
    setCorNull(null); 
    setPlacaNull(null); 
    setCidadeNull(null); 
    setEnderecoNull(null);

    if(modelo != null && ano != null && cor != null && placa != null && cidade != null && endereco != null && foto1 != null && foto2 != null && foto3 != null){
      if(String(ano).length != 4){
        setAnoNull("Dados Incorretos*")
        return
      }else
      if(!endereco.includes(',')){
        setEnderecoNull("Dados Incorretos*")
        return
      }else
      if(placa.length != 7){
        setPlacaNull("Dados Incorretos*")
        return
      }else{
        const placaRegex = /^([A-Z]{3}[0-9]{4}|[A-Z]{3}[0-9][A-Z][0-9]{2})$/;
       try{
          if (placaRegex.test(placa)) {
            const info = {
              IdProprietario: proprietario.Id,
              Modelo: modelo,
              Ano: ano,
              Cor: cor,
              Placa: placa,
              Cidade: cidade,
              Endereco: endereco,
              Img1: foto1,
              Img2: foto2,
              Img3: foto3
            }
            props.navigation.navigate("LayoutEditarCobrancaVeiculosProprietario",{ infos: infos,info: info, proprietario: proprietario})
          }else{setPlacaNull("Dados Incorretos*")}
        }catch{setPlacaNull("Dados Incorretos*")}
      }
    }else{
      if(modelo == null || modelo == ""){
        setModeloNull("Campo obrigatório*")
      }
      if(ano == null || ano == ""){
        setAnoNull("Campo obrigatório*")
      }
      if(cor == null || cor == ""){
        setCorNull("Campo obrigatório*")
      }
      if(placa == null || placa == ""){
        setPlacaNull("Campo obrigatório*")
      }
      if(cidade == null || cidade == ""){
        setCidadeNull("Campo obrigatório*")
      }
      if(endereco == null || endereco == ""){
        setEnderecoNull("Campo obrigatório*")
      }
      if(foto1 == null & foto2 == null & foto3 == null){
        Alert.alert('Erro','Insira as 3 Fotos');
      }
    }
  };
  const pickImageAsync = async (nFoto) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      if(nFoto==1){
        setSelectedImage1(result.assets[0].uri);
        setFoto1(result.assets[0].uri)
      }else if(nFoto==2){
        setSelectedImage2(result.assets[0].uri);
        setFoto2(result)
      }else if(nFoto==3){
        setFoto3(result)
        setSelectedImage3(result.assets[0].uri);
      }
    } else {
      Alert.alert('Aviso', 'Você não selecionou uma foto', [{text:'Ok'},]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Cadastrar veículos</Text>
      <View>
        <View>
          <Text style={styles.tx}>Modelo</Text>
          <Text style={styles.errorMessage}>{modeloNull}</Text>
          <TextInput maxLength={50} style = {styles.txInput} onChangeText={setModelo} placeholder='Ex: Honda Civic'>{infos.Modelo}</TextInput>
        </View>
        
        <View>
            <Text style={styles.tx}>Ano</Text>
            <Text style={styles.errorMessage}>{anoNull}</Text>
            <TextInput keyboardType='numeric' maxLength={4} style = {styles.txInput} onChangeText={setAno} placeholder='Ex: 2000'>{infos.Ano}</TextInput>
        </View>
        
        <View>
          <Text style={styles.tx}>Cor</Text>
          <Text style={styles.errorMessage}>{corNull}</Text>
          <TextInput maxLength={50} style = {styles.txInput} onChangeText={setCor} placeholder='Ex: Vermelho'>{infos.Cor}</TextInput>
        </View>        

        <View>
          <Text style={styles.tx}>Placa</Text>
          <Text style={styles.errorMessage}>{placaNull}</Text>
          <TextInput maxLength={7} style = {styles.txInput} onChangeText={setPlaca} placeholder='Ex: AAA0A00'>{infos.Placa}</TextInput>
        </View>        

        <View>
          <Text style={styles.tx}>Cidade</Text>
          <Text style={styles.errorMessage}>{cidadeNull}</Text>
          <TextInput maxLength={50} style = {styles.txInput} onChangeText={setCidade} placeholder='Ex: SÃO PAULO - SP' >{infos.Cidade}</TextInput>
        </View>
        
        <View>
          <Text style={styles.tx}>Endereço</Text>
          <Text style={styles.errorMessage}>{enderecoNull}</Text>
          <TextInput maxLength={50} style = {styles.txInput} onChangeText={setEndereco} placeholder='Ex: Avenida Brasil, 1000' >{infos.Endereco}</TextInput>
        </View>
        
        <View style={styles.gpImg}>
          <TouchableOpacity
            style={styles.img}
            onPress={()=> pickImageAsync(1)}>
            <ImageViewer
              selectedImage={selectedImage1}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.img}
            onPress={()=> pickImageAsync(2)}>
            <ImageViewer
              selectedImage={selectedImage2}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.img}
            onPress={()=> pickImageAsync(3)}>
            <ImageViewer
              selectedImage={selectedImage3}
            />
          </TouchableOpacity>       
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={cobranca}
        >
          <Text style={styles.txBtn}>Proximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
