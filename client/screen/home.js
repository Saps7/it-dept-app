import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { Card } from "react-native-shadow-cards";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";


let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
};

export default class Home extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  login() {
    Actions.login();
  }
  signup() {
    Actions.signup();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <View>
            <ImageBackground
              source={require("../assets/images/homebg.png")}
              style={{ width: "100%", height: "100%", alignItems: "center" }}
            >
              <View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.headtext}>WELCOME</Text>
                </View>
                <View style={styles.card}>
                  <Card style={styles.cardbody}>
                    <TouchableOpacity style={styles.place} onPress={this.login}>
                  <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.place}  onPress={this.signup}> 
                  <Text style={styles.text}>sign up</Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16151f",
    alignContent: "center",
    justifyContent: "center",
  },
  headtext: {
    fontFamily: "Poppins-Bold",
    fontSize: 45,
    marginTop: 60,
    color: "#f4f4f4",
    alignItems: "center",
  },
  card: {
    marginVertical: 200,
  },
  cardbody: {
    margin: 20,
    padding: 20,
    backgroundColor: "#16151f",
    borderRadius: 10,
  },
  place: {
    backgroundColor: "#44404D",
    marginVertical: 20,
    height: 60,
    borderRadius: 50,
    alignItems: "center"
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 22,
    color: "#f4f4f4",
    textTransform: "uppercase",
    marginTop: 15
  }
});
