import Button from "../components/button/Button";
import Heading1 from "../components/text/heading1";
import MediumText from "../components/text/mediumText";
import Paragraph from "../components/text/paragraph";
import SmallText from "../components/text/smallText";

const { View, Image } = require("react-native");
const { ScrollView } = require("react-native-gesture-handler");

const content = [
  { title: "Income Payment", info: "45 total payments", data: "$56,556.43" },
  { title: "Outcome Payment", info: "12 total expenses", data: "$56,556.43" },
  { title: "Net Income", info: "57 total transaction", data: "$56,556.43" },
];

const Payment = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          backgroundColor: "#000",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ marginHorizontal: 30 }}>
            <Image
              style={{ width: 120, marginBottom: 10 }}
              resizeMode="contain"
              source={require("../assets/images/logo.png")}
            />
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: 30,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Paragraph>Payment balance</Paragraph>
              <Heading1
                style={{ fontSize: 30, marginTop: 10, marginBottom: 5 }}
              >
                $34,901.32
              </Heading1>
              <MediumText style={{ color: "#B3F19B" }}>+10.43%</MediumText>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#333",
                height: 30,
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <SmallText style={{ opacity: 0.6 }}>This year</SmallText>
            </View>
          </View>
          <View>
            {content.map((item) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#333",
                  marginBottom: 30,
                }}
              >
                <View>
                  <Paragraph style={{ opacity: 1 }}>{item.title}</Paragraph>
                  <SmallText style={{ opacity: 0.6 }}>{item.info}</SmallText>
                </View>

                <View>
                  <Paragraph style={{ opacity: 1 }}>{item.data}</Paragraph>
                </View>
              </View>
            ))}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "48%" }}>
              <Button>Send</Button>
            </View>
            <View style={{ width: "48%" }}>
              <Button gray>Receive</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;
