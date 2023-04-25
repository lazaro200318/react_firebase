import React from 'react';
import { View, Text, Button,TouchableOpacity,handsitiosPress, StyleSheet,Image,source, Dimensions } from "react-native";

var Home =({navigation}) =>{
  var handleLogginScreen =()=>{
    navigation.navigate('Loggin')
    
  }
  
  var handlesitiosScreen =()=>{
    navigation.navigate('sitios')
    
  }
  var handleRestaurantScreen =()=>{
    navigation.navigate('Restaurant')
    
  }
 
 
    return (
      
      <view style={styles.container}>
       
        <Text style={styles.color}> BIENVENIDO </Text>
        <Image
        source={{
         uri: 'https://th.bing.com/th?id=OIP.1vApLq-sv2Z-5QZY0yNDGwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',  
        }}
        style={{width: 600, height: 360, borderRadius: 50,marginLeft:300,marginTop:47,}}
        />
        
        <Text style={styles.Text_home}>Te decimos las 2 mejores razones para visitar candelaria </Text>
        

       <TouchableOpacity style={styles.button2} onPress={handlesitiosScreen}>
         <Text style={styles.buttonText}>LUGARES </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button3} onPress={handleRestaurantScreen}>
         <Text style={styles.buttonText}>RESTAURANTES</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={handleLogginScreen}>
        <Text style={styles.buttonText}>SALIR </Text>
       </TouchableOpacity>

       
        

      </view>
      
      
      
     
    );
};

export default Home;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFA500',
    scrollBack: 2000,
    marginTop:40,
    
 }, 
 button:{
  height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:40,
    marginLeft:60,
    width: 100,
    backgroundColor: '#00FF00',
    fontSize:23,
    fontWeight: 'bold',
 },
 button2:{
  height: 60,
  borderColor: 'grey',
  borderWidth: 2,
  alignItems: 'center',
  justifyContent:'center',
  textAlign: 'center',
  borderRadius: 5,
  marginTop:10,
  marginLeft:520,
  width: 200,
  backgroundColor: '#00CED1',
  fontSize:23,
 },
 button3:{
  height: 60,
  borderColor: 'grey',
  borderWidth: 2,
  alignItems: 'center',
  justifyContent:'center',
  textAlign: 'center',
  borderRadius: 5,
  marginTop:10,
  marginLeft:520,
  width: 200,
  backgroundColor: '#00CED1',
  fontSize:23,
 },
 Text_home:{
  height: 40,
  alignItems: 'center',
  justifyContent:'center',
  textAlign: 'center',
  width: 100,
  fontSize:23,
  marginLeft:0,
  marginLeft:340,
 },
 buttonText:{
  
  height: 40,
  
  fontSize: 19,
  textAlign: 'center',
  alignItems: 'center',
  borderRadius: 5,
  marginTop:10,
  with:"auto",
  fontWeight: 'bold',
  justifyContent:'center',
  
 },
 color:{
    backgroundColor: 'green',
    color: '#fff',
    width: 200,
    height: 80,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '37%',
    padding: "3%",
    fontSize:  30,
    marginTop: '20%',
    flexDirection: 'column',
    fontFamily: 'verdana',
    
 },
  body: {
    flex: 1,
    backgroundColor: '#009387'
  }
})