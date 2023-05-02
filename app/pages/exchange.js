import { View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import Heading3 from "../components/text/heading3";
import SmallText from "../components/text/smallText";
import Paragraph from "../components/text/paragraph";
import MediumText from "../components/text/mediumText";
import { Image } from "react-native";
import Button from "../components/button/Button";

const Exchange = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Heading2>Exchange</Heading2>
      </Header>

      <View
        style={{
          flex: 1,
          paddingTop: 30,
          paddingHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <View>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#333",
              padding: 20,
            }}
          >
            <Heading2>Swapping</Heading2>
            <MediumText
              style={{ marginTop: 2.5, marginBottom: 30, width: 135 }}
            >
              Wait a couple of seconds for the system
            </MediumText>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Heading3>5,920.04</Heading3>
                  <MediumText style={{ marginTop: 2.5, opacity: 0.6 }}>
                    Bitcoin
                  </MediumText>
                </View>

                <View>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("../assets/images/etherium.png")}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 5,
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Image
                  source={require("../assets/images/exchange.png")}
                  style={{ width: 30, height: 30 }}
                />

                <View
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    justifyContent: "center",
                    zIndex: -1,
                  }}
                >
                  <View
                    style={{
                      height: 1,
                      width: "100%",
                      backgroundColor: "#333",
                    }}
                  ></View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Heading3>5,920.04</Heading3>
                  <MediumText style={{ marginTop: 2.5, opacity: 0.6 }}>
                    Bitcoin
                  </MediumText>
                </View>

                <View>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require("../assets/images/etherium.png")}
                  />
                </View>
              </View>

              <View style={{ marginTop: 30, flexDirection: "row" }}>
                <MediumText style={{ opacity: 0.6 }}>Network fee: </MediumText>
                <MediumText>3$</MediumText>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#333",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <MediumText style={{ opacity: 0.6 }}>Liquidity</MediumText>
              <MediumText>0.000004 BTC</MediumText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <MediumText style={{ opacity: 0.6 }}>Route</MediumText>
              <MediumText>BTC to ETH</MediumText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <MediumText style={{ opacity: 0.6 }}>Sippage</MediumText>
              <MediumText>0.30%</MediumText>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <MediumText style={{ opacity: 0.6 }}>Price</MediumText>
              <MediumText>1 BTC = 0.013 ETH</MediumText>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 125 }}>
          <Button>Convert</Button>
        </View>
      </View>
    </View>
  );
};

export default Exchange;
