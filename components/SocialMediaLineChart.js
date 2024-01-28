// src/SocialMediaLineChart.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Plotly from 'react-native-plotly';
import { smdata } from './smdata';

const SocialMediaLineChart = () => {
  const data = [{
    x: smdata.map(item => item.platform),
    y: smdata.map(item => item.followers),
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Followers Count',
  }];

  const layout = {
    title: 'Social Media Followers Trend',
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

export default SocialMediaLineChart;
