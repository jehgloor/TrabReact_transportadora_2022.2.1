import { View, StyleSheet, Text } from "react-native";

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTextMenu}>
                <Text style={styles.textMenu}>
                    <Text style={styles.textMenuRastreamento}>
                        Rastreamento
                    </Text>
                    {'    '}Enviar    Receber    Comprar  Logística
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffd400',
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 10
    },
    containerTextMenu: {
        alignContent: 'space-between',
        display: 'flex',
        flex: 1,
        alignContent: 'space-between',
        width: '100%'
    },
    textMenu: {
        color: '#0083ca',
    },
    textMenuRastreamento: {
        backgroundColor: '#fafafaae',
        borderRadius: 10
    }
})