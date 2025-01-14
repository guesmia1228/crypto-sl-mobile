import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ children, gray, style, link, onPress, navigation }) => {
  if (link) {
    return (
      // <Link href={link} asChild>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(link)
          }} 
          style={{
            ...styles.button,
            backgroundColor: gray ? "#333333" : "#1595C2",
            ...style,
          }}
        >
          <Text style={{ ...styles.buttonText }}>{children}</Text>
        </TouchableOpacity>
      // </Link>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}
    style={{
        ...styles.button,
        backgroundColor: gray ? "#333333" : "#1595C2",
        ...style,
      }}
    >
      <Text style={{ ...styles.buttonText }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 14,
  },
});
