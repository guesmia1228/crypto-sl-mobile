import { View } from "react-native";
import Paragraph from "./../components/text/paragraph";
import { Image } from "react-native";
import MediumText from "../components/text/mediumText";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import { useState } from "react";
import { Pressable } from "react-native";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import SmallText from "../components/text/smallText";
import { ScrollView } from "react-native-gesture-handler";
import Button from "../components/button/Button";

const content = [
  {
    label: "Name",
    data: "Kianna Philips",
  },
  {
    label: "Payment Method",
    data: "Bitcoin",
  },
  {
    label: "Employee ID",
    data: "DG-1293-J23",
  },
  {
    label: "Phone Number",
    data: "(+33)7 35 55 21 02",
  },
  {
    label: "Email",
    data: "kianphilips@yahoo.com",
  },
  {
    label: "Address",
    data: "1 Refinery Road, Come By Change, NL A0B 1NO",
  },
];

const content2 = [
  {
    label: "Date Added",
    data: "January 13, 2023",
  },
  {
    label: "Amount",
    data: "0.0000345 BTC",
  },
  {
    label: "Department",
    data: "Marketing",
  },
  {
    label: "Roles",
    data: "Digital Marketing",
  },
  {
    label: "Referal",
    data: "-",
  },
];

const Employee = () => {
  const [approve, setApprove] = useState(false);

  return (
    <ScrollView style={{ paddingBottom: 150, flexGrow: 1 }}>
      <Header>
        <Heading2>Employee</Heading2>
      </Header>
      <View
        style={{
          marginHorizontal: 30,
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={{ height: 60, width: 60, borderRadius: "50%" }}
          />

          <View style={{ marginLeft: 10 }}>
            <Paragraph style={{ opacity: 1 }}>Kianna Philips</Paragraph>
            <MediumText style={{ opacity: 0.6 }}>Digital Marketing</MediumText>
          </View>
        </View>

        <View>
          <Pressable
            onPress={() => setApprove((prev) => !prev)}
            style={{
              padding: 10,
              borderRadius: 5,
              backgroundColor: approve ? "#333" : "#1595C2",
            }}
          >
            <MediumText>{approve ? "Approved" : "Approve"}</MediumText>
          </Pressable>
        </View>
      </View>

      <SectionHeader title="Informations" />

      <View
        style={{
          marginHorizontal: 30,
          paddingVertical: 20,
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: "#333",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          {content.map((item) => (
            <Item label={item.label} data={item.data} />
          ))}
        </View>
        <View>
          {content2.map((item) => (
            <Item label={item.label} data={item.data} />
          ))}
        </View>
      </View>

      <View style={{ marginHorizontal: 30, marginTop: 30 }}>
        <Button gray>Remove</Button>
      </View>
    </ScrollView>
  );
};

export default Employee;

const Item = ({ label, data }) => {
  return (
    <View style={{ marginBottom: 20, width: 130 }}>
      <SmallText style={{ opacity: 0.6 }}>{label}</SmallText>
      <MediumText style={{ opacity: 1, marginTop: 5 }}>{data}</MediumText>
    </View>
  );
};
