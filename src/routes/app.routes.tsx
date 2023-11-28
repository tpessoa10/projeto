import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header";
import { HomePage } from "../screen/Home";
import { ResultadosFiltrados } from "../screen/ResultadosFiltrados";
import { PerfilEstabelecimento } from "../screen/PerfilEstabelecimento";


export type RootStackParamList = {
    Home: undefined;
    ResultadosFiltrados: { estabelecimentos: any[] };
    Login: undefined;
    Cadastro: undefined;
    PerfilEstabelecimento: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

export const AppRoutes = () => {

    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{
            header: () => {
                return (
                    <Header title='Beauty On' />
                )
            }, headerBackVisible: true, contentStyle: { backgroundColor: `#fff` }
        }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="ResultadosFiltrados" component={ResultadosFiltrados} />
                <Stack.Screen name="PerfilEstabelecimento" component={PerfilEstabelecimento} options={{ headerShown: false }} />
            </Stack.Group>
        </Stack.Navigator>
    )

}