import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import MainButton from "@/components/MainButton";

import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";


/**
 * Tela Principal do GeoThrone:
 * - Exibe o título e logo do jogo
 * - Verifica se o usuário está logado para mostrar opções de "Criar Conta" ou "Meu Perfil"
 * - Permite acesso à corrida e classificações para todos os usuários
 * @returns 
 */
export default function Index(){
    return(
        <View style={styles.container}>

            {/* Título */}
            <Text style={styles.title}>GeoThrone</Text>

            {/* Logo Home */}
            <Logo />

            {/* Botões de Ação */}
            <MainButton label="COMEÇAR A CORRER" onPress={() => router.push("/run")} />
            <MainButton label="CLASSIFICAÇÕES" onPress={() => router.push("/ranking")} />

                
            {/* Footer */}
            <Footer />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingTop: 60,
        gap: 15
    },
    title: {
        color: "#fff",
        fontSize: 42,
        fontFamily: "VecnaBold",
        marginBottom: 10,
        letterSpacing: 3,
    }
})