import React from 'react';
import {View, Text, Image,Label,Button, ScrollView, TextInput, StyleSheet, TouchableOpacity, button,handleHomeScreen} from 'react-native';
import * as Svg from 'react-native-svg';

var Loggin = ({navigation}) => {
  const handleHomeScreen =()=>{
    navigation.navigate('Home')
  }
  var handleCuestionarioScreen =()=>{
    navigation.navigate('cuestionario')
    
  }
  
  return (
    
    <ScrollView>
      
    <View style={styles.container}>

      <Text style={{textAlign:'center',marginTop:20,height:30,fontFamily:'poppins-black',fontSize: 40,}}>Bienvenidos a my-app</Text>
       
     
        
        <Image
        source={{
         uri: 'https://th.bing.com/th/id/OIP.a2VVI2FpxBSSFqHeFFCA2gHaHa?pid=ImgDet&w=900&h=900&rs=1',  
        }}
        style={{width: 200, height: 200, borderRadius: 20,marginTop:20,}}
        />
       <View >
        <Text style={styles.inputTitle}>usuario</Text>
        <TextInput style={styles.input} autoCapitalize="none"></TextInput>
       </View>

        <View style={{marginTop: 32}}>
          <Text style={styles.inputTitle}>contraseña</Text> 
         <TextInput style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>
         
        </View>

      

       

        <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text> Entrar</Text>
       </TouchableOpacity>

       <TouchableOpacity  style={{alignSelf: "center", marginTop: 32}} onPress={()=>navigation.navigate("cuestionario")}>
         <Text style={{color: "#414959", fontSize: 20,}}>Nuevo registro?<Text style={{ fontWeight: "500", color: "#E9446A"}}>Inscribirse</Text>
         </Text>
        </TouchableOpacity>

      
       
      
       
        
    </View> 
        
    </ScrollView>
    
   
  );
};
 const styles= StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#f1f1f1',
   alignItems: 'center',
   justifyContent: 'center',
    
  }, 
  color:{
    color:'black',
    fontWeight: 'bold',
    fontSize:45,
    
  },
  button: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:30,
    width: 100,
    backgroundColor: '#FF8C00',
    fontSize:23,
    ScrollBack: 2000,
    
  },

  button_cuestionario: {
    
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      height: '10%',
      width: '30%',
      backgroundColor: '#FF7F50',
      borderRadius: 30,
   
  },
  Input:{
   
    padding: 10,
    paddingStart: 30,
    with: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',


  },
  buttonText:{
  
    height: 40,
    
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop:10,
    with:"auto",
    fontWeight: 'bold',
    justifyContent:'center',
    
  },
  form: {
    marginBottom: "#8A8F9E",
    marginHorizontal: 30 
  },
  inputTitle:{
    color: "#8A8F9E",
    fontSize: 20,
    textTransform: "uppercase",
    
    
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 30,
    color: "#161FED",

    
  }

   
});

export default Loggin;