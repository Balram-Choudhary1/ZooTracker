import { View, Text, StyleSheet,TextInput } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../components/CustomHeader'


const Addanimal = () => {
  const [value,setValue] = useState('')

  const submit = async() =>{

  }

  return (
    <View style={styles.container}>
      <CustomHeader title="add animals" isBackButton={true}/>

      <TextInput 
           value={value}
           onChangeText={setValue}
           style={styles.input}
           placeholder='enter animal name'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  input:{
     borderWidth:1,
     padding:10,
     borderColor:'#ccc'
  }
})
export default Addanimal