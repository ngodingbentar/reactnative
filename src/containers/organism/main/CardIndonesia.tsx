import React from 'react'
import { View, Button, Text } from 'react-native'
import color from '../../../config/constant/color'
import CardInfoGrid from '../../../components/cards/CardInfoGrid'

const CardIndonesia = () => {
  return (
    <View
    style={{
      backgroundColor: color.blackLight, 
      margin: 10, 
      paddingVertical: 10, 
      paddingHorizontal:20,
      borderRadius: 10}}>
    <Text style={{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 28,
      }}>Indonesia</Text>

    <Text 
    style={{
      marginVertical:10,
      textAlign: 'center',
      color: '#fff'
    }}>Last Update Senin</Text>

    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <CardInfoGrid color="teal" status="Confirmed" value="123"/>
      <CardInfoGrid color="green" status="Confirmed" value="123"/>
      <CardInfoGrid color="grey" status="Confirmed" value="123"/>
    </View>
    <Button title="Detail" onPress={() => console.log('detail')}/>
  </View>
  )
}

export default CardIndonesia