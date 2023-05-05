import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ children, style, onBack }) => {
    return (
        <View
            style={{
                marginHorizontal: 30,
                marginTop: 50,
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={onBack}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../assets/images/back.png")}
                />
            </TouchableOpacity>
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
