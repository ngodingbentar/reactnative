import React from 'react'
import { View,Text, Button,Image } from 'react-native'
import color from '../../config/constant/color'

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfoGrid: FC<Props> = (props) => {
  return (
    <View style={{
      marginVertical: 4, 
      flex: 1,
      backgroundColor: props.color,
      borderRadius: 6,
      padding: 8,
      margin:5,
      }}>

      <Text style={{color: color.black, fontSize: 14,}}>{props.status}</Text>
      <View style={{height:1, backgroundColor: color.black}} />
        <Text style={{color: color.blackLight, fontSize: 22, fontWeight: 'bold'}}>{props.value}</Text>
    </View>
  )
}

export default CardInfoGrid