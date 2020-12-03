import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./homepage/homepage";
import Welcome from "./welcomeScreen/welcome";
import SignIn from "./sign/login/signIn";
import SignUp from "./sign/register/signUp";
import Doctors from "./doctor/doctorList/doctors";
import DoctorDetail from "./doctor/doctorDetail/doctorDetail";
import Notification from "./notification/notification";
import Profile from "./profile/profile";

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={props.initialRoute}>
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="Doctors"
          component={Doctors}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
        <Tab.Screen
          name="DoctorDetail"
          component={DoctorDetail}
          options={({ route }) => ({
            tabBarVisible: false,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
