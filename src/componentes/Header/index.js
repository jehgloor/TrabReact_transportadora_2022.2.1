import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

export default function Header({ carrierName }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.iconeButton} activeOpacity={0.9}>
                    <Image source={require('../../assets/iconeCorreio.png')} style={styles.buttonImageIconStyle} />
                </TouchableOpacity>
                <View style={styles.containerCarrierName}>
                    <Text style={styles.textCarrierName}>
                        {carrierName}
                    </Text>
                </View>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffd400',
        paddingTop: 44,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 15,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    iconeButton: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    containerCarrierName: {
        alignItems: 'center',
        flex: 1
    },
    textCarrierName: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#00416b',
        textAlign: 'center'
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    }
})

