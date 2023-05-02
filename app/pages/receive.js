import { View } from "react-native";
import { Image } from "react-native";
import MediumText from "../components/text/mediumText";
import Paragraph from "../components/text/paragraph";
import Button from "../components/button/Button";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";

const Receive = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Heading2>Receive</Heading2>
      </Header>
      <View
        style={{
          height: "100%",
          postion: "absolute",
          top: -90,
          bottom: 0,
          paddingHorizontal: 30,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderColor: "#333",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/images/qr.png")}
              style={{
                width: "100%",
                aspectRatio: 1,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
            }}
          >
            <View>
              <MediumText>Wallet Address</MediumText>
              <Paragraph style={{ marginTop: 10 }}>
                0x71C7656...b0e21Gs976f
              </Paragraph>
            </View>

            <View style={{ width: 60 }}>
              <Button>Copy</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Receive;
