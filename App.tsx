import "@/styles/global.css"
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import "./src/styles/global.css"
import { 
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular
} from "@expo-google-fonts/ubuntu"

import MenuScreen from '@/app/MenuScreen';
import CadastroScreen from '@/app/CadastroScreen';
import ListagemScreen from '@/app/ListagemScreen';
import Login from "@/app/Login";
import Home from "@/app/Home";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  })
  if (!fontsLoaded){
    return
  }
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Listagem" component={ListagemScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
  );
}

