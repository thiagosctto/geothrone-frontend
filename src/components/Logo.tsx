import { Image } from "react-native";
import { StyleSheet } from "react-native";

{/* Componente de logo para exibir o logotipo do jogo */}
export default function Logo() {
    return (
        <Image
            source={require("@/assets/vetores/logo.png")}
            style={styles.logo}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 40,
    }
})