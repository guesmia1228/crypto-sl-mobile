import { StyleSheet, View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "./../components/text/heading2";
import Paragraph from "../components/text/paragraph";
import Button from "../components/button/Button";
import Numpad from "../components/numpad/numpad";
import { useState } from "react";
import Heading3 from "../components/text/heading3";

const Secure = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const getCode = (digit) => {
    let index = -1;

    let newDigit = digit === "del" ? "" : digit;

    console.log(digit);

    if (digit === "del") {
      for (let i = code.length - 1; i >= 0; i--) {
        if (code[i] !== "") {
          index = i;
          break;
        }
      }
    } else {
      for (let i = 0; i < code.length; i++) {
        if (code[i] === "") {
          index = i;
          break;
        }
      }
    }

    if (index === -1) return;

    setCode((prev) => {
      prev[index] = newDigit;

      return [...prev];
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Heading2>Secure</Heading2>
      </Header>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 45,
          marginTop: 30,
          marginBottom: 50,
          justifyContent: "space-between",
        }}
      >
        <Paragraph style={{ opacity: 1, textAlign: "center" }}>
          Type a 4-digit code that you will use every time when you enter the
          application.
        </Paragraph>

        <View>
          <View style={styles.row}>
            {code.map((item, index) => (
              <View style={styles.box} key={index}>
                <Heading3 style={{ lineHeight: 16 }}>{item}</Heading3>
              </View>
            ))}
          </View>

          <Paragraph style={{ marginTop: 10, textAlign: "center" }}>
            Please write your code in a safe place.
          </Paragraph>
        </View>

        <View>
          <Numpad onPress={getCode} />
          <Button>Confirm</Button>
        </View>
      </View>
    </View>
  );
};

export default Secure;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  box: {
    width: "23%",
    aspectRatio: 1,
    backgroundColor: "#333333",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
