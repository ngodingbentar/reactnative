import React, { useState, useEffect } from 'react'
import { View, Button, Text } from 'react-native'
import color from '../../../config/constant/color'
import CardInfoGrid from '../../../components/cards/CardInfoGrid'
import CardInfo from '../../../components/cards/CardInfo'
import axios from 'axios'
import api from '../../../config/constant/api'

 
interface CardStatus{
  value: number;
  detail: string;
}
interface CardGlobalState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
}

const CardGlobal = () => {
  // const [data, setData] = useState();
  const [data, setData] = useState<CardGlobalState>();


  const getData = async () => {
    try{
      let res = await axios.get(api.api);
      // console.warn('cek response', res)
      setData(res.data)
    }catch(e){ 
      console.warn("error", e)
    }
  };
 
  useEffect(() => {
    getData();
  },[]); 
  //[] agar tidak dipanggil berulang
  return (
    <View style={{marginVertical: 10}}>
      <View>
      <Text style={{
          color:'white',
          // textAlign: 'center',
          marginLeft:10,
          fontWeight: 'bold',
          fontSize: 22,
          }}>Global</Text>
      </View>
      <View
        style={{backgroundColor: color.blackLight, 
        margin: 10, 
        padding: 20, 
        borderRadius: 10
        }}>
        
        {data && (
          <>
          <CardInfo color="blue" status="Confirmed" value={data.confirmed.value.toLocaleString()}/>
          {/* {console.log('wadudu', data)} */}
          <CardInfo color="green" status="Recovered" value={data.recovered.value.toLocaleString()}/>
          <CardInfo color="red" status="Died" value={data.deaths.value}/>
          </>
        )}
      </View>
    </View>
  )
}

export default CardGlobal 