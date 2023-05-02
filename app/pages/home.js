import { Image, StyleSheet, View, ScrollView, FlatList } from "react-native";
import MediumText from "./../components/text/mediumText";
import Heading1 from "../components/text/heading1";
import SmallText from "./../components/text/smallText";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import Paragraph from "../components/text/paragraph";
import ItemLayout from "../components/itemLayout/itemLayout";

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

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginHorizontal: 30 }}>
          <Image
            style={{ width: 120, marginBottom: 10 }}
            resizeMode="contain"
            source={require("../assets/images/logo.png")}
          />

          <View
            style={{
              borderRadius: 10,
              backgroundColor: "#1595C2",
              padding: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <MediumText>Total Wallet Balance</MediumText>
              <MediumText>USD</MediumText>
            </View>

            <Heading1 style={{ marginTop: 20, marginBottom: 50 }}>
              $7,276.48
            </Heading1>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MediumText>Monthly Changes</MediumText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 15,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                }}
              >
                <Triangle />
                <MediumText
                  style={{
                    color: "#23C215",
                    fontWeight: 800,
                    transform: "translateY(1px)",
                  }}
                >
                  25%
                </MediumText>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#333",
            }}
          >
            {icons.map((item, index) => (
              <IconBox key={index} image={item.image} label={item.text} />
            ))}
          </View>
        </View>

        <View>
          <SectionHeader title="Stats">
            <MediumText style={{ color: "#1595C2" }}>
              Change to Affiliate
            </MediumText>
          </SectionHeader>
          <FlatList
            horizontal
            data={[0, 1, 2, 3]}
            renderItem={() => <StatsBox />}
            keyExtractor={(item) => item.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 30 }}
          />
        </View>

        <View>
          <SectionHeader title="Recent" />

          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
          <ItemLayout
            image={require("../assets/images/avatar.jpg")}
            main="Ruth Sharp"
            info="Receive"
            data="$400"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const Triangle = () => {
  return <View style={styles.triangle} />;
};

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
