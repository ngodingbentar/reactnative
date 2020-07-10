import React from 'react'
import { View,Text, Button,Image, ScrollView } from 'react-native'
import color from '../../config/constant/color'
import CardInfo from '../../components/cards/CardInfo'
import CardInfoGrid from '../../components/cards/CardInfoGrid'
import CardGlobal from '../organism/main/CardGlobal'
import CardIndonesia from '../organism/main/CardIndonesia'

const MainScreen = () => {
  return(
    <ScrollView style={{backgroundColor: color.black, flex:1, marginTop:24}}>
      <View style={{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        }}>

      <Image
        style={{width:50, height:50}}
        source={{
          uri:'https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png',
        }}
      />
      <Button onPress={() => console.log('wadudu')} title="dew" >wa</Button>
      </View>
      <CardGlobal/>
      <CardIndonesia/>


    </ScrollView>
  )
}


export default MainScreen