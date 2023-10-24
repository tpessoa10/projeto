// import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { SafeAreaView } from 'react-native-safe-area-context';


export const HomePage = () => {
    return (
        <View style={style.container}>
            {/* <ScrollView> */}

                <Header title='Beauty On'>
                    <BarraPesquisa />
                </Header>
            {/* </ScrollView> */}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#8A877B`
    }
})