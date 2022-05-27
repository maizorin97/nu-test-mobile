import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

interface Props {
    text: string,
    onPress: () => void,
    disabled: boolean
}

export const CustomButton = ({text, disabled, onPress}:Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onPress}
                disabled={disabled}
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