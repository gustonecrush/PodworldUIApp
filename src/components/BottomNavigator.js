import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const menus = [
  { id: 1, name: "home" },
  { id: 2, name: "search" },
  { id: 3, name: "bookmark" },
  { id: 4, name: "notifications" },
];

const Icon = ({ name, setActive }) => {
  if (name == "notifications")
    return (
      <TouchableOpacity onPress={() => setActive(name)}>
        <MaterialIcons name={name} size={30} color="#FFD401" />
      </TouchableOpacity>
    );
  return (
    <TouchableOpacity onPress={() => setActive(name)}>
      <Feather name={name} size={27} color="#FFD401" />
    </TouchableOpacity>
  );
};

const BottomNavigator = () => {
  const [active, setActive] = useState("Home");
  return (
    <View style={styles.container}>
      {menus.map((menu, index) => (
        <Icon name={menu.name} key={index} />
      ))}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
