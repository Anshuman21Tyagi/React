import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';

export default class GetStartedScreen extends React.Component{

  goToHomeScreen=()=>{
    this.props.navigation.navigate('HomeScreen');
  };
 
  render(){
    return (

    <View>
      <Text style={styles.t}>Introduction</Text>
        <View style={{backgroundColor:'#ADF8FD'}}>
        <Text style={{ fontSize:25,marginLeft:55,marginTop:26}}>
          Welcome to the very start of your React Native journey!
        </Text>
        <Text style={styles.t2}>If you're looking for environment setup instructions,</Text>
        <Text style={styles.t2}>they've moved to their own section.</Text>
        <Text style={styles.t2}>Continue reading for an introduction to the documentation, </Text>
        <Text style={{fontSize:25,marginLeft:55,marginBottom:26}}>
          Native Components, React, and more!
        </Text>
        </View>
        <Text style={{fontSize:25,marginLeft:55,marginTop:26}}>Many different kinds of people use React Native: from advanced iOS developers to</Text>
        <Text style={styles.t2}>React beginners, to people getting started programming for the first time in their</Text>
        <Text style={styles.t2}>career. These docs were written for all learners, no matter their experience level or</Text>
        <Text style={{fontSize:25,marginLeft:55}}>background.</Text>
        <TouchableOpacity style={styles.button} onPress={()=>this.goToHomeScreen()}>
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
    marginLeft:55,
    marginTop:6
  },
  container:{
     justifyContent:'center',
      alignItems:'center',
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

