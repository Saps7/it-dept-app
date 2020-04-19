import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import Routes from "./screen/route";
import Home from "./screen/home";
import Login from "./screen/login";
import "react-native-gesture-handler";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default-content"
        hidden={false}
        backgroundColor="#191919"
        translucent={true}
      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16151f",
    flex: 1,
  },
});
