import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
    Main: undefined;
    MyModal: {userID: string; name: string}
    Order: {order: any}
}

const RootStack = createNativeStackNavigator();

const RootNavigatior = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigatior