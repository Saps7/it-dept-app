import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
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

export default class Login extends Component {
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

  forgot() {
    Actions.forgot();
  }
  signup() {
    Actions.signup();
  }
  dash() {
    Actions.dashboard();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView style={[styles.scrollview]}>
            <View>
              <ImageBackground
                source={require("../assets/images/homebg.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  zIndex: -1,
                }}
              >
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.headtext}>LOGIN</Text>
                  </View>
                  <View style={styles.card}>
                    <Card style={styles.cardbody}>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          placeholder="Email ID"
                          placeholderTextColor="#f4f4f4"
                          keyboardType="email-address"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          secureTextEntry
                          placeholder="Password"
                          placeholderTextColor="#f4f4f4"
                        ></TextInput>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.place2} onPress={this.dash}>
                        <Text style={styles.text}>submit</Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TouchableOpacity onPress={this.forgot}>
                          <Text style={styles.lowertext}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.signup}>
                          <Text style={styles.lowertext}>
                            New User? Register
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Card>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
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
    marginVertical: 120,
  },
  cardbody: {
    margin: 20,
    padding: 20,
    backgroundColor: "#16151f",
    borderRadius: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 50,
    color: "#f4f4f4",
    alignItems: "center",
    marginVertical: 5,
    position: "relative",
    fontFamily: "Poppins-Light",
    marginLeft: 20,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 22,
    color: "#f4f4f4",
    textTransform: "uppercase",
    marginTop: 15,
  },
  place: {
    backgroundColor: "#44404D",
    marginVertical: 20,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
  },
  place2: {
    backgroundColor: "#35353d",
    marginVertical: 30,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
  },
  lowertext: {
    color: "#f4f4f4",
    fontSize: 12,
    fontFamily: "Poppins-Light",
    marginHorizontal: 55,
    marginTop: 30,
  },
  scrollview: {
    backgroundColor: "transparent",
  },
});
