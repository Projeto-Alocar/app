import { View, Text,BackHandler } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function LayoutSolicitacoesProprietario(props){
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => false)
  }, [])

  const [solicitacoes] = useState(props.route.params.solicitacoes)
 
  return (
    <View>
      <Text>{JSON.stringify(solicitacoes)}</Text>
    </View>
  )
}
