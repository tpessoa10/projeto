import { StyleSheet, View, Text, TextInput } from "react-native"

export const BarraPesquisa = () => {
    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholder='Pesquisar'/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
    },
    input: {
        backgroundColor: '#fff',
        opacity: 0.3,
        width: 300,
        borderRadius: 999,
        height: 50,
        padding: 12,
    }
})