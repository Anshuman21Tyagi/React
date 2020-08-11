import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';

export default class HomeScreen extends React.Component{

   goToGetStartedScreen=()=>
   {
     this.props.navigation.navigate('GetStartedScreen');
   };    
   goToGetLearnBasicsScreen=()=>
   {
     this.props.navigation.navigate('LearnBasicsScreen');
   };
 
  render(){
  
    return (

   <ScrollView>
     <View style={styles.container,{backgroundColor:'#263657'}}>
     <View style={{flexDirection:'row'}}>

     <Text style={styles.t}>React Native</Text>
     <Image source={require("../assets/Logo.png")} style={{height:260,width:260,marginLeft:10}}/>

     </View>

     <Text style={{fontSize:50,color:'white',marginLeft:250}}>Learn Once, Write Anywhere</Text>

     <View style={{flexDirection:'row'}}>

     <TouchableOpacity style={styles.t2} 
      onPress={()=> this.goToGetStartedScreen()}>
       <Text style={{fontSize:25}}>Get Started</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{marginLeft:30,marginTop:43}}
     onPress={()=>this.goToGetLearnBasicsScreen()}>
       <Text style={{color:'white',fontSize:25}}>Learn Basics > </Text>
     </TouchableOpacity>

     </View>
     </View>

     <View style={{flexDirection:'row'}}> 

      <Image source={require("../assets/phones.png")} style={{width:290,height:370}}/>
      <Text style={styles.t3}>Create native apps for Android and iOS using React</Text>
      
      </View>
      </ScrollView>

  );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    
  },
  button:{
    backgroundColor:'#05F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    width:140,
    height:60,
    marginLeft:300,
  },
  t:{
    fontSize:75,
    color:"#05F2F2",
    marginLeft:230,
    marginTop:120,
    marginRight:20
  },
  t2:{
    backgroundColor:"#05F2F2",
    width:120,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:350,
    marginTop:40
  },
  t3:{
    fontWeight:'bold',
    fontSize:30,
    marginLeft:60,
    marginTop:40
  }
});
