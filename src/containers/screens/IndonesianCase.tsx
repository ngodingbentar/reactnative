import React, {useState, useEffect} from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
import api from '../../config/constant/api'

interface IndonesianCaseState {
  jumlahKasus:number;
  sembuh:number;
  meninggal:number;
  perawatan:number;

  fid:number;
  kodeProvi:number;
  provinsi:string;
  kasusPosi:number;
  kasusSemb:number;
  kasusMeni:number;

}


const IndonesianCase= () => {
  const [data, setData] = useState<IndonesianCaseState[]>([])
  const renderItem = ({item}) => {
    return(
      <View>
        <Text>{item.provinsi}</Text>
        <Text>Positiv</Text>

      </View>
    ) ;
  }

  const getData = async () => {
    try{
      let res = await axios.get(api.apiID2 + '/provinsi');
      // console.warn('cek response', res)
      let dataqu = res.data.data
      console.log(dataqu)
      setData(res.data.data)
    }catch(e){ 
      console.warn("error", e)
    }
  };

  useEffect(() => {
    getData();
  },[])

  return(
    <SafeAreaView>
      <Text>Halo dewa</Text>

      {/* {console.warn(data)} */}
      <FlatList 
      data={data} 
      renderItem={renderItem}
      keyExtractor={(_, i) => i.toString()}
       />
    </SafeAreaView>
  )
}


export default IndonesianCase