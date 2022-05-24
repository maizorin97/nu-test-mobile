import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { MainScreen } from "../screens/MainScreen"

export type StackParams = {
    MainScreen: undefined
}

const Stack = createStackNavigator<StackParams>()

export const Navigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
            initialRouteName="MainScreen"
        >
            <Stack.Group>
                <Stack.Screen name="MainScreen" component={MainScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

