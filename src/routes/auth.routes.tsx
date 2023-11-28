import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screen/Login"
import { Cadastro } from "../screen/Cadastro"

export type AuthStackParamList = {
    login: undefined,
    cadastro: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthRoutes = () => {


    return (
        <Stack.Navigator initialRouteName='login' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}