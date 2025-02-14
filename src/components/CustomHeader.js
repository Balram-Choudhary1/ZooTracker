import { View, Text, SafeAreaView , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomHeader = ({title,isBackButton}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
      <Text style={styles.text}>{title}</Text>
        {isBackButton &&
        <TouchableOpacity style={styles.backButton} onPress={()=> router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={28} color="white" />
        </TouchableOpacity>
       }
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
   container:{
      backgroundColor:'#5083fa',
      padding:30,
      paddingVertical:8,
      paddingTop:25
   },
   text:{
      fontSize:22,
      fontFamily:'SpaceMono',
      textAlign:'center',
      color:'#fff',
      marginTop:20 
   },
   backButton:{
      position:'absolute',
      left:-28,
      top:25,
    }
})
export default CustomHeader