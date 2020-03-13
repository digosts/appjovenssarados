import React from 'react';
import { WebView } from 'react-native-webview';

export default function Cifra() {
  return (
    <WebView
      source={{ uri: 'https://www.cifraclub.com.br/elizeu-alves/sou-casa/' }}
      style={{ marginTop: -30 }}
    />
  );
}
