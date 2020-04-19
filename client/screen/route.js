import React, { Component } from "react";
import { View, Text } from "react-native";
import {Router, Scene, Stack, Actions} from "react-native-router-flux";
import Forgot from "./forgot";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Dashboard from "./dashboard";
import Subject from "./subject";
import Subjectnotice from "./subjectnotices";
import Subjectnotes from "./subjectnotes";
import Subjectdiscussion from "./subjectdiscussion";
import Deptnotice from "./deptnotice";


class Routes extends Component {

  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="home" component={Home} title="Home" initial= {true}/>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="forgot" component={Forgot} title="Forgot" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          <Scene key="subject" component={Subject} title="Subject" />
          <Scene key="subjectnotices" component={Subjectnotice} title="SubjectNotice" />
          <Scene key="subjectnotes" component={Subjectnotes} title="SubjectNotice" />
          <Scene key="subjectdiscussion" component={Subjectdiscussion} title="SubjectNotice" />
          <Scene key="deptnotice" component={Deptnotice} title="DeptNotice" />

        </Stack>
      </Router>
    );
  }
}


export default Routes;
