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

const menu = [
  { title: "Home" },
  { title: "Wishlist" },
  { title: "About us" },
  { title: "Contact us" },
  { title: "Log out" },
];

export default class Deptnotice extends Component {
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

  subject() {
    Actions.subject();
  }

  subjectnotes() {
    Actions.subjectnotes();
  }

  subjectdiscussion() {
    Actions.subjectdiscussion();
  }

  goBack() {
    Actions.dashboard();
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
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 30,
                        color: "#f4f4f4",
                        marginHorizontal: 80,
                        top: 1,
                      }}
                    >
                      SUBJECT
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Card style={styles.cardbody2}>
                  <View style={{ flexDirection: "row", right : 25}}>
                    <TouchableOpacity
                      onPress={this.goBack}
                      style={{ width: 60 }}
                    >
                      <Image
                        source={require("../assets/images/back.png")}
                        style={{ width: 25, height: 25, marginRight: 10 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.head2}>Deparmental Notice</Text>
                  </View>
                  <Text style={styles.bottom}>- Chandan Banerjee (H.O.D)</Text>
                </Card>
                <View style={styles.card}>
                  <TouchableOpacity>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Notice</Text>
                      <Text style={styles.bottom2}>
                        lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum
                        dolor sit
                      </Text>
                      <Text style={styles.bottom2}>
                        Published : 2nd April, 2pm
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Notice</Text>
                      <Text style={styles.bottom2}>
                        lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum
                        dolor sit
                      </Text>
                      <Text style={styles.bottom2}>
                        Published : 2nd April, 2pm
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </View>
                <View style={styles.card}>
                  <TouchableOpacity>
                    <Card style={styles.cardbody}>
                      <Text style={styles.head}>Notice</Text>
                      <Text style={styles.bottom2}>
                        lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum
                        dolor sit
                      </Text>
                      <Text style={styles.bottom2}>
                        Published : 2nd April, 2pm
                      </Text>
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
  cardbody2: {
    padding: 10,
    marginLeft: -5,
    width: "110%",
    height: 170,
    backgroundColor: "#16151f",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#f4f4f4",
    alignItems: "center",

    bottom: 10,
    marginTop: 8,
  },
  head2: {
    fontSize: 26,
    fontFamily: "Poppins-SemiBold",
    color: "#f4f4f4",
    alignItems: "center",
    right: 11,
    bottom: 20,
    marginTop: 12,
  },
  bottom: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#f4f4f4",
    right: 11,
    marginTop: 10,

  },
  bottom2: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#f4f4f4",

    marginTop: 5,
    textAlign: "center",
  },
  tabsactive: {
    color: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomStartRadius: 1,
    borderBottomColor: "#f4f4f4",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
  },
  tabs: {
    color: "#44404d",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
  },
});
