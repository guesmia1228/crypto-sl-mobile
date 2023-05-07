import { Image, StyleSheet, View, ScrollView, FlatList } from "react-native";
import MediumText from "../components/text/mediumText";
import Heading1 from "../components/text/heading1";
import SmallText from "../components/text/smallText";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import Paragraph from "../components/text/paragraph";
import ItemLayout from "../components/itemLayout/itemLayout";
import Button from "../components/button/Button";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";

const stats = [
  {
    data: "1,500",
    percentage: "8.42",
    title: "Clicks",
    image: require("../assets/images/stats1.png"),
  },
  {
    data: "4,723",
    percentage: "8.42",
    title: "Incomes",
    image: require("../assets/images/incomes.png"),
  },
  {
    data: "7,341",
    percentage: "8.42",
    title: "Expenses",
    image: require("../assets/images/expenses.png"),
  },
];

const Diamond = () => {
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
        <Header>
          <Heading2>Diamond</Heading2>
        </Header>
        <View style={{ flex: 1, marginTop: 30 }}>
          <View>
            <SectionHeader style={{ marginTop: 10 }} title="Overview Info">
              <Button style={{ paddingHorizontal: 10 }}>
                <SmallText>Add User</SmallText>
              </Button>
            </SectionHeader>
            <FlatList
              horizontal
              data={stats}
              renderItem={(props) => StatsBox({ ...props, stats })}
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

export default Diamond;

const StatsBox = ({ item }) => {
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
        source={item.image}
      />

      <MediumText style={{ opacity: 0.6, marginTop: 30, marginBottom: 10 }}>
        {item.title}
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
          <Paragraph style={{ opacity: 1 }}>{item.data}</Paragraph>
        </View>
        <MediumText style={{ color: "#B3F19B" }}>{item.percentage}%</MediumText>
      </View>
    </View>
  );
};
