import React from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity,} from 'react-native';
import {useState} from 'react';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import appfirebase from '../credenciales';

const db = getFirestore(appfirebase)
 
const cuestionarioScreen =() => {
  
  const handleLogginScreen =()=>{
    navigation.navigate('Loggin')
  }
  const handleHomeScreen =()=>{
    navigation.navigate('Home')
    
  }
 
  const initialState = {
    nombre:'',
    apellido: '',
    email: '',
    localidad: '',
    telefono: ''

  }
 const [state, setState] = useState(initialState)

 const hanleChangeText =(value, name)=>{
  setState({...state, [name]:value})

 } 

 const savenombre = async()=>{
   try{
    await addDoc(collection(db, 'nombre'),{
      ...state
 
    })
    Alert.alert('alerta','guardado')
    props.navigation.navigate('LogginScreen')
  }
  catch{
    console.error(error)
  }
  
 }

  

  return (
   
   
    <View style={styles.container}>

   <TouchableOpacity  style={styles.button} onPress={handleLogginScreen}>
      <Text style={styles.buttonText}>Formulario de contacto</Text>
    </TouchableOpacity>

   
   
   <TextInput style={styles.input0} placeholder='nombre' onChangeText={(value)=>hanleChangeText(value,'nombre')} value={state.nombre}/>
   <TextInput style={styles.input0} placeholder='apellido' onChangeText={(value)=>hanleChangeText(value,'apellido')} value={state.apellido}/>
    <TextInput style={styles.input0} placeholder='email' onChangeText={(value)=>hanleChangeText(value,'email')} value={state.email}/>
    <TextInput style={styles.input0} placeholder='localidad' onChangeText={(value)=>hanleChangeText(value,'localidad')} value={state.localidad}/>
    <TextInput style={styles.input0} placeholder='telefono' onChangeText={(value)=>hanleChangeText(value,'telefono')} value={state.telefono}/>
    
    <View>
      <Button title= 'Guardar Información' onPress={savenombre}/>
    </View>

    
    

    
   </View>
  )
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
     
   }, 
  
  formulario_1: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
  button_entrar: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 5,
    marginTop:10,
    width: 100,
    backgroundColor: '#FF8C00',
    fontSize:23,
    
   
  },
  button: {
    
    backgroundColor: '#F4A460',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '68%',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    width: '20%',
  },
  input0: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '60%',
    color: 'grey'
  },
  
})

export default cuestionarioScreen;
