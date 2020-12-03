import React, { useState, useEffect } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import Navigation from "./components/navigation";
import * as SecureStore from "expo-secure-store";

export default function App() {
  const [initialRoute, setRoute] = useState("Welcome");
  useEffect(() => {
    async function fetchToken() {
      const token = await SecureStore.getItemAsync("token");
      token !== null ? setRoute("Home") : setRoute("Welcome");
      console.log(JSON.parse(token));
    }
    fetchToken();
  }, []);
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <DismissKeyboard>
      <Navigation initialRoute={initialRoute} />
    </DismissKeyboard>
  );
}
