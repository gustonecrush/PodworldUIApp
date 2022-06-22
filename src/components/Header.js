import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../../assets/images/menu-icon.png")}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../../assets/images/logo-icon.png")}
          style={{ width: 30, height: 30, marginLeft: 15 }}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          source={require("../../assets/images/user.png")}
          style={{ width: 45, height: 45, borderRadius: 100 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 25,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
