import { Image } from "react-native";
import { View } from "react-native";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import Button from "../components/button/Button";
import SmallText from "../components/text/smallText";
import MediumText from "../components/text/mediumText";
import { ScrollView } from "react-native-gesture-handler";
import Paragraph from "../components/text/paragraph";
import Heading2 from "../components/text/heading2";
import Heading3 from "../components/text/heading3";
import ItemLayout from "../components/itemLayout/itemLayout";

const Payroll = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, marginTop: 50 }}>
        <View style={{ marginHorizontal: 30 }}>
          <Image
            style={{
              width: 120,
            }}
            resizeMode="contain"
            source={require("../assets/images/logo.png")}
          />
        </View>
        <SectionHeader title={"Payroll Stats"} style={{ marginTop: 10 }}>
          <View
            style={{ padding: 10, borderRadius: 5, backgroundColor: "#1595C2" }}
          >
            <MediumText>Add Employee</MediumText>
          </View>
        </SectionHeader>

        <View
          style={{
            paddingHorizontal: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <StatsBox
            image={require("../assets/images/employee.png")}
            title="Total Employee"
            stats={"+1,500"}
            percentage="+8.42%"
          />
          <StatsBox
            image={require("../assets/images/salary.png")}
            title="Salary Expenses"
            stats={"$21,500"}
            percentage="+8.42%"
          />
        </View>

        <SectionHeader title="Enrollment analytics" />

        <View
          style={{
            marginHorizontal: 30,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#333",
            paddingHorizontal: 15,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              paddingBottom: 50,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ opacity: 0.6 }}>
              <MediumText style={{ paddingBottom: 25 }}>100k</MediumText>
              <MediumText style={{ paddingBottom: 25 }}>80k</MediumText>
              <MediumText style={{ paddingBottom: 25 }}>60k</MediumText>
              <MediumText style={{ paddingBottom: 25 }}>40k</MediumText>
              <MediumText style={{ paddingBottom: 25 }}>20k</MediumText>
              <MediumText>0k</MediumText>
            </View>

            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="99%" color="#B3F19B" />
              <Bar width="55%" color="#EF5452" />
              <Bar width="28%" color="#1595C2" />
              <Bar width="10%" color="#FFA600" />

              <Label>Jan</Label>
            </View>
            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="47%" color="#B3F19B" />
              <Bar width="35%" color="#EF5452" />
              <Bar width="22%" color="#1595C2" />
              <Bar width="10%" color="#FFA600" />

              <Label>Feb</Label>
            </View>
            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="74%" color="#B3F19B" />
              <Bar width="21%" color="#EF5452" />
              <Bar width="11%" color="#1595C2" />
              <Bar width="2%" color="#FFA600" />

              <Label>Mar</Label>
            </View>
            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="90%" color="#B3F19B" />
              <Bar width="80%" color="#EF5452" />
              <Bar width="70%" color="#1595C2" />
              <Bar width="50%" color="#FFA600" />

              <Label>Apr</Label>
            </View>
            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="75%" color="#B3F19B" />
              <Bar width="50%" color="#EF5452" />
              <Bar width="40%" color="#1595C2" />
              <Bar width="25%" color="#FFA600" />

              <Label>May</Label>
            </View>
            <View
              style={{
                height: "100%",
                position: "relative",
                flexDirection: "row",
              }}
            >
              <Bar width="90%" color="#B3F19B" />
              <Bar width="55%" color="#EF5452" />
              <Bar width="30%" color="#1595C2" />
              <Bar width="10%" color="#FFA600" />

              <Label>Jun</Label>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignItems: "center" }}>
              <SmallText>Product</SmallText>
              <View
                style={{
                  width: 30,
                  height: 5,
                  backgroundColor: "#B3F19B",
                  marginTop: 7,
                  borderRadius: 3,
                }}
              ></View>
            </View>
            <View style={{ alignItems: "center" }}>
              <SmallText>Marketing</SmallText>
              <View
                style={{
                  width: 30,
                  height: 5,
                  backgroundColor: "#EF5452",
                  marginTop: 7,
                  borderRadius: 3,
                }}
              ></View>
            </View>
            <View style={{ alignItems: "center" }}>
              <SmallText>Sales</SmallText>
              <View
                style={{
                  width: 30,
                  height: 5,
                  backgroundColor: "#1595C2",
                  marginTop: 7,
                  borderRadius: 3,
                }}
              ></View>
            </View>
            <View style={{ alignItems: "center" }}>
              <SmallText>Engineering</SmallText>
              <View
                style={{
                  width: 30,
                  height: 5,
                  backgroundColor: "#FFA600",
                  marginTop: 7,
                  borderRadius: 3,
                }}
              ></View>
            </View>
          </View>
        </View>
      </View>
      <SectionHeader title="Employee" />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Approved"
        data="$496.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Approved"
        data="$496.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Approved"
        data="$496.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Pending"
        data="$496.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Pending"
        data="$496.00"
      />
      <ItemLayout
        image={require("../assets/images/avatar.jpg")}
        main="Ruth Sharp"
        info="Pending"
        data="$496.00"
      />
    </ScrollView>
  );
};

export default Payroll;

const StatsBox = ({ image, title, stats, percentage }) => {
  return (
    <View
      style={{
        width: "48%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#333",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingTop: 20,
        }}
      >
        <Image
          style={{
            height: 16,
            width: 16,
            aspectRatio: 1,
            marginRight: 10,
          }}
          resizeMode="contain"
          source={image}
        />
        <SmallText style={{ opacity: 0.6, transform: "translateY(1px)" }}>
          {title}
        </SmallText>
      </View>

      <View
        style={{
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingBottom: 15,
          borderBottomColor: "#333",
          borderBottomWidth: 1,
        }}
      >
        <View>
          <Heading3 style={{ opacity: 1 }}>{stats}</Heading3>
        </View>
        <MediumText style={{ color: "#B3F19B" }}>{percentage}</MediumText>
      </View>

      <View style={{ opacity: 0.6, padding: 15 }}>
        <SmallText>Update: Apr 20, 2023</SmallText>
      </View>
    </View>
  );
};

const Bar = ({ width, color }) => {
  return (
    <View
      style={{
        width: 15,
        height: width,
        backgroundColor: color,
        position: "absolute",
        bottom: 0,
        borderRadius: 3,
      }}
    ></View>
  );
};

const Label = ({ children }) => {
  return (
    <MediumText
      style={{
        position: "relative",
        alignSelf: "flex-end",
        bottom: -25,
        opacity: 0.6,
        left: -2.5,
      }}
    >
      {children}
    </MediumText>
  );
};
