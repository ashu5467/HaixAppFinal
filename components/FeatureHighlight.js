// FeatureHighlight.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeatureHighlight = ({ feature }) => {
  return (
    <View style={styles.highlight}>
      <Text style={styles.featureText}>{feature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FeatureHighlight;
