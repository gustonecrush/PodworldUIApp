import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PodcastScreen = ({ route }) => {
  const { item } = route.params;
  const [save, setSave] = useState('');

  const navigation = useNavigation();

  const [loaded] = useFonts({
    "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "Sen-Bold": require("../../assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("../../assets/fonts/Sen-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Feather name="arrow-left" size={30} color="#FFD401" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/images/menu-icon.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoWrapper}>
          {item.menu === "All" ? <Image source={item.imageUri} style={styles.img} /> : <Image source={{ uri: item.imageUri }} style={styles.img} /> }
          

          <View style={styles.podcastInfoWrapper}>
            <TouchableOpacity>
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.publisher}>{item.publisher}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionWrapper}>
          <TouchableOpacity onPress={() => setSave()}>
            <Feather name={"bookmark"} size={30} color={save ? '#FFD401' : '#9C9C9C'} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.categoryText}>{item.category}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="share-2" size={30} color={'#9C9C9C'} />
          </TouchableOpacity>
        </View>
        <View style={styles.playingProgressWrapper}>
          <View style={styles.btnProgress}></View>
        </View>
        <View style={styles.duration}>
          <Text style={styles.textDuration}>9.10</Text>
          <Text style={styles.textDuration}>31.54</Text>
        </View>
        <View style={styles.buttonPlayWrapper}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/backward.png")}
              style={styles.imgBtn}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnWrapper}>
            <Feather name="pause" size={40} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/forward.png")}
              style={styles.imgBtn}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PodcastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  podcastInfoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontFamily: "Sen-Bold",
    fontSize: 25,
    textAlign: "center",
  },
  publisher: {
    fontFamily: "Sen-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  img: {
    borderRadius: 15,
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  infoWrapper: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 10,
  },
  btnWrapper: {
    padding: 20,
    borderRadius: "50%",
    backgroundColor: "#FFD401",
  },
  buttonPlayWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  imgBtn: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  optionWrapper: {
    flexDirection: "row",
    marginHorizontal: 25,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  categoryText: {
    fontFamily: "Sen-Regular",
    fontSize: 18,
    color: "rgba(0,0,0,.59)",
  },
  playingProgressWrapper: {
    marginHorizontal: 25,
    height: 5,
    backgroundColor: '#CFCECE',
    borderRadius: 90,
    marginTop: 35,
  },
  btnProgress: {
    backgroundColor: '#FFD401',
    width: 15,
    height: 15,
    borderRadius: 50,
    position: 'absolute',
    top: -3,
    bottom: 0,
    left: 90,
  },
  duration: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 40,
  },
  textDuration: {
    fontFamily: "Sen-Regular",
    fontSize: 16,
  }
});
