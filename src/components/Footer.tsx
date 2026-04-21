import { Text } from "react-native";
import { StyleSheet } from "react-native";

{/* Componente de rodapé para exibir informações de copyright ou contato */}
export default function Footer() {
    return(
        <Text style={styles.footer}>@geothrone.inc</Text>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 20,
        right: 20,
        color: "#777",
        fontSize: 12,
    }
});