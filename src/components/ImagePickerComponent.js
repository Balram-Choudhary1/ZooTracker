import React, { useState } from 'react';
import { View, Image, Alert, TouchableOpacity,Text ,StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onImageSelected(result.assets[0].uri); 
    } else {
      Alert.alert("Image selection was canceled.");
    }
  };

  return (
    <View style={{ alignItems: 'center', margin: 15 }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, borderRadius: 10 }} />}
    
      <TouchableOpacity onPress={pickImage} style={styles.animalcontainer}>
        <Text style={styles.text}> animal image</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    text:{
         fontFamily:'SpaceMono', fontSize: 28, color: "#5083fa"
    },
    animalcontainer:{
        borderWidth:1,
        padding:10,
        borderColor:'#ccc',
        margin:15,
        borderRadius:10,
        fontSize:18
    }
})
export default ImagePickerComponent;
