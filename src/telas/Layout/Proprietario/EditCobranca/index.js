import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from './style'
import BackgroundGradient from '../../../../componentes/BackgroundGradient';
import NumericInput from 'react-native-numeric-input'
import veiculoRoutes from '../../../../dados/Rotas/veiculoRoutes'



export default function LayoutEditarCobrancaVeiculosProprietario(props){ 
  const [info] = useState(props.route.params.info);
  const [infos] = useState(props.route.params.infos);
  const [proprietario] = useState(props.route.params.proprietario);

  const [custoMovimento, setCustoMovimento] = useState(infos.CustoMovimento);
  const [custoHrPassageiro, setCustoHrPassageiro] = useState(infos.CustoHrPassageiro);
  const [custoParado, setCustoParado] = useState(infos.CustoParado);
  const [custoPassageiro, setCustoPassageiro] = useState(infos.CustoPassageiro);
  const [custoMulta, setCustoMulta] = useState(infos.CustoMulta);
  const [horarioUsoInicial, setHorarioUsoInicial] = useState((infos.HorarioUso.split('-'))[0]);
  const [horarioUsoFinal, setHorarioUsoFinal] = useState((infos.HorarioUso.split('-'))[1]);
  const [intervaloContratacao, setIntervaloContratacao] = useState(infos.IntervaloContratacao);
    
  async function editar(){
    
    if(custoMovimento != null && custoHrPassageiro != null && custoParado != null && custoPassageiro != null && custoMulta != null && horarioUsoInicial != null && horarioUsoFinal != null && intervaloContratacao != null){

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
      const atualizado = await veiculoRoutes.UpdateVehicle(infos.Id,veiculo,fotos)
      
      if(atualizado){
        props.navigation.navigate('LayoutVeiculosProprietario',{proprietario:proprietario})
      }else{
        Alert.alert('Erro','Erro ao atualizar veículo')
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
              initValue={parseFloat(custoMovimento)}
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
              leftButtonBackgroundColor='#EA3788'></NumericInput>
        </View>
        <View style={styles.numInput}>
          <Text style={styles.tx}>Valor hora com passageiro</Text>
          <NumericInput 
              initValue={parseFloat(custoHrPassageiro)}
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
              initValue={parseFloat(custoParado)}
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
              initValue={parseFloat(custoPassageiro)}
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
              initValue={parseFloat(custoMulta)}
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
              initValue={parseFloat(intervaloContratacao)}
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
              initValue={parseFloat(horarioUsoInicial)}
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
                initValue={parseFloat(horarioUsoFinal)}
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
          onPress={editar}
        >
          <Text style={styles.txBtn}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
