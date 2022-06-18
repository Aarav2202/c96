import React,{Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import { Touchable, TouchableOpacity } from 'react-native-web'

export default class Recommendation extends Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
               <View styles = {styles.recommendationView}>
                    <Text style = {styles.recommendationText}>
                        Go through the below recommendation charts of weight and height limit for boys and girls for a given age and consult your doctor if required
                    </Text>
               </View>
                <View style = {styles.contentView}>
                    <Text style = {styles.text}>
                        Recommendation Chart for girls 
                    </Text>
                    <Image
                        source={require('../assets/girls.jpg')}
                        style = {styles.image}
                    />
                </View>
                <View style = {styles.contentView}>
                    <Text style = {styles.text}>
                        Recommendation Chart for Boys 
                    </Text>
                    <Image
                        source={require('../assets/boys.jpg')}
                        style = {styles.image}
                    />
                </View>
                <TouchableOpacity style = {{backgroundColor:'blue', justifyContent:'center', alignItems:'center'}}>
                    <Text>
                        Consult
                    </Text>
                </TouchableOpacity>
            </View>
        
        )
    }
}
const styles = StyleSheet.create({
    recommendationText : {
        fontSize : 25,
        color : 'white'
    },
    recommendationView : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : flex-wrap,
        backgroundColor : 'black',
        marginTop : 35
    },
    contentView : {
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1,
        marginTop : 25,
        backgroundColor : 'cyan'
    },
    image : {
        width : 400,
        height : 679,
        justifyContent : 'center',
        alignItems : 'center'
    },
    text : {
        fontSize : 18,
        color : 'blue'
    }
})