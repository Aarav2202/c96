import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

import {Advanced} from '../Screens/Advanced'
import {CreatePost} from '../Screens/CreatePost'
import {HomeScreen} from '../Screens/HomeScreen'
import {Profile} from '../Screens/Profile'
import {Recommendation} from '../Screens/Recommendation'

const Tab = createMaterialBottomTabNavigator()



export default class TabNavigator extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <Tab.Navigator>
        
                
                <Tab.Screen  name='Advanced' component = {Advanced}/>
                <Tab.Screen  name='Home' component = {HomeScreen}/>
                <Tab.Screen  name='Feed' component = {Feed}/>
                <Tab.Screen  name='Profile' component = {Profile}/>
                <Tab.Screen  name='CreatePost' component = {CreatePost}/>
                
                
            </Tab.Navigator>
        
        )
    }
}