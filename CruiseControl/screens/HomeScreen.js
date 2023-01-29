import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`} >
      <View style={tw`p-5`}>
        <Image 
            style={{
                width: 350, height: 100, resizeMode: 'contain'
            }}
            source={
                // {uri: "https://links.papareact.com/gzs"}
                // Redo logo at later stage!!
                require('../assets/images/cruizecontrollogo.png')
            }
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})