import React from 'react'
import  { render, RenderAPI } from "@testing-library/react-native"
import { MainScreen } from '../src/screens/MainScreen'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { StackParams } from '../src/navigation/Navigator'

let component: RenderAPI

describe("<MainScreen />",  () => {

  it("Rendered Correctly", () => {

    const navigation =  {navigate: () => {}}
    spyOn(navigation, 'navigate')
    
    const screen = render(<MainScreen navigation={navigation} />)

  })

})
