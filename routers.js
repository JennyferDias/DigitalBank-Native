import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './components/home'
import Login from './components/login'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import Fone from './components/fone' 
import Code from './components/code'
import createU from "./components/createU"
import Done from "./components/done"
import Extrato from "./components/extrato/extrato";
import Transferir from "./components/transferir"

const Pilha = createStackNavigator()

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home', headerShown: false}}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login', headerShown: false }}
                />
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ title: 'Create', headerShown: false }}
                />
                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ title: 'Read', headerShown: false }}
                />
                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ title: 'Update', headerShown: false }}
                />
                <Pilha.Screen
                    name="Fone"
                    component={Fone}
                    options={{ title: 'Fone', headerShown: false }}
                />
                <Pilha.Screen
                    name="Code"
                    component={Code}
                    options={{ title: 'Code', headerShown: false }}
                />
                <Pilha.Screen
                    name="createU"
                    component={createU}
                    options={{ title: 'createU', headerShown: false }}
                />
                <Pilha.Screen
                    name="Done"
                    component={Done}
                    options={{ title: 'Done', headerShown: false }}
                />
                <Pilha.Screen
                    name="Extrato"
                    component={Extrato}
                    options={{ title: 'Extrato', headerShown: false }}
                />
                <Pilha.Screen
                    name="Transferir"
                    component={Transferir}
                    options={{ title: 'Transferir', headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}