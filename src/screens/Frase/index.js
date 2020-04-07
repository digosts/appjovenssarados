import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Frase({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Frase Selecionada</Text>
      <Button
        title="Voltar para as frases"
        onPress={() => navigation.navigate('Frases')}
      />
    </View>
  );
}
