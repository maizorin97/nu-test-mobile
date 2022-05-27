import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, FlatList, Linking, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { StackParams } from "../navigation/Navigator"
import { useShortener } from "../hooks/useShortener"
import { CustomButton } from "../components/CustomButton"
import { Alias, Url } from "../interfaces/ShortenerInterfaces"
import { AliasItem } from "../components/AliasItem"

interface Props extends StackScreenProps<StackParams, "MainScreen"> { }

export const MainScreen = ({ navigation }: Props) => {

    const [input, setInput] = useState("")

    const { recentAlias, postAliasApi, loading } = useShortener()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                    placeholder="url"
                    keyboardType="default"
                    testID="txtUrl"
                />
                <CustomButton
                    text="Go"
                    disabled={loading}
                    onPress={() => {
                        const body: Url = { url: input }
                        postAliasApi(body)
                    }}
                    testID="btnShortUrl"
                />
                {
                    (loading) ? (
                        <ActivityIndicator/>
                    ):(<></>)
                }
            </View>
            <View style={styles.listContainer}>
                {
                    (recentAlias.length === 0) ? (
                        <Text style={{margin:10}} testID='txtNothingToShow'>
                            Nothing to show...
                        </Text>
                    ) : (
                        <View>
                        <Text style={{margin:10}}>Recently shorted</Text>
                        <FlatList
                            style={styles.historyList}
                            data={recentAlias}
                            showsVerticalScrollIndicator={false}
                            stickyHeaderIndices={[0]}
                            keyExtractor={(alias) => alias._links.short}
                            renderItem={({ item }) => (
                                <AliasItem
                                    alias={item}
                                    onPress={() => {
                                        Linking.openURL(item._links.short)
                                    }}
                                />
                            )}
                            testID="flHistoryAlias"
                        />
                        </View>
                    )
                }
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
        flex: 1,
        width: "100%",
        flexDirection: "row",
    },
    listContainer: {
        flex: 9,
        width: "100%"
    },
    historyList: {

    },
    input: {
        height: 40,
        width: "50%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        alignSelf: "center"
    },
})