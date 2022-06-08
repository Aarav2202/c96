import React,{Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state = {
            height : '',
            weight : '',
            Age    : ''
        }
    }
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', height:50, alignItems:'center'}}>
                <View style={styles.appTitleTextContainer}>
                    <Text style={styles.appTitleText}>Diet App</Text>
                </View>
                <View style = {styles.fieldsContainer}>
                    <TextInput
                        style={styles.inputFont}
                        onChangeText={height => this.setState({ height })}
                        placeholder={"Height"}
                        placeholderTextColor="Grey"
                    />
                    <TextInput
                        style={styles.inputFont}
                        onChangeText={weight => this.setState({ weight })}
                        placeholder={"Weight"}
                        placeholderTextColor="Grey"
                    />
                    <TextInput
                        style={styles.inputFont}
                        onChangeText={age => this.setState({ age })}
                        placeholder={"Age"}
                        placeholderTextColor="Grey"
                    />
                </View>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() =>this.props.navigation.navigate("Recommendations")}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
    },
    inputFont: {
        height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white",
        fontFamily: "Bubblegum-Sans"
    },  
    fieldsContainer: {
        flex: 0.85,
        marginTop: 30
    },
    buttonText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
    },
    Button: {
        marginTop: RFValue(20),
        alignItems: "center",
        justifyContent: "center"
    }
})