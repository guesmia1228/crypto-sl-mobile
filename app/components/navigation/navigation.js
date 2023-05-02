import SmallText from "../text/smallText";
import { Image, Pressable, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";

const nav = [
  {
    text: "Home",
    icon: require(`../../assets/images/home.png`),
    active: require(`../../assets/images/homeActive.png`),
  },
  {
    text: "Payment",
    icon: require(`../../assets/images/payment.png`),
    active: require(`../../assets/images/paymentActive.png`),
  },
  {
    text: "Payroll",
    icon: require(`../../assets/images/payroll.png`),
    active: require(`../../assets/images/payrollActive.png`),
  },
  {
    text: "Wallet",
    icon: require(`../../assets/images/wallet.png`),
    active: require(`../../assets/images/walletActive.png`),
  },
  {
    text: "Profile",
    icon: require(`../../assets/images/profile.png`),
    active: require(`../../assets/images/profileActive.png`),
  },
];

const Navigation = () => {
  const [active, setActive] = useState(0);

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#333",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {nav.map((item, index) => (
        <Link href={`/pages/${item.text.toLowerCase()}`} key={item.text} >
        <Pressable
            style={{ alignItems: "center" }}
            onPress={() => setActive(index)}
          >
            <Image
              source={active === index ? item.active : item.icon}
              style={{
                height: 20,
                aspectRatio: 1,
                marginBottom: 5,
              }}
              resizeMode="contain"
            />
            <SmallText
              style={{
                textAlign: "center",
                opacity: active === index ? "1" : "0.6",
              }}
            >
              {item.text}
            </SmallText>
          </Pressable>
        </Link>
      ))}
    </View>
  );
};

export default Navigation;
