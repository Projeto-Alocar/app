import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/telas/Login'
import RegistroSelect from './src/telas/Registro/Select'
import RegistroUsuario from './src/telas/Registro/Usuario'
import RegistroProprietario from './src/telas/Registro/Proprietario' 
import LayoutProprietario from './src/telas/Layout/Proprietario/Home'
import LayoutUsuario from './src/telas/Layout/Usuario/Home'
import LayoutVeiculosUsuario from './src/telas/Layout/Usuario/Veiculos'
import LayoutVeiculoUsuario from './src/telas/Layout/Usuario/Veiculo'
import LayoutVeiculosProprietario from './src/telas/Layout/Proprietario/Veiculos'
import LayoutVeiculoProprietario from './src/telas/Layout/Proprietario/Veiculo'
import LayoutSolicitacoesUsuario from './src/telas/Layout/Usuario/Solicitacoes'
import LayoutSolicitacoesProprietario from './src/telas/Layout/Proprietario/Solicitacoes'
import LayoutAdicionarVeiculosProprietario from './src/telas/Layout/Proprietario/AddVeiculo'
import LayoutEditarVeiculoProprietario from './src/telas/Layout/Proprietario/EditVeiculo'
import LayoutEditarCobrancaVeiculosProprietario from './src/telas/Layout/Proprietario/EditCobranca'
import LayoutAgendaVeiculo from './src/telas/Layout/Proprietario/AgendaVeiculo'
import LayoutCobrancaVeiculosProprietario from './src/telas/Layout/Proprietario/Cobranca'

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="Login"
          >
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="RegistroSelect" component={RegistroSelect}/>
          <Stack.Screen name="RegistroUsuario" component={RegistroUsuario}/>
          <Stack.Screen name="RegistroProprietario" component={RegistroProprietario}/>

          <Stack.Screen name="LayoutProprietario" component={LayoutProprietario}/>
          <Stack.Screen name="LayoutVeiculosProprietario" component={LayoutVeiculosProprietario}/>
          <Stack.Screen name="LayoutVeiculoProprietario" component={LayoutVeiculoProprietario}/>
          <Stack.Screen name="LayoutSolicitacoesProprietario" component={LayoutSolicitacoesProprietario}/>
          <Stack.Screen name="LayoutAdicionarVeiculosProprietario" component={LayoutAdicionarVeiculosProprietario}/>
          <Stack.Screen name="LayoutEditarVeiculoProprietario" component={LayoutEditarVeiculoProprietario}/>
          <Stack.Screen name="LayoutEditarCobrancaVeiculosProprietario" component={LayoutEditarCobrancaVeiculosProprietario}/>
          <Stack.Screen name="LayoutCobrancaVeiculosProprietario" component={LayoutCobrancaVeiculosProprietario}/>
          <Stack.Screen name="LayoutAgendaVeiculo" component={LayoutAgendaVeiculo}/>
          <Stack.Screen name="LayoutUsuario" component={LayoutUsuario}/>
          <Stack.Screen name="LayoutVeiculosUsuario" component={LayoutVeiculosUsuario}/>
          <Stack.Screen name="LayoutVeiculoUsuario" component={LayoutVeiculoUsuario}/>
          <Stack.Screen name="LayoutSolicitacoesUsuario" component={LayoutSolicitacoesUsuario}/>


        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
