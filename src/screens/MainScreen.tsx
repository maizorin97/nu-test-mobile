import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { StackParams } from "../navigation/Navigator"

interface Props extends StackScreenProps<StackParams, "MainScreen"> { }

export const MainScreen = ({ navigation }: Props) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hola mundo!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },
})