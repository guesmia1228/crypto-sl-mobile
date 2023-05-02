import { TextInput } from "react-native-gesture-handler";
import Heading3 from "../text/heading3";
import { View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";

const Input = ({ placeholder, style, label, secure = false, search, qr }) => {
  return (
    <>
      {label && <Heading3 style={{ marginBottom: 15 }}>{label}</Heading3>}
      <View>
        {search && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 20,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/search.png")}
              style={{
                height: 12,
                width: 12,
              }}
              resizeMethod="contain"
            />
          </View>
        )}
        {qr && (
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 20,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/qrscan.png")}
              style={{
                height: 12,
                width: 12,
              }}
              resizeMethod="contain"
            />
          </View>
        )}

        <TextInput
          placeholder={placeholder}
          style={{
            fontSize: 14,
            padding: 20,
            paddingLeft: search ? 42 : 20,
            paddingRight: qr ? 42 : 20,
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 10,
            color: "white",

            ...style,
          }}
          secureTextEntry={secure}
        ></TextInput>
      </View>
    </>
  );
};

export default Input;
