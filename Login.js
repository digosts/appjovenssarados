import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder='Email de acesso'
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder='Senha de acesso'
        secureTextEntry={true}
        returnKeyType="send"
      />

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.buttom}>
        <Text style={styles.buttomText}>Acessar</Text>
      </TouchableOpacity>

      <Text style={styles.textSmall}>Criar conta grátis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:250,
    height:70,
    marginBottom:50,
  },
  input:{
    backgroundColor:'rgba(0,0,0,0.1)',
    marginBottom:10,
    width:'70%',
    height:45,
    padding:5,
    color:'#333'
  },
  buttom:{
    alignItems:'center',
    backgroundColor:'#d90c1e',
    paddingTop:5,
    paddingBottom:5,
    paddingHorizontal:20,
    height:36,
    borderRadius:4,
  },
  buttomText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold'
  },
  textSmall:{
    fontSize:16,
    color:'#999',
    marginTop:15,
  }
});
