import { Image, View } from "react-native";

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../assets/images/logo.png")}
        style={{
          width: 200,
          flex: 1,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Loading;
