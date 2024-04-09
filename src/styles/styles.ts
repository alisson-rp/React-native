import { StyleSheet } from "react-native";

import { theme } from "@/theme"

export const styles = StyleSheet.create({
    View: {
        paddingVertical: 40,
        paddingBottom: 16,
        justifyContent: 'center',
        paddingHorizontal: 35,
    },
    text: {
        paddingTop: 20,
        color: theme.colors.green_500,
        textAlign: 'left',
        width: '100%'
    },
    title: {
        paddingTop: 20,
        color: theme.colors.green_800,
        textAlign: 'center',
        width: '100%',
        fontSize: 35,
        fontFamily: theme.fontFamily.bold
    },
    scrollView: {
        width: '100%',
    },
    card: {
        paddingBottom: 10
    },
    loginLogoView: {
        alignItems: 'center',
        paddingTop: 32,
        marginTop: 40
    },
    loginInputView: {
        alignItems: 'center',
        paddingBottom: 16,
    },
    esqueceuSenha: {
        paddingTop: 20,
        color: theme.colors.green_500,
        textAlign: 'right',
        width: '100%',
        fontFamily: theme.fontFamily.bold
    },
    viewButtonCard: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonCard: {
        width: '50%'
    },
    viewTextSenha: {
        flex: 1,
        width: '100%',
        flexDirection: 'row', // Isso alinha os elementos lado a lado
        justifyContent: 'space-between', // Isso centraliza os elementos horizontalmente
        alignItems: 'center', // Isso centraliza os elementos verticalmente
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: theme.colors.green_800
    }, 
    // COMPONENTES BUTTON
    button: {
        backgroundColor: theme.colors.green_800,
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.white,
        borderRadius: 8,
        marginTop: 30
    },
    textButton: {
        color: theme.colors.white,
        fontSize: 20,
    },
    // COMPONENTES INPUT
    input: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: theme.colors.green_100,
        borderRadius: 10,
        height: 50,
        width: '100%',
        flexDirection: "row",
        alignItems: "center", 
        padding: 12,
        marginVertical: 20,
        gap: 7
    },
    textInput: {
        flex: 1,
        color: theme.colors.black,
        fontSize: 16,
        height: 45
    },
})