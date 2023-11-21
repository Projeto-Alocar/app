import { createStackNavigator } from '@react-navigation/stack';

import Login from '../telas/Login'
import RegistroSelect from '../telas/Registro/Select'
import RegistroUsuario from '../telas/Registro/Usuario'
import RegistroProprietario from '../telas/Registro/Proprietario' 
import LayoutProprietario from '../telas/Layout/Proprietario/Home'
import LayoutUsuario from '../telas/Layout/Usuario/Home'
import LayoutVeiculosUsuario from '../telas/Layout/Usuario/Veiculos'
import LayoutVeiculoUsuario from '../telas/Layout/Usuario/Veiculo'
import LayoutVeiculosProprietario from '../telas/Layout/Proprietario/Veiculos'
import LayoutVeiculoProprietario from '../telas/Layout/Proprietario/Veiculo'
import LayoutSolicitacoesUsuario from '../telas/Layout/Usuario/Solicitacoes'
import LayoutSolicitacoesProprietario from '../telas/Layout/Proprietario/Solicitacoes'
import LayoutAdicionarVeiculosProprietario from '../telas/Layout/Proprietario/AddVeiculo'
import LayoutEditarVeiculoProprietario from '../telas/Layout/Proprietario/EditVeiculo'
import LayoutEditarCobrancaVeiculosProprietario from '../telas/Layout/Proprietario/EditCobranca'
import LayoutAgendaVeiculo from '../telas/Layout/Proprietario/AgendaVeiculo'
import LayoutCobrancaVeiculosProprietario from '../telas/Layout/Proprietario/Cobranca'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator 
          screenOptions={{headerShown: false}}
          initialRouteName="Login"          >
          {/* <Stack.Screen name="Login" component={Login}/> */}
          {/* <Stack.Screen name="RegistroSelect" component={RegistroSelect}/> */}
          {/* <Stack.Screen name="RegistroUsuario" component={RegistroUsuario}/> */}
          {/* <Stack.Screen name="RegistroProprietario" component={RegistroProprietario}/> */}
          {/* <Stack.Screen name="LayoutProprietario" component={LayoutProprietario}/> */}
          {/* <Stack.Screen name="LayoutVeiculosProprietario" component={LayoutVeiculosProprietario}/>
          <Stack.Screen name="LayoutVeiculoProprietario" component={LayoutVeiculoProprietario}/>
          <Stack.Screen name="LayoutSolicitacoesProprietario" component={LayoutSolicitacoesProprietario}/>
          <Stack.Screen name="LayoutAdicionarVeiculosProprietario" component={LayoutAdicionarVeiculosProprietario}/>
          <Stack.Screen name="LayoutEditarVeiculoProprietario" component={LayoutEditarVeiculoProprietario}/>
          <Stack.Screen name="LayoutEditarCobrancaVeiculosProprietario" component={LayoutEditarCobrancaVeiculosProprietario}/>
          <Stack.Screen name="LayoutCobrancaVeiculosProprietario" component={LayoutCobrancaVeiculosProprietario}/> */}
          {/* <Stack.Screen name="LayoutAgendaVeiculo" component={LayoutAgendaVeiculo}/> */}
          <Stack.Screen name="LayoutUsuario" component={LayoutUsuario}/>
          <Stack.Screen name="LayoutVeiculosUsuario" component={LayoutVeiculosUsuario}/>
          <Stack.Screen name="LayoutVeiculoUsuario" component={LayoutVeiculoUsuario}/>
          <Stack.Screen name="LayoutSolicitacoesUsuario" component={LayoutSolicitacoesUsuario}/>
        </Stack.Navigator>
    )
}