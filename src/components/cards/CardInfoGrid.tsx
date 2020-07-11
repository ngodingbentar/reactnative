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

      <Text style={{color: color.white2, fontSize: 20, fontWeight: 'bold', marginLeft:10}}>{props.status}</Text>
      <View style={{height:2, backgroundColor: color.black}} />
        <Text style={{color: color.white2, fontSize: 22, fontWeight: 'bold', marginLeft:10}}>{props.value}</Text>
    </View>
  )
}

export default CardInfoGrid