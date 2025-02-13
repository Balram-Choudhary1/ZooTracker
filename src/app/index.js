import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useFonts } from 'expo-font'
import Logo from '../assets/images/Zoologo.png'
import { screenHeight, screenWidth } from '../utils/Constants'
import { resetAndNavigate } from '../utils/Helpers'

const Main = () => {

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    })

    const [hasNavigated, setHasNavigated] = useState(false)

    useEffect(() => {
        if(loaded && !hasNavigated) {
              const timeoutId   =   setTimeout(() => {
                resetAndNavigate("/home")
            }, 2000);

            return () => clearTimeout(timeoutId)
        }
    },[loaded,hasNavigated])

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logostyle} />

            <Text style={styles.text}>Zoo Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logostyle: {
         borderWidth: 1, borderRadius: 100, borderColor: "#5083fa",
         width: screenWidth * 0.48, height: screenHeight * 0.22
    },
    text:{
           marginTop:20, fontFamily:'SpaceMono', fontSize: 28, color: "#5083fa"
    }
})

export default Main