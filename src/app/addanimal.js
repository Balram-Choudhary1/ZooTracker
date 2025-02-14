import { View, Text, StyleSheet,TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../components/CustomHeader'
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import ImagePickerComponent from '../components/ImagePickerComponent';
import { addZoo } from '../redux/reducers/ZooSlice';
import { router } from 'expo-router';


const Addanimal = () => {
  const dispatch = useDispatch( )

  const [value,setValue] = useState('');
  const [description,setDescription] = useState('');
  const [breed,setBreed] = useState('');
  const [image, setImage] = useState(null);

  const onsubmit = async() =>{
        if(value.trim()=="" || description.trim()==""){
          Alert.alert("Please enter something")
           return
        }

        if (!image) {
          Alert.alert('Please select an image');
          return;
        }

        dispatch(addZoo({title:value,desc:description,breed:breed,image:image}))
      router.back();
  }

  return (
    <View style={styles.container}>
    
      <CustomHeader title="add animals" isBackButton={true}/>

      <TextInput 
           value={value}
           onChangeText={setValue}
           style={styles.input}
           placeholder='Enter animal name !'
           placeholderTextColor={'#ccc'}
      />

     <TextInput 
           value={breed}
           onChangeText={setBreed}
           style={styles.input}
           placeholder='Breed name !'
           placeholderTextColor={'#ccc'}
      />

    <TextInput 
           value={description}
           onChangeText={setDescription}
           style={[styles.input, styles.minHeight]}
           placeholder='description !'
           numberOfLines={4}
           multiline
           maxLength={120}
           placeholderTextColor={'#ccc'}
           
      />


  {/* create a one image picker and slect a image one componet */}
    
  <ImagePickerComponent onImageSelected={setImage} />


    <CustomButton title="Add animal Data" onPress={onsubmit}/>

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
     borderColor:'#ccc',
     margin:15,
     borderRadius:10,
     fontSize:18
  },
  minHeight:{
     minHeight:90
  }
})
export default Addanimal