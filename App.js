// App.js

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import FollowerStats from "./components/FollowerStats";
import SocialMediaStats from "./components/SocialMediaStats";
import SocialMediaPieChart from "./components/SocialMediaPieChart";
import SocialMediaFollowersCount from "./components/SocialMediaFollowersCount";
import SocialMediaPercentageBar from "./components/SocialMediaPercentageBar";
import SocialMediaScatterPlot from "./components/SocialMediaScatterPlot";
import SocialMediaBubbleChart from "./components/SocialMediaBubbleChart";
import SocialMediaLineChart from "./components/SocialMediaLineChart";
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={() => (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.rowContainer}>
                <FollowerStats />
                <SocialMediaStats />
              </View>
              <View style={styles.rowContainer}>
                <SocialMediaStats />
                <SocialMediaPieChart />
              </View>
              <View style={styles.rowContainer}>
                <SocialMediaScatterPlot />
                <SocialMediaPercentageBar />
              </View>
              <View style={styles.rowContainer}>
                <SocialMediaBubbleChart/>
                <SocialMediaLineChart/>
              </View>
            </ScrollView>
          )}
          options={{
            title: "Haix",
            headerStyle: {
              backgroundColor: "#3498db",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default App;
