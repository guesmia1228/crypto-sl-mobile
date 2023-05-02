import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Heading1 from "../components/text/heading1";
import Paragraph from "../components/text/paragraph";
import Button from "../components/button/Button";
import Input from "../components/input/input";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const Login = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/login.jpg")}
        blurRadius={25}
      />

      <View style={styles.container}>
        <View style={styles.info}>
          <Heading1 style={{ textAlign: "center", marginBottom: 10 }}>
            Welcome back
          </Heading1>
          <Paragraph style={{ textAlign: "center" }}>
            Managing and monitoring your payments with ease
          </Paragraph>
        </View>

        <View style={styles.form}>
          <Button gray>
            <View
              style={{
                paddingRight: 10,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/images/google.png")} />
            </View>
            <Paragraph style={{ opacity: 1 }}>Connect with Google</Paragraph>
          </Button>

          <View style={{ marginVertical: 20 }}>
            <Input
              style={{ marginBottom: 10 }}
              placeholder={"Enter your email"}
            />
            <Input placeholder={"Enter your password"} />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginBottom: 25,
              alignItems: "center",
            }}
          >
            <View>
              <BouncyCheckbox
                size={16}
                fillColor="#1595C2"
                unfillColor="#333"
                iconStyle={{ borderColor: "white", borderRadius: 3 }}
                innerIconStyle={{
                  borderWidth: 1,
                  borderRadius: 3,
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              />
            </View>
            <Paragraph style={{ opacity: 1 }}>Remeber me</Paragraph>
          </View>

          <Button>Login</Button>
          <Paragraph style={{ marginTop: 10, textAlign: "center" }}>
            Don’t have account?{" "}
            <Text style={{ color: "#1595C2", fontWeight: 500 }}>Register</Text>
          </Paragraph>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  image: {
    height: 300,
  },

  info: {
    width: 205,
    textAlign: "center",
  },

  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    paddingBottom: 50,
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },

  form: {
    width: "100%",
  },
});
