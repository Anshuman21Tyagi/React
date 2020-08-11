import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';

export default class GetStartedScreen extends React.Component{

  goToHomeScreen=()=>{
    this.props.navigation.navigate('HomeScreen');
  };
 
  render(){
    return (

    <ScrollView>
      <Text style={styles.t}>Introduction</Text>
        <View style={{backgroundColor:'#ADF8FD',marginTop:30,width:800,marginLeft:50}}>
        <Text style={{ fontSize:25,marginLeft:15,marginTop:26}}>Welcome to the very start of your React Native journey!</Text>
        <Text style={styles.t5}>If you're looking for environment setup instructions,</Text>
        <Text style={styles.t5}>they've moved to their own section.</Text>
        <Text style={styles.t5}>Continue reading for an introduction to the documentation, </Text>
        <Text style={{fontSize:25,marginLeft:15,marginBottom:26}}>
          Native Components, React, and more!
        </Text>
        </View>
        <Text style={{fontSize:25,marginLeft:55,marginTop:26}}>Many different kinds of people use React Native: from advanced iOS developers to</Text>
        <Text style={styles.t2}>React beginners, to people getting started programming for the first time in their</Text>
        <Text style={styles.t2}>career. These docs were written for all learners, no matter their experience level or</Text>
        <Text style={{fontSize:25,marginLeft:55}}>background.</Text>

        <Text style={styles.t3}>How to use these docs</Text>
        <Text style={styles.t4}>You can start here and read through these docs linearly like a book; or you can read</Text>
        <Text style={styles.t2}>the specific sections you need. Already familiar with React? You can skip that section—</Text>
        <Text style={styles.t2}>or read it for a light refresher.</Text>

        <Text style={styles.t3}>Prerequisites</Text>
        <Text style={styles.t4}>To work with React Native, you will need to have an understanding of JavaScript</Text>
        <Text style={styles.t2}>fundamentals. If you’re new to JavaScript or need a refresher, you can dive in or brush</Text>
        <Text style={styles.t2}>up at Mozilla Developer Network.</Text>

        <View style={{backgroundColor:'#F2E205',marginTop:30,width:800,marginLeft:50}}>
          <Text style={{ fontSize:25,marginLeft:15,marginTop:26}}>While we do our best to assume no prior knowledge of React, Android, or iOS</Text>
          <Text style={styles.t5}>development, these are valuable topics of study for the aspiring React Native</Text>
          <Text style={styles.t5}>developer. Where sensible, we have linked to resources and articles that go</Text>
          <Text style={{fontSize:25,marginLeft:15,marginBottom:26}}>more in depth.</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>this.goToHomeScreen()}>
          <Text style={{color:'white'}}>Go Back</Text>
        </TouchableOpacity>
        </ScrollView>

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
    marginTop:50
  },
  t3:{
    fontWeight:'bold',
    fontSize:60,
    marginTop:20,
    marginLeft:40
  },
  t4:{
    fontSize:25,
    marginLeft:50,
    marginTop:14
  },
  t5:{
    fontSize:25,
    marginLeft:15,
    marginTop:6
  },
})

