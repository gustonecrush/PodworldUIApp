import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StartScreen from "./src/screens/StartScreen";
import PodcastScreen from "./src/screens/PodcastScreen";
import MainScreen from "./src/screens/MainScreen";
import TechScreen from "./src/screens/TechScreen";
import NewsScreen from "./src/screens/NewsScreen";
import MusicScreen from "./src/screens/MusicScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import "react-native-gesture-handler";
import CustomDrawer from "./src/components/CustomDrawer";
import { FontAwesome } from "@expo/vector-icons";
import { SEC_TEXT_COLOR } from "./assets/utils";

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false, drawerLabel: () => null }}
        />
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="home" size={20} color={"#FFF"} />
            ),
            drawerItemStyle: { backgroundColor: "#FFD401" },
            drawerLabelStyle: {
              fontFamily: "Sen-Regular",
              color: "#FFF",
              marginLeft: -20,
            },
          }}
        />
        <Drawer.Screen
          name="Tech"
          component={TechScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="apple" size={20} color={"#FFF"} />
            ),
            drawerItemStyle: { backgroundColor: "#FFD401" },
            drawerLabelStyle: {
              fontFamily: "Sen-Regular",
              color: "#FFF",
              marginLeft: -20,
            },
          }}
        />
        <Drawer.Screen
          name="News"
          component={NewsScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="paperclip" size={20} color={"#FFF"} />
            ),
            drawerItemStyle: { backgroundColor: "#FFD401" },
            drawerLabelStyle: {
              fontFamily: "Sen-Regular",
              color: "#FFF",
              marginLeft: -20,
            },
          }}
        />
        <Drawer.Screen
          name="Music"
          component={MusicScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="music" size={20} color={"#FFF"} />
            ),
            drawerItemStyle: { backgroundColor: "#FFD401" },
            drawerLabelStyle: {
              fontFamily: "Sen-Regular",
              color: "#FFF",
              marginLeft: -20,
            },
          }}
        />
        <Drawer.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <FontAwesome name="history" size={20} color={"#FFF"} />
            ),
            drawerItemStyle: { backgroundColor: "#FFD401" },
            drawerLabelStyle: {
              fontFamily: "Sen-Regular",
              color: "#FFF",
              marginLeft: -20,
            },
          }}
        />
        <Drawer.Screen
          name="Podcast"
          component={PodcastScreen}
          options={{ headerShown: false, drawerLabel: () => null }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
