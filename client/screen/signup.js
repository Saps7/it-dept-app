import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Picker,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-material-dropdown";
import { Actions } from "react-native-router-flux";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
};

export default class Signup extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  constructor() {
    super();
    this.state = {
      PickerValue: "",
    };
  }

  clickme = () => {
    var data = this.state.PickerValue;
    if (data == "") {
      alert("Please Select your Batch");
    }
  };

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
          <ScrollView style={[styles.scrollview]}>
            <View>
              <ImageBackground
                source={require("../assets/images/homebg.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  zIndex: -1,
                  marginTop: -30,
                }}
              >
                <View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={styles.headtext}>SIGN UP</Text>
                  </View>
                  <View style={styles.card}>
                    <Card style={styles.cardbody}>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          placeholder="Name"
                          placeholderTextColor="#f4f4f4"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          placeholder="Email ID"
                          placeholderTextColor="#f4f4f4"
                          keyboardType="email-address"
                        />
                      </TouchableOpacity>
                      <View style={styles.place}>
                        <Picker
                          style={styles.picker}
                          textStyle={{ fontFamily: "Poppins-Light" }}
                          itemStyle={{ fontFamily: "Poppins-Light" }}
                          selectedValue={this.state.PickerValue}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({ PickerValue: itemValue })
                          }
                        >
                          <Picker.Item label="Batch" value="" />
                          <Picker.Item
                            label="2nd Year Group 1"
                            value="2nd Year Group 1"
                          />
                          <Picker.Item
                            label="2nd Year Group 2"
                            value="2nd Year Group 2"
                          />
                          <Picker.Item
                            label="3rd Year Group 1"
                            value="3rd Year Group 1"
                          />
                          <Picker.Item
                            label="3rd Year Group 2"
                            value="3rd Year Group 2"
                          />
                          <Picker.Item
                            label="4th Year Group 1"
                            value="4th Year Group 1"
                          />
                          <Picker.Item
                            label="4th Year Group 2"
                            value="4th Year Group 2"
                          />
                        </Picker>
                      </View>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          secureTextEntry
                          placeholder="Password"
                          placeholderTextColor="#f4f4f4"
                        ></TextInput>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.place}>
                        <TextInput
                          style={styles.input}
                          secureTextEntry
                          placeholder="Confirm Password"
                          placeholderTextColor="#f4f4f4"
                        ></TextInput>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.place2}
                        onPress={this.clickme}
                      >
                        <Text style={styles.text}>submit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={{alignItems: "center"}} onPress={this.login}>
                        <Text style={styles.lowertext}>Already a User?   Login</Text>
                      </TouchableOpacity>
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
    backgroundColor: "#44404d",
    alignContent: "center",
    justifyContent: "center",
  },
  headtext: {
    fontFamily: "Poppins-Bold",
    fontSize: 45,
    marginTop: 100,
    position: "relative",
    color: "#f4f4f4",
    alignItems: "center",
  },
  card: {
    marginTop: 80,
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
  picker: {
    width: "85%",
    color: "#f4f4f4",
    fontFamily: "Poppins-Light",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});
