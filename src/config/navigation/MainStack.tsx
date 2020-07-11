import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '../../containers/screens/Main'
import CountryScreen from '../../containers/screens/Country'
import color from '../constant/color'

const Stack = createStackNavigator()

const MainStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    background: color.black,
                },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name='Home' component={MainScreen} />
            <Stack.Screen name='IndonesianCase' component={CountryScreen} />
        </Stack.Navigator>
    )
}

export default MainStack