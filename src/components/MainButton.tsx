import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"


{/* Botão Principal -> reutilizavel no main menu */}
export default function MainButton( {onPress, label}:TouchableOpacityProps & {label: string} ){
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: "70%",
        borderWidth: 1,
        borderColor: "#777",
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#111",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "serif",
    }
})