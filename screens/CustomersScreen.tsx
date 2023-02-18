import { Text, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useTailwind} from 'tailwind-rn';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigatior';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Image, Input } from "@rneui/themed"

export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const [input, setinput] =  useState<string>('');

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [])

  return (
    <ScrollView style={{backgroundColor: "#8c9191"}}>
      <Image 
        source={{uri: "https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg"}}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input 
        placeholder="Search by Customer" 
        value={input} 
        onChangeText={setinput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
       />
    </ScrollView>
  )
}

export default CustomersScreen