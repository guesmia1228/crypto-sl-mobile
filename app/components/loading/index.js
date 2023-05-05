import { View, ActivityIndicator } from "react-native";

export const LoadingScreen = () => {
    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.8)",
            }}
        >
            <ActivityIndicator size="large" />
        </View>
    );
};
