import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {createSwitchNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./Screens/HomeScreen";
import GetStartedScreen from "./Screens/GetStartedScreen";

export default class App extends React.Component{
 
  render(){
  return (
    <View>
     <AppContainer/>
    </View>

   );
  }
}

const AppNavigator=createSwitchNavigator({
        HomeScreen:HomeScreen,
        GetStartedScreen:GetStartedScreen,
})

const AppContainer=createAppContainer(AppNavigator);

