import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListIcon from "../assets/list.svg";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ListIcon />
      <Text>hello</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
