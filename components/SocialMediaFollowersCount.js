// src/SocialMediaFollowersCount.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install additional icon sets
import { smdata } from './smdata';
// import { smdata } from './data';

const SocialMediaFollowersCount = () => {
  return (
    <View style={styles.container}>
      {smdata.map((item, index) => (
        <View key={index} style={styles.socialMediaFollower}>
          <View style={styles.iconContainer}>
            <Icon name={getSocialMediaIconName(item.platform)} size={20} color="#000" />
          </View>
          <Text>{item.platform}</Text>
          <Text style={styles.followerCount}>{item.followers} followers</Text>
        </View>
      ))}
    </View>
  );
};

const getSocialMediaIconName = (platform) => {
  switch (platform.toLowerCase()) {
    case 'facebook':
      return 'facebook';
    case 'twitter':
      return 'twitter';
    case 'instagram':
      return 'instagram';
    case 'linkedin':
      return 'linkedin';
    default:
      return 'question-circle'; 
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialMediaFollower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 5,
  },
  followerCount: {
    marginLeft: 5,
  },
});

export default SocialMediaFollowersCount;
