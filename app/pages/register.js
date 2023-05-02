import React, { useState } from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import Header from "./../components/header/header";
import Paragraph from "../components/text/paragraph";
import Heading2 from "./../components/text/heading2";
import Button from "../components/button/Button";
import Input from "../components/input/input";

const contentData = [
  {
    title: "Enter your full name",
    text: "Please enter the valid legal name that you will use in this application.",
    input1: { label: "First name", placeholder: "Enter your name" },
    input2: { label: "Last name", placeholder: "Enter your last name" },
    button: "Continue",
  },
  {
    title: "Recover information",
    text: "Enter a valid phone number and email that will be used for recovery.",
    input1: {
      label: "Phone number",
      placeholder: "Valid format: (979) 268-4143",
    },
    input2: { label: "Email", placeholder: "Enter your email" },
    button: "Continue",
  },
  {
    title: "Create password",
    text: "Your password must be strong and kept confidential and can't be shareable.",
    input1: { label: "Password", placeholder: "Enter password", secure: true },
    input2: {
      label: "Verify password",
      placeholder: "Enter password again",
      secure: true,
    },
    button: "Submit",
  },
];

export default function Register() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Header style={{}}>
        <View
          style={{
            height: 3,
            width: 30,
            backgroundColor: activeIndex === 0 ? "#1595C2" : "#333",
            borderRadius: 2,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            height: 3,
            width: 30,
            backgroundColor: activeIndex === 1 ? "#1595C2" : "#333",
            borderRadius: 2,
            marginRight: 10,
          }}
        ></View>
        <View
          style={{
            height: 3,
            width: 30,
            backgroundColor: activeIndex === 2 ? "#1595C2" : "#333",
            borderRadius: 2,
          }}
        ></View>
      </Header>

      <View style={{ flex: 1 }}>
        {contentData.map((item, index) => (
          <>
            {activeIndex === index && (
              <Content
                key={index}
                title={item.title}
                buttonText={item.button}
                text={item.text}
                input1={item.input1}
                input2={item.input2}
              />
            )}
          </>
        ))}
      </View>
    </View>
  );
}

const Content = ({ title, buttonText, text, input1, input2 }) => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingTop: 30,
        paddingBottom: 50,
        justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View>
        <Heading2 style={{ marginBottom: 10 }}>{title}</Heading2>
        <Paragraph>{text}</Paragraph>

        <View style={{ marginTop: 30 }}>
          <Input
            style={{ marginBottom: 20 }}
            placeholder={input1.placeholder}
            label={input1.label}
            secure={input1.secure}
          />
          <Input
            placeholder={input2.placeholder}
            label={input2.label}
            secure={input2.secure}
          />
        </View>
      </View>

      <Button>{buttonText}</Button>
    </View>
  );
};
