import React, { useState, useEffect } from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'
import color from '../../../config/constant/color'
import CardInfoGrid from '../../../components/cards/CardInfoGrid'
import axios from 'axios'
import api from '../../../config/constant/api'


interface CardStatus{
  value: number;
  detail: string;
}
interface CardIndonesiaState {
  // confirmed: CardStatus;
  // recovered: CardStatus;
  // deaths: CardStatus;
  // lastUpdate: string;

  jumlahKasus:number;
  sembuh:number;
  meninggal:number;
  perawatan:number;

  


}

const CardIndonesia = () => {
  const [data, setData] = useState<CardIndonesiaState>();

  const getData = async () => {
    try{
      let res = await axios.get(api.apiID2);
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
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{
          color:'white',
          // textAlign: 'center',
          marginLeft:10,
          fontWeight: 'bold',
          fontSize: 22,
          }}>Indonesia</Text>

        <TouchableOpacity>
          <Text style={{
            color:'white',
            // textAlign: 'center',
            marginRight:10,
            fontWeight: 'bold',
            fontSize: 22,
            }}>Detail</Text>
        </TouchableOpacity>
      </View>
      <View
      style={{
        backgroundColor: color.blackLight, 
        margin: 10, 
        paddingVertical: 10, 
        paddingHorizontal:20,
        borderRadius: 10}}>
      

      {/* <Text 
      style={{
        marginVertical:10,
        textAlign: 'center',
        color: '#fff'
      }}>Last Update {data.lastUpdate}</Text> */}

      <View
        style={{
          flexDirection: 'row',
        }}>
        {data && (
          <>
          <View style={{flex:1}}>
            <CardInfoGrid color="teal" status="Jumlah Kasus" value={data.jumlahKasus.toLocaleString()}/>
            <CardInfoGrid color="green" status="Sembuh" value={data.sembuh.toLocaleString()}/>
          </View>
          <View style={{flex:1}}>
            <CardInfoGrid color="grey" status="Meninggal" value={data.meninggal.toLocaleString()}/>
            <CardInfoGrid color={color.oren} status="Perawatan" value={data.perawatan.toLocaleString()}/>
          </View>
          </>
        )}
        
      </View>
      <Button title="Detail" onPress={() => console.log('detail')}/>
    </View>
  </View>
  )
}

export default CardIndonesia