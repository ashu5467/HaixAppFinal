// src/SocialMediaChart.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Plotly from 'react-native-plotly';
import { socialMediaData } from './data';

const SocialMediaChart = () => {
  const data = [{
    x: socialMediaData.map(item => item.platform),
    y: socialMediaData.map(item => item.followers),
    type: 'bar',
    name: 'Followers Count',
  }];

  const layout = {
    title: 'Social Media Followers Comparison',
    xaxis: { title: 'Social Media Platforms' },
    yaxis: { title: 'Followers Count' },
  };

  return (
    <View style={styles.container}>
      <Plotly data={data} layout={layout} style={styles.plotlyContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plotlyContainer: {
    flex: 1,
    width: '100%',
  },
});

export default SocialMediaChart;
