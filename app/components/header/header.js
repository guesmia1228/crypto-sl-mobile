import { Image, View } from "react-native";

const Header = ({ children, style }) => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../assets/images/back.png")}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "center",

          ...style,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Header;
