// GreetingCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GreetingCard = ({ name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.greeting}>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  greeting: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GreetingCard;
