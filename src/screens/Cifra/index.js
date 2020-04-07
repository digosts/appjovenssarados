import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// import { Container } from './styles';

export default function Cifra({navigation}) {
  return (
    <>
      <View></View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cifra</Text>
        <Button
          title="Voltar para a Cifras"
          onPress={() => navigation.navigate('Cifras')}
        />
      </View>
    </>
  );
}
