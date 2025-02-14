import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { deleteZoo } from '../redux/reducers/ZooSlice';

const Zooitem = ({item}) => {
        // update model
      




      const dispatch = useDispatch()
      const delateHandler = async()=>{
        dispatch(deleteZoo({id:item?.id}))
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
         <FontAwesome name="pencil-square-o" size={24} color="black" onPress={()=>{}} />
         <MaterialIcons name="delete-sweep" size={30} color="black"  onPress={delateHandler} />
      </View>
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
     }
})
export default Zooitem