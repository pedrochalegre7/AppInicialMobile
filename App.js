import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
/* import react from './assets/react.png' */

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Pedro Sérgio Chalegre da Silva</Text>
      <Image source={require('./assets/react.png')}/>
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
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  }
});
