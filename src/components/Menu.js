import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import All from "./All";
import Tech from "./Tech";
import News from "./News";
import Music from "./Music";

const menus = [
  { id: 1, name: "All" },
  { id: 2, name: "Tech" },
  { id: 3, name: "News" },
  { id: 4, name: "Music" },
];

const Component = ({ name }) => {
  if (name === "All") return <All />;
  if (name === "Tech") return <Tech />;
  if (name === "News") return <News />;
  if (name === "Music") return <Music />;
  return <All />;
};

const MenuList = ({ navigation, menu, active, setActive }) => {
  const [loaded] = useFonts({
    "Nunito-Regular": require("../../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setActive(menu.name)}
        style={
          active === menu.name
            ? styles.menuListWrapper(menu.name)
            : styles.menuListWrapper()
        }
      >
        <Text
          style={
            active === menu.name
              ? styles.menuListText(menu.name)
              : styles.menuListText()
          }
        >
          {menu.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Menu = ({ navigation, menu }) => {
  const [active, setActive] = useState("All");

  return (
    <View>
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {menus.map((menu, index) => (
            <MenuList
              key={index}
              navigation={navigation}
              menu={menu}
              active={active}
              setActive={setActive}
            />
          ))}
        </ScrollView>
      </View>

      {active ? <Component name={active} /> : null}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 40,
    height: 40,
  },
  menuListWrapper: (menu) => ({
    alignItems: "center",
    backgroundColor: menu ? "#FFD401" : "#FAFAFA",
    borderRadius: 60,
    marginRight: 20,
    justifyContent: "center",
  }),
  menuListText: (menu) => ({
    fontFamily: menu ? "Nunito-Bold" : "Nunito-Regular",
    fontSize: 17,
    color: menu ? "#FFF" : "#000",
    paddingVertical: 10,
    paddingHorizontal: 25,
  }),
});
