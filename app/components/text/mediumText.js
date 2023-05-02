import { StyleSheet, Text } from "react-native";

const MediumText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default MediumText;

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
});
