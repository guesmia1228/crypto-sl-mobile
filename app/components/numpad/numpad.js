import { TouchableOpacity } from "react-native-gesture-handler";
import Heading2 from "../text/heading2";
import { FlatList, Image, View } from "react-native";

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];

const Numpad = ({ onPress }) => {
  return (
    <FlatList
      data={key}
      renderItem={(props) => Digit({ ...props, onPress })}
      keyExtractor={(item) => item}
      numColumns={3}
      contentContainerStyle={{ marginBottom: 50 }}
      ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      scrollEnabled={false}
    />
  );
};

export default Numpad;

const Digit = ({ item, onPress }) => {
  return (
    <View
      style={{
        width: "33%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          padding: 10,
        }}
        onPress={() => onPress(item)}
      >
        {item === "del" ? (
          <Image
            source={require("../../assets/images/del.png")}
            style={{ width: 24, flex: 1 }}
            resizeMode="contain"
          />
        ) : (
          <Heading2>{item}</Heading2>
        )}
      </TouchableOpacity>
    </View>
  );
};
