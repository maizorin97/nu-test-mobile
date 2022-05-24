import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { StackParams } from "../navigation/Navigator"
import { useShortener } from "../hooks/useShortener"
import { CustomButton } from "../components/CustomButton"

interface Props extends StackScreenProps<StackParams, "MainScreen"> { }

export const MainScreen = ({ navigation }: Props) => {

    const [input, setInput] = useState("")

    const { url, setUrl } = useShortener()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                    placeholder="url"
                    keyboardType="default"
                />
                <CustomButton
                    text="Go"
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    searchContainer: {
        width: "100%",
        flexDirection: "row",
    },
    historyList: {
        backgroundColor:"red"
    },
    input: {
        height: 40,
        width: "50%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
})