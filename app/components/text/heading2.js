import { StyleSheet, Text } from "react-native";

const Heading2 = ({ children, style }) => {
  return <Text style={{ ...style, ...styles.heading1 }}>{children}</Text>;
};

export default Heading2;

const styles = StyleSheet.create({
  heading1: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 500,
  },
});
