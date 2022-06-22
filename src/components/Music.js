import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ContinueListening from "../../assets/data/ContinueListening";
import CuratedForYou from "../../assets/data/CuratedForYou";
import Card from "./Card";
import Podcasts from "./Podcasts";

const Music = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 25 }}>
        <Text style={[styles.titleSection]}>Music of The Day</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ContinueListening.map((item, index) => (
            <Podcasts
              key={index}
              title={item.name}
              imageUri={item.imageUri}
              publisher={item.publisher}
              item={item}
              menu="All"
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: 30, marginHorizontal: 25, paddingBottom: 50 }}>
        <Text style={[styles.titleSection, { marginBottom: 20 }]}>
          Recommend for Summer
        </Text>

        {CuratedForYou.map((item, index) => (
          <Card item={item} key={index} menu="All" />
        ))}
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  titleSection: {
    fontFamily: "Avocado-Sans-Bold",
    fontSize: 23,
    letterSpacing: 1.6,
  },
});
