import { View } from "react-native";
import Header from "../components/header/header";
import Heading1 from "./../components/text/heading1";
import Paragraph from "../components/text/paragraph";

const ScanQR = () => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Header></Header>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        }}
      >
        <View style={{ marginBottom: 50, width: 260 }}>
          <Heading1 style={{ textAlign: "center", marginBottom: 20 }}>
            Scan Receiver Code
          </Heading1>
          <Paragraph style={{ textAlign: "center", opacity: 1 }}>
            Scan the QR code from the receiver account that he showed or sent to
            you.
          </Paragraph>
        </View>

        <View
          style={{
            backgroundColor: "red",
            height: undefined,
            width: "100%",
            aspectRatio: 1,
            borderRadius: 30,
          }}
        ></View>

        <View style={{ width: "100%", marginTop: 50 }}>
          <Paragraph
            style={{ textAlign: "center", opacity: 1, marginBottom: 20 }}
          >
            Having issues?
          </Paragraph>
          <View
            style={{
              width: "100%",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: 10,
            }}
          >
            <Paragraph
              style={{
                textAlign: "center",
                opacity: 1,
                padding: 20,
              }}
            >
              Enter address manually
            </Paragraph>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScanQR;
