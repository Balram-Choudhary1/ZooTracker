import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
const  state = useSelector(state => state.zoo)
console.log(state)

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home