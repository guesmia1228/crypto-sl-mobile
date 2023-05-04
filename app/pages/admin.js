import { Image, StyleSheet, View, ScrollView, FlatList } from "react-native";
import MediumText from "../components/text/mediumText";
import Heading1 from "../components/text/heading1";
import SmallText from "../components/text/smallText";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import Paragraph from "../components/text/paragraph";
import ItemLayout from "../components/itemLayout/itemLayout";
import Button from "../components/button/Button";

const icons = [
  {
    image: require("../assets/images/home1.png"),
    text: "Send",
  },
  {
    image: require("../assets/images/home2.png"),
    text: "Receive",
  },
  {
    image: require("../assets/images/home3.png"),
    text: "Transaction",
  },
  {
    image: require("../assets/images/home4.png"),
    text: "Exchange",
  },
  {
    image: require("../assets/images/home5.png"),
    text: "Wallet",
  },
];

const Admin = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
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

          <View>
            <SectionHeader style={{ marginTop: 10 }} title="Stats">
              <Button style={{ paddingHorizontal: 10 }}>
                <SmallText>Add User</SmallText>
              </Button>
            </SectionHeader>
            <FlatList
              horizontal
              data={[0, 1, 2]}
              renderItem={() => <StatsBox />}
              keyExtractor={(item) => item.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ marginLeft: 30, paddingRight: 50 }}
            />
          </View>

          <View>
            <SectionHeader title="Registrations Roles" />

            <View style={{ marginHorizontal: 30, flexDirection: "row" }}>
              <View style={{ position: "relative", height: 160, width: 160 }}>
                <View
                  style={{
                    height: 90,
                    width: 90,
                    backgroundColor: "#B3F19B",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 20,
                    zIndex: 3,
                  }}
                >
                  <Paragraph style={{ opacity: 1 }}>311</Paragraph>
                </View>
                <View
                  style={{
                    height: 65,
                    width: 65,
                    backgroundColor: "#FFA600",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 74,
                    zIndex: 2,
                  }}
                >
                  <Paragraph style={{ opacity: 1 }}>100</Paragraph>
                </View>
                <View
                  style={{
                    height: 45,
                    width: 45,
                    backgroundColor: "#1595C2",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    left: 60,
                    top: 45,
                    zIndex: 5,
                  }}
                >
                  <Paragraph style={{ opacity: 1 }}>21</Paragraph>
                </View>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#EF5452",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <Paragraph style={{ opacity: 1 }}>560</Paragraph>
                </View>
              </View>

              <View style={{ marginLeft: 50 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#EF5452",
                      borderRadius: 50,
                    }}
                  ></View>
                  <Paragraph style={{ opacity: 1, marginLeft: 5 }}>
                    Gold
                  </Paragraph>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#1595C2",
                      borderRadius: 50,
                    }}
                  ></View>
                  <Paragraph style={{ opacity: 1, marginLeft: 5 }}>
                    Vendor
                  </Paragraph>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#FFA600",
                      borderRadius: 50,
                    }}
                  ></View>
                  <Paragraph style={{ opacity: 1, marginLeft: 5 }}>
                    Affiliate
                  </Paragraph>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "#B3F19B",
                      borderRadius: 50,
                    }}
                  ></View>
                  <Paragraph style={{ opacity: 1, marginLeft: 5 }}>
                    Diamond
                  </Paragraph>
                </View>
              </View>
            </View>
          </View>

          <View>
            <SectionHeader title="User Management" />

            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Vendor"
              data="Enabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Enabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Enabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Enabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Disabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Disabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Disabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Disabled"
            />
            <ItemLayout
              image={require("../assets/images/avatar.jpg")}
              main="Ruth Sharp"
              info="Receive"
              data="Disabled"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    marginRight: 5,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#23C215",
  },
});

const IconBox = ({ image, label }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={image}
        style={{ height: 40, width: 40, marginBottom: 10 }}
      />
      <SmallText>{label}</SmallText>
    </View>
  );
};

const StatsBox = () => {
  return (
    <View
      style={{
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#333",
        marginRight: 10,
      }}
    >
      <Image
        style={{
          height: 16,
          aspectRatio: 1,
          alignSelf: "flex-start",
        }}
        resizeMode="contain"
        source={require("../assets/images/stats1.png")}
      />

      <MediumText style={{ opacity: 0.6, marginTop: 30, marginBottom: 10 }}>
        Clicks
      </MediumText>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <View style={{ marginRight: 30 }}>
          <Paragraph style={{ opacity: 1 }}>+1,500</Paragraph>
        </View>
        <MediumText style={{ color: "#B3F19B" }}>+8.42%</MediumText>
      </View>
    </View>
  );
};
