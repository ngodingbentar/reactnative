import React from 'react'
import { View,Text, Button,Image } from 'react-native'
import color from '../../config/constant/color'

interface Props {
  status: string;
  value: string;
  color: string;
}

const CardInfo: FC<Props> = (props) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{color: props.color, fontSize: 22}}>{props.status}</Text>
      <Text style={{color: color.grey1, fontSize: 26, fontWeight: 'bold'}}>{props.value}</Text>
    </View>
  )
}

export default CardInfo