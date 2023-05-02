import { View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import { Image } from "react-native";
import Paragraph from "../components/text/paragraph";
import Heading1 from "../components/text/heading1";
import MediumText from "../components/text/mediumText";
import SmallText from "../components/text/smallText";
import Button from "../components/button/Button";

const Report = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Heading2>Report</Heading2>
      </Header>

      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              marginVertical: 50,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/success.png")}
              style={{ height: 40, width: 40, marginBottom: 10 }}
            />
            <Paragraph style={{ marginBottom: 5 }}>Successfully!</Paragraph>
            <Heading1>$35,500</Heading1>
          </View>

          <View
            style={{
              marginHorizontal: 30,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
              borderRadius: 10,
              backgroundColor: "#2B2B2B",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/images/avatar.jpg")}
                style={{ height: 40, width: 40, borderRadius: "50%" }}
              />

              <View style={{ marginLeft: 10 }}>
                <Paragraph style={{ opacity: 1 }}>Ruth Sharp</Paragraph>
                <MediumText style={{ opacity: 0.6 }}>
                  ruth.sharp99@gmail.com
                </MediumText>
              </View>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 30,
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 10,
              padding: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#333",
                borderBottomWidth: 1,
                paddingBottom: 15,
                marginBottom: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/images/details.png")}
                  style={{ width: 14, aspectRatio: 1, marginRight: 7 }}
                  resizeMode="contain"
                />
                <Paragraph>Payment details</Paragraph>
              </View>
              <Paragraph>#23491</Paragraph>
            </View>

            <Paragraph style={{ opacity: 1, marginBottom: 30 }}>
              Quisque porttitor, purus eget finibus rhoncus, neque velit
              scelerisque odio, eu iaculis turpis arcu sed dui.
            </Paragraph>

            <SmallText style={{ textAlign: "right" }}>17 Jan 2023</SmallText>
          </View>

          <View>
            <View
              style={{
                marginHorizontal: 30,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                borderWidth: 1,
                borderColor: "#333",
                borderRadius: 10,
                padding: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/images/etherium.png")}
                  style={{ height: 40, width: 40 }}
                />

                <View style={{ marginLeft: 10 }}>
                  <Paragraph style={{ opacity: 1 }}>Ruth Sharp</Paragraph>
                  <MediumText style={{ opacity: 0.6 }}>
                    ruth.sharp99@gmail.com
                  </MediumText>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginHorizontal: 30, marginBottom: 50 }}>
          <Button>Done</Button>
        </View>
      </View>
    </View>
  );
};

export default Report;
