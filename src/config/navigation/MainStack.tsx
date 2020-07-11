import React from 'react'
import { View,Text, Button,Image, ScrollView } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../../containers/screens/Main'
import CountryScreen from '../../containers/screens/Country'
import color from '../constant/color'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const MainStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: color.black,
                },
                headerTintColor: 'white',
            }}>
            <Stack.Screen 
            name='Covid-19' 
            component={MainScreen} 
            options={{
                headerLeftContainerStyle: {
                    marginLeft:10,
                },
                headerLeft: () => (
                    <Image
                        style={{width:50, height:50}}
                        source={{
                        uri:'https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png',
                        }}
                    />
                ),

                headerRightContainerStyle: {
                  marginRight:10,
                },
                headerRight: () => (
                //   <Button onPress={() => console.log('wadudu')} title="info" >wa</Button>
                <TouchableOpacity>
                    <Icon name="ios-airplane" size={30} color="white" />
                </TouchableOpacity>
                ),
            }}
            />
            <Stack.Screen 
                name='IndonesianCase' 
                component={CountryScreen} 
                options={{
                    title: 'Indonesia',
                }}
                />
        </Stack.Navigator>
    )
}

export default MainStack