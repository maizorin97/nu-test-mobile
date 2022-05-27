import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Alias } from "../interfaces/ShortenerInterfaces"

interface Props {
    alias: Alias,
    onPress: () => void
}

export const AliasItem = ({ alias, onPress }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}
            style={styles.container}
        >
            <Text>
                {alias._links.self} shorted to: {alias.alias}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }

})