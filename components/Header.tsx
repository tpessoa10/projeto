import { View, Text, StyleSheet, StatusBar } from "react-native"


interface HeaderProps {
    title: string;
    children: React.ReactNode;
}

export const Header = (props: HeaderProps) => {


    return (
        <View style={style.container}>
            <View style={style.title}>
                <Text style={style.textLogo}>{props.title}</Text>

            </View>
            {props.children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        height: 240,
        paddingTop: StatusBar.currentHeight + 16,
        borderBottomLeftRadius: 56,
        borderBottomRightRadius: 56,
        paddingLeft: 16,
        paddingBottom: 36,
        backgroundColor: '#BDB282',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        width: `100%`,
    },
    textLogo: {
        fontSize: 32,
    }
})