import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Podcasts = ({ imageUri, title, publisher, item }) => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    "Sen-Regular": require("../../assets/fonts/Sen-Regular.ttf"),
    "Sen-Bold": require("../../assets/fonts/Sen-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Podcast", { item : item})}
      >
        {item.menu === "All" ?  <Image source={imageUri} style={styles.imgCover} /> : <Image source={{ uri: imageUri }} style={styles.imgCover} /> }
       
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.title}>
          {title.length > 13
            ? title.slice(0, 12) + "\n" + title.slice(12)
            : title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.publisher}>
          {publisher.length > 12
            ? publisher.slice(0, 12) + "\n" + publisher.slice(12)
            : publisher}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Podcasts;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 20,
  },
  title: {
    fontFamily: "Sen-Bold",
    fontSize: 18,
    color: "#000",
    marginTop: 10,
  },
  publisher: {
    fontFamily: "Sen-Regular",
    color: "#292929",
    fontSize: 15,
    marginTop: 0,
  },
  imgCover: {
    width: 120,
    height: 120,
  },
});
