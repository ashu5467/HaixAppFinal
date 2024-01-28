// src/SocialMedia3DScatterPlot.js
import React from 'react';
import { View } from 'react-native';
import Plotly from 'react-native-plotly';
import { socialMediaData } from './data';

const SocialMedia3DScatterPlot = () => {
  const data = [{
    x: socialMediaData.map(item => item.platform),
    y: socialMediaData.map(item => item.followers),
    z: socialMediaData.map(item => Math.random() * 100), // Adding a random third dimension for demonstration
    mode: 'markers',
    type: 'scatter3d',
  }];

  const layout = {
    title: 'Social Media Followers 3D Scatter Plot',
    scene: {
      xaxis: { title: 'Social Media Platforms' },
      yaxis: { title: 'Followers Count' },
      zaxis: { title: 'Random Dimension' },
    },
  };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} />
    </View>
  );
};

export default SocialMedia3DScatterPlot;
