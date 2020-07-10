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
  const [data, setData] = useState();

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
  return (
    <View
      style={{backgroundColor: color.blackLight, 
      margin: 10, 
      padding: 20, 
      borderRadius: 10
      }}>
      
      {data && (
        <>
        <CardInfo color="blue" status="Confirmed" value="1234"/>
        <CardInfo color="green" status="Recovered" value="1233"/>
        <CardInfo color="red" status="Died" value="1"/>
        </>
      )}

      

    </View>
    
  )
}

export default CardGlobal 