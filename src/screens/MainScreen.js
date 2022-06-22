import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Podcasts from "../components/Podcasts";
import ContinueListening from "../../assets/data/ContinueListening";
import CuratedForYou from "../../assets/data/CuratedForYou";
import Card from "../components/Card";
import BottomNavigator from "../components/BottomNavigator";
import All from "../components/All";

const MainScreen = () => {
  const [loaded] = useFonts({
    "Avocado-Sans-Bold": require("../../assets/fonts/Avocado-Sans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden></StatusBar>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Header />
        <Menu />
      </ScrollView>
      <BottomNavigator />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  titleSection: {
    fontFamily: "Avocado-Sans-Bold",
    fontSize: 23,
    letterSpacing: 1.6,
  },
});
