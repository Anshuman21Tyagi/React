import * as React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';

export default class HomeScreen extends React.Component{

   goToGetHomeScreen=()=>
   {
     this.props.navigation.navigate('HomeScreen');
   };    
 
  render(){
  
    return (

   <ScrollView>
       <Text style={styles.t}>Learn The Basics</Text>
       <Text style={styles.t2}>React Native is like React, but it uses native components instead of web components as building</Text> 
       <Text style={styles.t2}>blocks. So to understand the basic structure of a React Native app, you need to understand some</Text>
       <Text style={styles.t2}>of the basic React concepts, like JSX, components, state, and props. If you already know React,</Text>
       <Text style={styles.t2}>you still need to learn some React-Native-specific stuff, like the native components. This tutorial</Text>
       <Text style={styles.t2}>is aimed at all audiences, whether you have React experience or not.</Text>
       <Text style={styles.t4}>Let's do this thing.</Text>

       <Text style={styles.t}>Hello World</Text>
       <Text style={styles.t2}>In accordance with the ancient traditions of our people, we must first build an app that does nothing</Text>
       <Text style={styles.t2}>except say "Hello World!", Here it is:</Text>

       <Image source={require("../assets/Example.png")} 
       style={{width:1060,height:800,marginLeft:30,marginTop:20}}/>  

       <Text style={styles.t2}>If you are feeling curious, you can play around with sample code directly in the web simulators. You can</Text>
       <Text style={styles.t2}>also paste it into your App.js file to create a real app on your local machine.</Text>
       
       <Text style={styles.t}>What's going on here?</Text>
       <Text style={styles.t2}>1.First of all, we need to import React to be able to use JSX, which will then be transformed to the</Text>
       <Text style={styles.t3}>native components of each platform.</Text>
       <Text style={styles.t2}>2.On line 2, we import the Text and View components from react-native</Text>
       <Text style={styles.t4}>Then we find the HelloWorldApp function, which is a functional component and behaves in the same</Text>
       <Text style={styles.t5}>way as in React for the web. This function returns a View component with some styles and a Text as </Text>
       <Text style={styles.t5}>its child.</Text>

       <Text style={styles.t4}>The Text component allows us to render a text, while the View component renders a container.This</Text>
       <Text style={styles.t5}>container has several styles applied, let's analyze what each one is doing.</Text>

       <Text style={styles.t4}>The first style that we find is flex: 1, the flex prop will define how your items are going to "fill" over the</Text>
       <Text style={styles.t5}>available space along your main axis. Since we only have one container, it will take all the available</Text>
       <Text style={styles.t5}>space of the parent component. In this case, it is the only component, so it will take all the available screen space.</Text>

       <Text style={styles.t4}>The following style is justifyContent: "center". This align children of a container in the center of the</Text>
       <Text style={styles.t5}>container's main axis and finally we have alignItems: "center", which align children of a container in the center of the container's cross axis.</Text>

       <Text style={styles.t4}>Some of the things in here might not look like JavaScript to you. Don't panic. This is the future.</Text>

       <Text style={styles.t4}>First of all, ES2015 (also known as ES6) is a set of improvements to JavaScript that is now part of the</Text>
       <Text style={styles.t5}>official standard, but not yet supported by all browsers, so often it isn't used yet in web development. React Native ships with ES2015 support, so you can use this stuff without worrying about compatibility. import, from, class, and extends in the example above are all ES2015 features. If you aren't familiar with ES2015, you can probably pick it up by reading through sample code like this tutorial has. If you want, this page has a good overview of ES2015 features.</Text>

       <Text style={styles.t4}>The other unusual thing in this code example is the View and the Text tag containing Hello world!.This is</Text>
       <Text style={styles.t5}>JSX - a syntax for embedding XML within JavaScript. Many frameworks use a specialized templating language which lets you embed code inside markup language. In React, this is reversed. JSX lets you write your markup language inside code. It looks like HTML on the web, except instead of web things like Div tag or Span tag, you use React components. In this case, Text tag is a Core Component that displays some text and View is like the Div tag or Span tag.</Text>

        <TouchableOpacity style={styles.button} onPress={()=>this.goToGetHomeScreen()}>
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
    marginTop:50
  },
  t3:{
    fontSize:25,
    marginLeft:65,
    marginTop:6
  },
  t4:{
    fontSize:25,
    marginLeft:25,
    marginTop:25
  },
  t5:{
    fontSize:25,
    marginLeft:25,
    marginTop:2
  }
})

