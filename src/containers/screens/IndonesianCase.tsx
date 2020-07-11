import React, {useState, useEffect} from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler'
import axios from 'axios'
import api from '../../config/constant/api'
import color from '../../config/constant/color'

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
      <View style={{
        backgroundColor: 'white',
        marginVertical:8,
        marginHorizontal: 12,
        padding:16,
        borderRadius: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom:8}}>{item.provinsi}</Text>
        <View style={{}}>
          <Text style={{flex: 1, fontSize: 16,fontWeight: 'bold',backgroundColor: color.oren, color: 'white',padding: 4,paddingLeft:8, borderTopLeftRadius:8, borderTopRightRadius:8}}>Positiv : {item.kasusPosi}</Text>
          <Text style={{flex: 1, fontSize: 16,fontWeight: 'bold',backgroundColor: color.teal, color: 'white',padding: 4,paddingLeft:8}}>Sembuh : {item.kasusSemb}</Text>
          <Text style={{flex: 1, fontSize: 16,fontWeight: 'bold',backgroundColor: color.red, color: 'white',padding: 4,paddingLeft:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>Meninggal : {item.kasusMeni}</Text>
        </View>
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
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>Halo dewa</Text> */}

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