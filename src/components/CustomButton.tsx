import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

interface Props {
    text: string
    onPress: () => void
}

export const CustomButton = ({text, onPress}:Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
            >
                <View style={styles.buttonBody}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:100,
        alignSelf: "center"
    },
    buttonBody: {
        width: "50%",
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        borderRadius:10,
        padding:10,
        alignSelf:"center"
    }
})