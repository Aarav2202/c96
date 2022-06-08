import React,{Component} from 'react'
import {View, Text, Image} from 'react-native'

export default class Advanced extends Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', alignItems:'center', padding: 10, backgroundColor: 'Blue'}}>
                <Text style = {{color:'white', fontWeight:'bold', padding:10, fontSize:20}}>
                    Advanced Exercises - 1 Month Plan
                </Text>
                <Image
                    source={require('../assets/image.png')}
                    style = {{
                        marginTop: RFValue(20),
                        resizeMode: "contain",
                        width: "100%",
                        alignSelf: "center",
                        height: RFValue(275)
                    }}
                />
            </View>
        
        )
    }
}