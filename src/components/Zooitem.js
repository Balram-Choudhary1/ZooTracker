import { View, Text, StyleSheet,Image, TextInput,Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { deleteZoo } from '../redux/reducers/ZooSlice';
import { updateZoo } from '../redux/reducers/ZooSlice';

import CustomButton from './CustomButton';
import ImagePickerComponent from './ImagePickerComponent';


const Zooitem = ({item}) => {
        // update model
      const [visible,setVisible] = useState(false);
     
       const [value,setValue] = useState(item?.title);
       const [description,setDescription] = useState(item?.desc);
       const [breed,setBreed] = useState(item?.breed);
       const [image, setImage] = useState(item?.image);

          //delate item
      const dispatch = useDispatch()
      const delateHandler = async()=>{
        dispatch(deleteZoo({id:item?.id}))
      }

      const onUpdate = async()=>{
         dispatch(updateZoo({id:item?.id,title:value, desc:description, breed:breed, image:image}))
         setVisible(false)
         Alert.alert('succesfully update data')
      }

  return (
    <View style={styles.container}>
        <View>
             {item?.image ? (
              <Image 
                 source={{ uri: item.image }} 
                style={{ width: 90, height: 90, borderRadius: 20 }} 
                />
                ) : (
               <Text>No Image Available</Text>
             )}
        </View>
      <View style={styles.infoContainer}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.breed}>{item?.breed}</Text>
          <Text style={styles.desc}>{item?.desc}</Text>
      </View>

      <View style={styles.iconContainer}>
         <FontAwesome name="pencil-square-o" size={24} color="black" onPress={()=> setVisible(true)} />
         <MaterialIcons name="delete-sweep" size={30} color="black"  onPress={delateHandler} />
      </View>

      <Modal visible={visible} onRequestClose={()=> setVisible(false)}>
           <View style={styles.madel}>
           <Ionicons onPress={()=> setVisible(false)} name="close-circle-sharp" size={24} color="black" style={styles.closeicon} />
             <View style={styles.modelContainer}>

           
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

         <ImagePickerComponent  onImageSelected={setImage} />
                
                <CustomButton title="Update" onPress={onUpdate}/>
           </View>
           </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          shadowColor:'#000',
          elevation:10,
          shadowOffset:{ width:1, height:1},
          shadowRadius:2,
          shadowOpacity:0.7,
          backgroundColor:'#f2f2f2',
          margin:10,
          borderRadius:10,
          padding:10
     },
     title:{
        fontSize:15,
        fontWeight:'500',
        color:'#222'
     },
     desc:{
        fontSize:14,
        color:'#888',
        textAlign:'left'
     },
     breed:{
        fontSize:14,
        color:'#221',
     },
     infoContainer:{
       width:'30%'
     },
     iconContainer:{
        width:'20%',
        gap:16
     },
     modal:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)'
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
     },
     modelContainer:{
        backgroundColor:'white',
        padding:10,
        borderRadius:15,
        margin:10,
        width:'90%'
     },
     closeicon:{
         position:'absolute',
         top:10,
         right:10
     }

})
export default Zooitem