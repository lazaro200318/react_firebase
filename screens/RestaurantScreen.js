import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, button,handleHomeScreen} from 'react-native';


const Restaurant = ({navigation}) => {
  const handleHomeScreen =()=>{
    navigation.navigate('Home')
  }
  return (
    <ScrollView>
      
      <View style={styles.container}>
      
      <Text style={styles.color}> LOS MEJORES RESTAURANTES </Text>
        
        
        </View> 
       
        <Image
        source={{
         uri: 'https://10619-2.s.cdn12.com/rests/small/h215/108_510594323.jpg',  
        }}
        style={{width: 400, height: 190, borderRadius: 20,marginLeft:10,borderWidth: 2,marginTop:10,}}
        />

        <view style={styles.container2}>
          
        <text style={styles.buttonText}>HASHIRU RESTAURANTE. Este restaurante está recomendado para los amantes de la cocina japonesa. De acuerdo con los comentarios de los visitantes en Google, Hashiru restaurante japonés merece un 4,5.</text>
        </view>

        

        <Image
        source={{
         uri: 'https://www.zonaturistica.com/files/restaurantes/2965/R1_2965.jpg',  
        }}
        style={{width: 400, height: 190, borderRadius: 20,borderWidth: 2,marginLeft:370,marginTop:10,}}
        />

        <view style={styles.container3}>
        <Text style={styles.buttonText}>LA PALAPA DE GONZALO. La particularidad de este restaurante es que ofrece también el servicio de balneario ya que sus palapas se encuentran a la orilla del Río Candelaria. Su especialidad son los mariscos pero hay quien dice que no puedes irte sin probar las costillas de cerdo al carbón, toda una delicia.</Text>
        </view>
        <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text style={styles.Text_Button}>salir</Text>
       </TouchableOpacity>
    </ScrollView>
    
   
  );
};
 const styles= StyleSheet.create({
  container: {
   marginTop: 5,
   alignItems: "center",
   height: 'auto',
   backgroundColor: '#FFFF00',
   borderWidth: 2,
   borderRadius: 20,
  }, 
  container2:{
    height: 190,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'left',
    justifyContent:'left',
    textAlign: 'left',
    borderRadius: 5,
    marginTop:10,
    marginLeft:10,
    width: 500,
    backgroundColor: '#FF8C00',
    fontSize:23,
  },
  container3:{
    height: 190,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'left',
    borderRadius: 5,
    marginTop:10,
    marginLeft:10,
    width: 700,
    backgroundColor: '#FF8C00',
    fontSize:23,
    marginLeft:370,
  },
  color:{
    color:'black',
    fontWeight: 'bold',
    fontSize:45,
    marginTop:10,
   
  },
  button: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:10,
    marginLeft:600,
    width: 150,
    backgroundColor: '#A9A9A9',
    fontSize:23,
  },
  
  buttonText:{
    height: 40,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    width: 100,
    fontSize:23,
    marginLeft:0,
    
  }
});

export default Restaurant;