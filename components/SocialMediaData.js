// SocialMediaData.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SocialMediaComparisonChart from './SocialMediaComparisonChart';

const SocialMediaData = () => {
  // Dummy data for social media followers percentage comparison
  const socialMediaFollowersPercentage = {
    Facebook: 30,
    Twitter: 25,
    Instagram: 40,
    LinkedIn: 15,
  };

  // Dummy data for total followers count
  const socialMediaFollowersCount = {
    Facebook: 1500,
    Twitter: 1200,
    Instagram: 2000,
    LinkedIn: 800,
  };

  return (
    <View style={styles.container}>
      {/* Social Media Percentage Comparison Chart Component */}
      <SocialMediaComparisonChart followersPercentage={socialMediaFollowersPercentage} />

      {/* You can use the total followers count data elsewhere in your app */}
      {/* For example, you might display these numbers individually or in a different chart */}
      <View style={styles.totalFollowersContainer}>
        <Text>Total Followers Count</Text>
        <Text>Facebook: {socialMediaFollowersCount.Facebook}</Text>
        <Text>Twitter: {socialMediaFollowersCount.Twitter}</Text>
        <Text>Instagram: {socialMediaFollowersCount.Instagram}</Text>
        <Text>LinkedIn: {socialMediaFollowersCount.LinkedIn}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalFollowersContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
});

export default SocialMediaData;
