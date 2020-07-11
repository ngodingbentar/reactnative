import React from 'react'
import {ScrollView } from 'react-native'
import color from '../../config/constant/color'
// import CardInfo from '../../components/cards/CardInfo'
// import CardInfoGrid from '../../components/cards/CardInfoGrid'
import CardGlobal from '../organism/main/CardGlobal'
import CardIndonesia from '../organism/main/CardIndonesia'

const MainScreen = () => {
  return(
    <ScrollView style={{backgroundColor: color.black, flex:1, marginTop:24}}>
      <CardGlobal/>
      <CardIndonesia/>


    </ScrollView>
  )
}


export default MainScreen