import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import Drawer from "react-native-drawer";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
  "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.otf"),
  "Poppins-Bold": require("../assets/fonts/Poppins-Bold.otf"),
  "Poppins-Medium": require("../assets/fonts/Poppins-Medium.otf"),
};

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

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
   subject(){
     Actions.subject();
   }

   deptnotice(){
    Actions.deptnotice();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <ScrollView style={[styles.scrollview]}>
            <View>
              <View>
                <Text style={{ marginTop: "2%" }}></Text>
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 25,
                  }}
                >
                  <TouchableOpacity
                    style={{ marginHorizontal: 20, paddingLeft: 5 }}
                  >
                    <Image
                      source={require("../assets/images/hamburgermenu.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </TouchableOpacity>
                  <View style={styles.searchSection}>
                    <TouchableOpacity style={styles.place}>
                      <TextInput
                        style={styles.input}
                        placeholder="search"
                        placeholderTextColor="#44404d"
                      />
                    </TouchableOpacity>
                    <Image
                      source={require("../assets/images/search.png")}
                      style={{
                        width: 30,
                        height: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        right: 25,
                      }}
                    />
                  </View>
                </View>
                <View style={{ marginLeft: 30, marginVertical: 10 }}>
                  <Text style={styles.hello}>Hello, User</Text>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.deptnotice}> 
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Departmental Notice</Text>
                      <Text style={styles.bottom}>H.O.D</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Computer Architecture</Text>
                      <Text style={styles.bottom}>Sukanta Bose</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Formal Language & A.</Text>
                      <Text style={styles.bottom}>Soumen Swarnakar</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>D.A. Algorithms</Text>
                      <Text style={styles.bottom}>Natasha Ghosh</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Discrete Mathematics</Text>
                      <Text style={styles.bottom}>Mitali Goswami</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Biology</Text>
                      <Text style={styles.bottom}>ABCD</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity onPress={this.subject}>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>EVS</Text>
                      <Text style={styles.bottom}>XYZ</Text>
                    </Card>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const drawerStyles = {
  drawer: {
    flex: 1.0,
    backgroundColor: "#3B5998",
  },
  main: {
    flex: 1.0,
    backgroundColor: "white",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#44404d",
    alignContent: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  headtext: {
    fontFamily: "Poppins-Bold",
    fontSize: 45,
    marginTop: 60,
    color: "#f4f4f4",
    alignItems: "center",
  },
  card: {
    marginVertical: 10,
    elevation: 10,
  },
  cardbody: {
    margin: 20,
    padding: 20,
    backgroundColor: "#16151f",
    borderRadius: 10,
    alignItems: "center",
    elevation: 10,
  },
  input: {
    width: 150,
    height: 50,
    borderRadius: 50,
    color: "#f4f4f4",
    alignItems: "center",
    marginVertical: 5,
    position: "relative",
    fontFamily: "Poppins-Light",
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 22,
    color: "#f4f4f4",
    textTransform: "uppercase",
    marginTop: 15,
  },
  hello: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    color: "#f4f4f4",
    marginTop: 15,
  },
  place: {
    backgroundColor: "#16151f",
    marginVertical: 20,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    marginHorizontal: 25,
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
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16151f",
    borderRadius: 50,
    height: 60,
    marginLeft: 40,
  },
  head: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#f4f4f4",
  },
  bottom: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: "#f4f4f4",
  },
});
