// FollowerStats.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // or any other icon library you prefer

const FollowerStats = () => {
  const socialMediaData = [
    { platform: "Facebook", number: 5000, icon: "facebook" },
    { platform: "Instagram", number: 10000, icon: "instagram" },
    { platform: "Twitter", number: 2000, icon: "twitter" },
    { platform: "YouTube", number: 7000, icon: "youtube" },
    { platform: "TikTok", number: 2000, icon: "tiktok" },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  const getIconName = (icon) => {
    switch (icon) {
      case "facebook":
        return "facebook-f";
      case "instagram":
        return "instagram";
      case "twitter":
        return "twitter";
      case "youtube":
        return "youtube";
      case "tiktok":
        return "music";
      default:
        return "question";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Media Followers</Text>
      {socialMediaData.map(({ platform, number, icon }, index) => (
        <View key={index} style={styles.platformContainer}>
          <View style={styles.iconContainer}>
            <Icon name={getIconName(icon)} size={24} color="#000" />
          </View>
          <Text style={styles.platformText}>{platform}</Text>
          <View style={styles.dataContainer}>
            <Text style={styles.numberText}>{formatNumber(number)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  platformContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  platformText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberText: {
    fontSize: 18,
  },
});

export default FollowerStats;
