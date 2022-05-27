import React from 'react'
import  { fireEvent, render, RenderAPI, waitFor } from "@testing-library/react-native"
import { MainScreen } from '../src/screens/MainScreen'


describe("<MainScreen />",  () => {

  let mainScreen: RenderAPI
  
  beforeEach(() => {
    const navigation =  {navigate: () => {}}
    mainScreen = render(<MainScreen navigation={navigation} />)
  })

  it("Rendered Correctly", () => {   
    expect(mainScreen).toBeDefined()
    expect(mainScreen.getByTestId('txtNothingToShow')).toBeDefined()
    expect(mainScreen.queryAllByTestId('flHistoryAlias').length).toEqual(0)
  })

  it("Call API and show elements", () => {
    const btnShortUrl = mainScreen.getByTestId('btnShortUrl')
    fireEvent(btnShortUrl, "press")
    waitFor(() => expect(mainScreen.getByTestId('flHistoryAlias')).toBeDefined())
  })

})
