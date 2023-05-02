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

const Transactions = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Heading2>Transactions</Heading2>
      </Header>

      <View style={{ paddingHorizontal: 30, paddingTop: 30 }}>
        <Input
          style={{ marginBottom: 0 }}
          placeholder={"Search receiver"}
          search
        />
      </View>

      <SectionHeader title="Today" />

      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />

      <SectionHeader style={{ marginTop: 0 }} title="Yesterday" />

      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />

      <SectionHeader style={{ marginTop: 0 }} title="This Week" />

      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="20 Mar, 08:25 AM"
        data="-$1,592.00"
      />
    </ScrollView>
  );
};

export default Transactions;
