import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{

   goToGetHomeScreen=()=>
   {
     this.props.navigation.navigate('HomeScreen');
   };    
 
  render(){
  
    return (

   <View>
       <Text style={styles.t}>Learn The Basics</Text>
       <Text style={styles.t2}>React Native is like React, but it uses native components instead of web components as building blocks. So to</Text>
       <Text style={styles.t2}>understand the basic structure of a React Native app, you need to understand some of the basic React concepts, like</Text>
       <Text style={styles.t2}>JSX, components, state, and props. If you already know React, you still need to learn some React-Native-specific</Text>
       <Text style={styles.t2}>stuff, like the native components. This tutorial is aimed at all audiences, whether you have React experience or not.</Text>
       <Text style={styles.t2}>Let's do this thing.</Text>
       <TouchableOpacity style={styles.button} onPress={()=>this.goToGetHomeScreen()}>
          <Text style={{color:'white'}}>Go Back</Text>
        </TouchableOpacity>
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
    marginLeft:50,
    marginTop:6
  },
  button:{
    backgroundColor:'#263657',
    borderRadius:100,
    height:30,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20,
    marginTop:200
  }
})

