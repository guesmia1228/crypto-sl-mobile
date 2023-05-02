import { View } from "react-native";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import { ScrollView } from "react-native";
import ItemLayout from "../components/itemLayout/itemLayout";
import Input from "../components/input/input";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import { Image } from "react-native";

const recent = [
  require("../assets/images/avatar.jpg"),
  require("../assets/images/avatar.jpg"),
  require("../assets/images/avatar.jpg"),
  require("../assets/images/avatar.jpg"),
  require("../assets/images/avatar.jpg"),
];

const Send = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Heading2>Send</Heading2>
      </Header>

      <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
        <Input
          style={{ marginBottom: 0 }}
          placeholder={"Search receiver"}
          search
          qr
        />
      </View>

      <SectionHeader title="Recent" />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        {recent.map((item) => (
          <Image
            source={item}
            style={{ height: 50, width: 50, borderRadius: "50%" }}
          />
        ))}
      </View>

      <SectionHeader title="Contacts" />

      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="ruth.sharp99@gmail.com"
        data="enter"
      />
    </ScrollView>
  );
};

export default Send;
