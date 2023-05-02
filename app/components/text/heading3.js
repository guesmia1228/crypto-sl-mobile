import { StyleSheet, Text } from "react-native";

const Heading3 = ({ children, style }) => {
  return <Text style={{ ...styles.heading1, ...style }}>{children}</Text>;
};

export default Heading3;

const styles = StyleSheet.create({
  heading1: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
  },
});
