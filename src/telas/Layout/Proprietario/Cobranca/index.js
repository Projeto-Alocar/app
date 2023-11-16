import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from './style'
import BackgroundGradient from '../../../../componentes/BackgroundGradient';
import NumericInput from 'react-native-numeric-input'
import veiculoRoutes from '../../../../dados/Rotas/veiculoRoutes.js'

import Teste from '../../../../test/test.js';


export default function LayoutCobrancaVeiculosProprietario(props){ 
  const [info] = useState(props.route.params.info);
  const [custoMovimento, setCustoMovimento] = useState(null);
  const [custoHrPassageiro, setCustoHrPassageiro] = useState(null);
  const [custoParado, setCustoParado] = useState(null);
  const [custoPassageiro, setCustoPassageiro] = useState(null);
  const [custoMulta, setCustoMulta] = useState(null);
  const [horarioUsoInicial, setHorarioUsoInicial] = useState(null);
  const [horarioUsoFinal, setHorarioUsoFinal] = useState(null);
  const [intervaloContratacao, setIntervaloContratacao] = useState(null);
    
  async function cadastrar(){
    try{
      if(Teste.AddVeiculo){
        var veiculo = Teste.AddVeiculo
        const fotos = {
          Img1: null,
          Img2: null,
          Img3: null
        }
        const adicionado = await veiculoRoutes.setVehicle(veiculo,fotos)
        if(adicionado){
          props.navigation.navigate('LayoutVeiculosProprietario',{cad: true})
        }else{
          Alert.alert('Erro','Erro ao adicionar veículo no modo Teste\nConferir IdProprietario "Test"')
        }
        return
      }
    }catch{}

    if(custoMovimento != null && custoHrPassageiro != null && custoParado != null && custoPassageiro != null && custoMulta != null && horarioUsoInicial != null && horarioUsoFinal != null && intervaloContratacao != null){
      //CAdastrar
      const veiculo = {
        IdProprietario: info.IdProprietario,
        Modelo: info.Modelo,
        Ano: info.Ano,
        Cor: info.Cor,
        Placa: info.Placa,
        Cidade: info.Cidade,
        Endereco: info.Endereco,
        CustoMovimento: custoMovimento,
        CustoHrPassageiro: custoHrPassageiro,
        CustoParado: custoParado,
        CustoPassageiro: custoPassageiro,
        CustoMulta: custoMulta,
        HorarioUso: horarioUsoInicial+"-"+horarioUsoFinal,
        IntervaloContratacao: intervaloContratacao
      }
      const fotos = {
        Img1: info.Img1,
        Img2: info.Img2,
        Img3: info.Img3,
      }
      const adicionado = await veiculoRoutes.setVehicle(veiculo,fotos)
      if(adicionado){
        props.navigation.navigate('LayoutVeiculosProprietario',{cad: true})
      }else{
        Alert.alert('Erro','Erro ao adicionar veículo')
      }
      
    }else{
      Alert.alert('Erro', 'Preencha todos os dados')
    } 
  };

  return (
    <View style={styles.container}>
      <BackgroundGradient></BackgroundGradient>
      
      <Text style={styles.txtTitulo}>Cobrança</Text>
      <View style={{alignItems:'center'}}>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Valor hora em movimento</Text>
          <NumericInput 
              minValue={0} 
              maxValue={1000} 
              onChange={value => setCustoMovimento(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={0.5}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Valor hora com passageiro</Text>
          <NumericInput 
              minValue={0} 
              maxValue={100} 
              onChange={value => setCustoHrPassageiro(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={0.5}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
        </View>
        
        <View style={styles.numInput}>
          <Text style={styles.tx}>Valor carro parado / hora</Text>
          <NumericInput 
              minValue={0} 
              maxValue={1000} 
              onChange={value => setCustoParado(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={0.5}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Valor por levar passageiro</Text>
          <NumericInput 
              minValue={0} 
              maxValue={100} 
              onChange={value => setCustoPassageiro(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={0.5}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Multa por atraso / minuto</Text>
          <NumericInput 
              minValue={0} 
              maxValue={20} 
              onChange={value => setCustoMulta(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={0.5}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Intervalo de contratacão pessoa / dia</Text>
          <View style={{alignSelf:'center'}}>
            <NumericInput 
              minValue={0} 
              maxValue={10} 
              onChange={value => setIntervaloContratacao(value)} 
              totalWidth={240} 
              totalHeight={50} 
              iconSize={25}
              step={1}
              valueType='real'
              rounded = 'false' 
              textColor='black' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#EA3788' 
              leftButtonBackgroundColor='#EA3788'/>
          </View>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Horário de uso (hora inicial/final)</Text>
          <View style={{flexDirection:'row'}}>
            <View style={{marginRight:5}}>
              <NumericInput
                minValue={0} 
                maxValue={23} 
                onChange={value => setHorarioUsoInicial(value)} 
                totalWidth={150} 
                totalHeight={50} 
                iconSize={25}
                step={1}
                valueType='real'
                rounded = 'false' 
                textColor='black' 
                iconStyle={{ color: 'white' }} 
                rightButtonBackgroundColor='#EA3788' 
                leftButtonBackgroundColor='#EA3788'
                />
            </View>
            <View style={{marginLeft:5}}>
              <NumericInput 
                minValue={0} 
                maxValue={23} 
                onChange={value => setHorarioUsoFinal(value)} 
                totalWidth={150} 
                totalHeight={50} 
                iconSize={25}
                step={1}
                valueType='real'
                rounded = 'false' 
                textColor='black' 
                iconStyle={{ color: 'white' }} 
                rightButtonBackgroundColor='#EA3788' 
                leftButtonBackgroundColor='#EA3788'/>
            </View>
            
          </View>
        </View>
        


        <TouchableOpacity
          style={styles.btn}
          onPress={cadastrar}
        >
          <Text style={styles.txBtn}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
