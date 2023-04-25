import React from 'react';
import {View, Text, Image, ScrollView,text, TextInput, StyleSheet, TouchableOpacity, button,handleHomeScreen} from 'react-native';


const sitios = ({navigation}) => {
  const handleHomeScreen =()=>{
    navigation.navigate('Home')
  }
  return (
    <ScrollView>
      <View style={styles.container_0}>
      <View style={styles.container}>
      
       <Text style={styles.color}> LUGARES MAS POPULARES EN CANDELARIA </Text>
       
        </View> 
       
        <Image
        source={{
         uri: 'https://campeche.travel/wp-content/uploads/2020/03/Salto-Grande-Candelaria-02.jpg',  
        }}
        style={{width: 400, height: 190, borderRadius: 20,marginLeft:10,borderWidth: 2,marginTop:10,}}
        />

        <view style={styles.container2}>
          
        <text style={styles.buttonText}>SATO GRANDE.
        Se pueden realizar actividades como el senderismo, nado en las albercas naturales que forman el río Candelaria, así como paseos donde observaras las distintas especies de plantas y animales de la región.</text>
        </view>

        

        <Image
        source={{
         uri: 'https://sic.cultura.gob.mx/imagenes_cache/zona_arqueologica_144_g_70751.png',  
        }}
        style={{width: 400, height: 190, borderRadius: 20,borderWidth: 2,marginLeft:550,marginTop:10,}}
        />

        <view style={styles.container3}>
        <Text style={styles.buttonText}>El sitio de El Tigre es conocido desde los tiempos de la Conquista como Itzamkanac; puerto fluvial de gran importancia y ruta natural entre el Petén y la costa campechana. El Tigre se extiende sobre un lomerío natural en la margen izquierda del Río Candelaria, abarcando una superficie aproximada de 5 km2</Text>
        </view>

        <TouchableOpacity style={styles.button} onPress={handleHomeScreen}>
        <Text>SALIR</Text>
       </TouchableOpacity>
       </View>
    </ScrollView>
    
   
  );
};
 const styles= StyleSheet.create({
  container: {
   marginTop: 5,
   alignItems: "center",
   height: 'auto',
   backgroundColor: '#00CED1',
   borderRadius: 20,
   marginTop:10,
   fontSize:23,
   borderWidth: 2,
   
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
    backgroundColor: '#C0C0C0',
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
    backgroundColor: '#C0C0C0',
    fontSize:23,
    marginLeft:370,
  },
  
  container_0:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFA500',
    scrollBack: 2000,
    marginTop:47,
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
    marginTop:10,
    marginLeft:600,
    width: 100,
    backgroundColor: '#00CED1',
    fontSize:23,
    marginLeft:400,
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

export default sitios;