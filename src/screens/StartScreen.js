import React from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const StartScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    "Avocado-Sans-Font-Regular": require("../../assets/fonts/Avocado-Sans-Font-Regular.ttf"),
    "Sen-Regular": require("../../assets/fonts/Sen-Regular.ttf"),
    "Nunito-Medium": require("../../assets/fonts/Nunito-Medium.ttf"),
  });

  if(!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Banner Image */}
      <Image
        source={require("../../assets/images/banner.png")}
        style={styles.banner}
      />

      {/* Banner Text */}
      <View style={styles.bannerTextWrapper}>
        <Text style={styles.bannerTextHeader}>
          Your Favorite Podcasts{"\n"}In Your Pocket
        </Text>
        <Text style={styles.bannerTextDesc}>
          Discover millions of curated{"\n"}podcasts that connect with you
        </Text>
      </View>

      {/* Button Start */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.btnText}>Start Listening</Text>
        <Feather name="arrow-right" color="#FFF" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  logoWrapper: {
    width: "100%",
    height: 25,
    paddingHorizontal: 25,
    marginTop: 30,
  },
  logo: {
    width: "45%",
    height: "100%",
  },
  banner: {
    width: "80%",
    height: 300,
    alignSelf: "center",
    marginTop: 80,
  },
  bannerTextHeader: {
    fontFamily: "Avocado-Sans-Font-Regular",
    fontSize: 35,
    marginVertical: 15,
  },
  bannerTextDesc: {
    fontFamily: "Sen-Regular",
    color: "#808080",
    fontSize: 18,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD401",
    marginTop: 40,
    paddingVertical: 18,
    paddingHorizontal: 70,
    marginHorizontal: 25,
    borderRadius: 90,
  },
  btnText: {
    fontFamily: "Nunito-Medium",
    fontSize: 20,
    color: "#FFF",
    marginRight: 15,
  },
});
