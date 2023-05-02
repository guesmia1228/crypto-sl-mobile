import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/header/header";
import Heading2 from "../components/text/heading2";
import Input from "../components/input/input";
import { View } from "react-native";
import Button from "./../components/button/Button";
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const AddEmployee = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Heading2>Add Employee</Heading2>
      </Header>

      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
        <ImageBackground
          source={require("../assets/images/avatar.jpg")}
          style={{ height: 100, width: 100, alignItems: "flex-end" }}
          imageStyle={{ borderRadius: 60 }}
        >
          <View
            style={{
              backgroundColor: "#1595C2",
              width: 30,
              height: 30,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 12, height: 10 }}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginHorizontal: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Name"} placeholder={"Enter name"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Email"} placeholder={"Enter email"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Phone"} placeholder={"Enter phone"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Address"} placeholder={"Enter address"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Peyment Method"} placeholder={"Bitcoin"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Amount"} placeholder={"Enter amount"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Department"} placeholder={"Enter department"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Roles"} placeholder={"Enter roles"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input label={"Employe ID"} placeholder={"Enter employee ID"} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Input
            label={"Referal (Optional)"}
            placeholder={"Enter your email"}
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <Button>Confirm</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddEmployee;
