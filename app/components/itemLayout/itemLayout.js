import { Image, ImageBackground, View } from "react-native";
import Paragraph from "../text/paragraph";
import SmallText from "../text/smallText";
import MediumText from "../text/mediumText";

const ItemLayout = ({ image, main, info, data }) => {
  return (
    <View
      style={{
        marginHorizontal: 30,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        opacity: data === "Disabled" ? 0.6 : 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={image}
          style={{ height: 40, width: 40, borderRadius: "50%" }}
        />

        <View style={{ marginLeft: 10 }}>
          <Paragraph style={{ opacity: 1 }}>{main}</Paragraph>
          <MediumText
            style={{
              opacity: info === "Approved" || info === "Pending" ? 1 : 0.6,
              color:
                info === "Approved"
                  ? "#B3F19B"
                  : info === "Pending"
                  ? "#EF5452"
                  : "white",
            }}
          >
            {info}
          </MediumText>
        </View>
      </View>

      <View>
        {data === "enter" ? (
          <Image
            source={require("../../assets/images/enter.png")}
            style={{ height: 12, width: 7 }}
            resizeMethod="contain"
          />
        ) : (
          <Paragraph
            style={{
              opacity: 1,
              fontWeight: 600,
              color:
                data === "Enabled"
                  ? "#B3F19B"
                  : data === "Disabled"
                  ? "#EF5452"
                  : "white",
            }}
          >
            {data}
          </Paragraph>
        )}
      </View>
    </View>
  );
};

export default ItemLayout;
