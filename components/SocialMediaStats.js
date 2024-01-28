// SocialMediaStats.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';

const SocialMediaStats = () => {
  const socialMediaData = [
    { platform: 'Facebook', percentage: 30 },
    { platform: 'Instagram', percentage: 25 },
    { platform: 'Twitter', percentage: 20 },
    { platform: 'YouTube', percentage: 70 },
    { platform: 'TikTok', percentage: 20 },
  ];

  const barChartHeight = 20;
  const barChartWidth = Dimensions.get('window').width * 0.8;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Stats</Text>
      {socialMediaData.map(({ platform, percentage }, index) => (
        <View key={index} style={styles.platformContainer}>
          <Text style={styles.platformText}>{platform}</Text>
          <View style={styles.barContainer}>
            <Svg height={barChartHeight} width={barChartWidth}>
              <Rect
                width={(percentage / 100) * barChartWidth}
                height={barChartHeight}
                fill="#3498db" // Set the bar color
              />
            </Svg>
          </View>
          <SvgText
            x={(percentage / 100) * barChartWidth + 5}
            y={barChartHeight / 2 + 5}
            fontSize={12}
            fill="#fff" // Set the text color
          >
            {percentage}%
          </SvgText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'Bubble',
  },
  platformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  platformText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});

export default SocialMediaStats;
