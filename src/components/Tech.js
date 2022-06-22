import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ContinueListening from "../../assets/data/ContinueListening";
import CuratedForYou from "../../assets/data/CuratedForYou";
import Industry from "../../assets/data/Industry";
import Startup from "../../assets/data/Startup";
import Card from "./Card";
import Podcasts from "./Podcasts";

const Tech = () => {
  return (
    <View>
      <View style={{ marginHorizontal: 25 }}>
        <Text style={[styles.titleSection]}>Start Up</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Startup.map((item, index) => (
            <Podcasts
              key={index}
              title={item.name}
              imageUri={item.imageUri}
              publisher={item.publisher}
              item={item}
              menu="Tech"
            />
          ))}
        </ScrollView>
      </View>

      <View style={{ marginTop: 30, marginHorizontal: 25, paddingBottom: 50 }}>
        <Text style={[styles.titleSection, { marginBottom: 20 }]}>
          Industry 5.0
        </Text>

        {Industry.map((item, index) => (
          <Card item={item} key={index} menu="Tech" />
        ))}
      </View>
    </View>
  );
};

export default Tech;

const styles = StyleSheet.create({
  titleSection: {
    fontFamily: "Avocado-Sans-Bold",
    fontSize: 23,
    letterSpacing: 1.6,
  },
});
