import { StyleSheet, Text, View } from "react-native";
import Heading1 from "../components/text/heading1";
import Paragraph from "../components/text/paragraph";
import Button from "../components/button/Button";
import { Video, ResizeMode } from 'expo-av';
import * as React from 'react';

const Welcome = ({navigation}) => {
  const video = React.useRef(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 50,
        paddingTop: 100,
        paddingHorizontal: 30,
        backgroundColor: "#1F1F1F",
      }}
    >
      <View style={styles.textWrapper}>
        <Heading1 style={{ textAlign: "center" }}>
          Level-up Business with Nefentus
        </Heading1>
        <Paragraph style={{ textAlign: "center" }}>
          Leave manual payments behind and embrace the future of commerce today.
        </Paragraph>
      </View>

      <View style={{ gap: 15, width: "100%" }}>
        <Button 
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          Create a new account
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }} 
          gray
        >
          I already have one
        </Button>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  textWrapper: { width: 267, marginTop: 30 },
});
