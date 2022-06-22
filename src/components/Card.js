import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Card = ({ item, menu }) => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    "Sen-Bold": require("../../assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("../../assets/fonts/Sen-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Podcast", { item: item })}
    >
      {menu === 'All' ? <Image source={item.imageUri} style={{ width: 120, height: 120 }} /> : <Image source={{ uri: item.imageUri }} style={{ width: 120, height: 120 }} />}
      
      <View style={styles.infoWrapper}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.publisher}>{item.publisher}</Text>
          <View>
            <View></View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/images/rating.png")}
                  style={{ height: 10, width: 50 }}
                />
                <Text
                  style={{
                    fontFamily: "Sen-Regular",
                    fontSize: 11,
                    color: "#5F5F5F",
                    marginLeft: 8,
                  }}
                >
                  {item.rating}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.buyers}>
                  <Image
                    source={require("../../assets/images/user.png")}
                    style={styles.buyerImg}
                  />
                  <Image
                    source={{
                      uri: "https://i.scdn.co/image/ab67616d0000b27353f6fa0d2589c6a7174f4b81",
                    }}
                    style={[styles.buyerImg, styles.buyerZIndex]}
                  />
                  <Image
                    source={{
                      uri: "https://i.scdn.co/image/ab67616d0000b2737815a98b22b6914a45263190",
                    }}
                    style={[styles.buyerImg, styles.buyerZIndex]}
                  />
                  <Image
                    source={{
                      uri: "https://i.scdn.co/image/ab6761610000e5eb05cead99b1a81b82a9a42838",
                    }}
                    style={[styles.buyerImg, styles.buyerZIndex]}
                  />
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrxa_7BJaBZd39Hooz1tYCSd9UmnoZFv3vBbjvXV6K8pttDuGr_It2q-A4LuXgYLiN4o&usqp=CAU",
                    }}
                    style={[styles.buyerImg, styles.buyerZIndex]}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: "Sen-Regular",
                    fontSize: 11,
                    color: "#5F5F5F",
                    marginLeft: -4,
                  }}
                >
                  {item.listens}k+ listens
                </Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnWrapper}>
          <MaterialCommunityIcons name="play" size={25} color={"#FFF"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.3,
    marginBottom: 20,
    borderRadius: 20,
  },
  btnWrapper: {
    backgroundColor: "#FFD401",
    borderRadius: "50%",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  infoWrapper: {
    paddingVertical: 10,
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  title: {
    fontFamily: "Sen-Bold",
    fontSize: 19,
    marginBottom: 2,
  },
  publisher: {
    fontFamily: "Sen-Regular",
    fontSize: 14,
    marginBottom: 5,
    color: "#5F5F5F",
  },
  buyers: {
    flexDirection: "row",
    marginTop: 5,
    marginRight: 10,
  },
  buyerImg: { width: 20, height: 20, borderRadius: 100 },
  buyerZIndex: {
    marginLeft: -8,
    zIndex: 3,
  },
});
