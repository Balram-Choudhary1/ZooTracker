import { View, Text ,StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import CustomHeader from '../components/CustomHeader'
import AddButton from '../components/AddButton'


const Home = () => {
const  data = useSelector(state => state.zoo.data)


  return (
    <View style={styles.container}>
      <CustomHeader title="ZooTracker"/>
      <AddButton />
    </View>
   
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',

  }
})

export default Home