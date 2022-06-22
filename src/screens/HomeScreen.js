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

const HomeScreen = () => {
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

        <View style={{ marginHorizontal: 25 }}>
          <Text style={[styles.titleSection]}>Continue Listening</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {ContinueListening.map((item, index) => (
              <Podcasts
                key={index}
                title={item.name}
                imageUri={item.imageUri}
                publisher={item.publisher}
                item={item}
              />
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 30, marginHorizontal: 25, paddingBottom: 50 }}>
          <Text style={[styles.titleSection, { marginBottom: 20 }]}>
            Curated For You
          </Text>

          {CuratedForYou.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </View>
      </ScrollView>

      <BottomNavigator />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
