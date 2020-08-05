import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';

export default class GetStartedScreen extends React.Component{
 
  render(){
    return (

    <View>
        <Text style={styles.t}>Introduction</Text>\
        
        <View style={styles.container,{backgroundColor:'#4CB1F7'}}>
        <Text style={styles.t2}>Welcome to the very start of your React Native journey!</Text>
        <Text style={styles.t2}>If you're looking for environment setup instructions,</Text>
        <Text style={styles.t2}>they've moved to their own section.</Text>
        <Text style={styles.t2}>Continue reading for an introduction to the documentation, </Text>
        <Text style={styles.t2}>Native Components, React, and more!</Text>
        </View>

    </View>

  );
  }
}

const styles=StyleSheet.create({
  t:{
    fontWeight:'bold',
    fontSize:60,
    marginTop:70,
    marginLeft:40
  },
  t2:{
    fontSize:25,
    marginLeft:50
  },
  container:{
     justifyContent:'center',
      alignItems:'center',
  }
})

