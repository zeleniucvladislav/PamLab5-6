import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  const routeIndex = useNavigationState((state) => state.index);
  const [state, setState] = useState([
    {
      index: 1,
      icon: <Feather name="home" size={22} color="#37474E" />,
      iconActive: <Feather name="home" size={22} color="#07DA5F" />,
      text: "Home",
      path: "Home",
    },
    {
      index: 2,
      icon: (
        <Ionicons name="ios-notifications-outline" size={22} color="#37474E" />
      ),
      iconActive: (
        <Ionicons name="ios-notifications-outline" size={22} color="#07DA5F" />
      ),
      text: "Notification",
      path: "Notification",
    },
    {
      index: 3,
      icon: <Ionicons name="ios-add" size={25} color="white" />,
      text: "Add",
      path: "Home",
    },
    {
      index: 4,
      icon: <Feather name="calendar" size={22} color="#37474E" />,
      iconActive: <Feather name="calendar" size={22} color="#07DA5F" />,
      text: "Schedule",
      path: "Doctors",
    },
    {
      index: 5,
      icon: <MaterialIcons name="person-outline" size={22} color="#37474E" />,
      iconActive: (
        <MaterialIcons name="person-outline" size={22} color="#07DA5F" />
      ),
      text: "Profile",
      path: "Profile",
    },
  ]);

  const renderItem = ({ item }) => {
    if (routeIndex === item.index) {
      return (
        <TouchableOpacity
          style={styles.navOption}
          onPress={() => navigation.navigate(`${item.path}`)}
        >
          {item.iconActive}
          <Text style={styles.navTextActive}>{item.text}</Text>
        </TouchableOpacity>
      );
    } else if (item.index === 3) {
      return (
        <TouchableOpacity
          style={styles.addOption}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="ios-add" size={25} color="white" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.navOption}
          onPress={() => navigation.navigate(`${item.path}`)}
        >
          {item.icon}
          <Text style={styles.navText}>{item.text}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.navWrapper}>
      <FlatList
        contentContainerStyle={styles.nav}
        data={state}
        renderItem={renderItem}
        keyExtractor={(item) => item.index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 55,
    borderTopWidth: 0.5,
    borderTopColor: "#37474E",
    backgroundColor: "#FFFFFF",
  },
  navOption: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#37474E",
  },
  navTextActive: {
    color: "#07DA5F",
  },
  addOption: {
    backgroundColor: "#07DA5F",
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});
