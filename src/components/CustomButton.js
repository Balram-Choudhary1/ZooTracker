import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
      container:{
         borderRadius:15,
         padding:10,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#5083fa',
         alignSelf:'center',
         paddingHorizontal:60
      },
      text:{
        fontSize:20,
        fontWeight:600,
        color:"#fff"
      }
})
export default CustomButton