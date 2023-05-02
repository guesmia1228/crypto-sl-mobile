import { View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import Paragraph from "../components/text/paragraph";
import { Text } from "react-native";
import Numpad from "./../components/numpad/numpad";
import Button from "./../components/button/Button";
import { useState } from "react";

const EnterAmount = () => {
  const [price, setPrice] = useState(0);

  const getPrice = (digit) => {
    let newDigit = digit === "del" ? "" : digit;

    if (digit === "del") {
      setPrice((prev) => prev.slice(0, -1));
    } else {
      if (price.length > 6) return;
      setPrice((prev) => prev + "" + digit);
    }
  };

  return (
    <View style={{ flex: 1, paddingBottom: 50 }}>
      <Header>
        <Heading2>Enter Amount</Heading2>
      </Header>

      <View style={{ justifyContent: "space-between", flex: 1 }}>
        <View style={{ alignItems: "center", paddingTop: 75 }}>
          <Paragraph>Current amount</Paragraph>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 500,
              color: "white",
              paddingVertical: 5,
            }}
          >
            ${price.length === 0 ? 0 : price}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Paragraph>Payment method:</Paragraph>
            <Paragraph style={{ opacity: 1, marginLeft: 5 }}>Bitcoin</Paragraph>
          </View>
        </View>

        <View>
          <Numpad onPress={getPrice} />

          <View style={{ marginHorizontal: 30 }}>
            <Button>Confirm Payment</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EnterAmount;
