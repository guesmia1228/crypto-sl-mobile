import React, { Fragment, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import Header from "../components/header/header";
import Paragraph from "../components/text/paragraph";
import Heading2 from "../components/text/heading2";
import Button from "../components/button/Button";
import Input from "../components/input/input";
import { register } from "../apis/authentication";
import { LoadingScreen } from "../components/loading";

const contentData = [
    {
        title: "Enter your full name",
        text: "Please enter the valid legal name that you will use in this application.",
        input1: {
            name: "firstName",
            label: "First name",
            placeholder: "Enter your name",
        },
        input2: {
            name: "lastName",
            label: "Last name",
            placeholder: "Enter your last name",
        },
        button: "Continue",
    },
    {
        title: "Recover information",
        text: "Enter a valid phone number and email that will be used for recovery.",
        input1: {
            name: "telNr",
            label: "Phone number",
            placeholder: "Valid format: (979) 268-4143",
        },
        input2: {
            name: "email",
            label: "Email",
            placeholder: "Enter your email",
        },
        button: "Continue",
    },
    {
        title: "Create password",
        text: "Your password must be strong and kept confidential and can't be shareable.",
        input1: {
            name: "password",
            label: "Password",
            placeholder: "Enter password",
            secure: true,
        },
        input2: {
            name: "verifypassword",
            label: "Verify password",
            placeholder: "Enter password again",
            secure: true,
        },
        button: "Submit",
    },
];

const initialFormValue = {
    firstName: "",
    lastName: "",
    telNr: "",
    email: "",
    password: "",
    verifypassword: "",
};

export default function Register() {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const buttonPressHandler = async (form) => {
        const { values, resetForm } = form;
        if (activeIndex !== 2) {
            setActiveIndex(activeIndex + 1);
        } else {
            setIsSubmitting(true);
            delete values.verifypassword;
            const registerResponse = await register({
                ...values,
            });
            setIsSubmitting(false);
            if (!registerResponse) {
                resetForm();
                setActiveIndex(0);
                Alert.alert(
                    "Register",
                    "Your account is registered successfully. ",
                    [
                        {
                            text: "Back To Login",
                            onPress: () => {
                                navigation.navigate("Login");
                            },
                        },
                    ]
                );
            } else {
                Alert.alert(registerResponse);
            }
        }
    };
    const handleBack = () => {
        if (activeIndex === 0) {
            navigation.goBack();
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#1F1F1F" }}>
            <Header style={{}} onBack={handleBack}>
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
                <Formik
                    initialValues={initialFormValue}
                    validationSchema={yup.object().shape({
                        firstname: yup
                            .string()
                            .required("Please, provide your first name!"),
                        lastname: yup
                            .string()
                            .required("Please, provide your last name!"),
                        phonenumber: yup
                            .number()
                            .required("Please, provide your phone number!"),
                        email: yup
                            .string()
                            .email("Please, provide valid email!")
                            .required("Please, provide your email!"),
                        password: yup
                            .string()
                            .required("Please, provide your password!"),
                        verifypassword: yup
                            .string()
                            .oneOf(
                                [yup.ref("password"), null],
                                "Passwords must match"
                            ),
                    })}
                >
                    {(form) => {
                        return contentData.map((item, index) => (
                            <Fragment key={index}>
                                {activeIndex === index && (
                                    <Content
                                        form={form}
                                        title={item.title}
                                        buttonText={item.button}
                                        text={item.text}
                                        input1={item.input1}
                                        input2={item.input2}
                                        buttonPressHandler={buttonPressHandler}
                                    />
                                )}
                            </Fragment>
                        ));
                    }}
                </Formik>
            </View>
            {isSubmitting && <LoadingScreen />}
        </View>
    );
}

const Content = ({
    title,
    buttonText,
    text,
    input1,
    input2,
    buttonPressHandler,
    link,
    form,
}) => {
    const navigation = useNavigation();
    const { handleChange, values, errors, setFieldTouched, touched } = form;
    const handleNext = () => {
        if (!touched[input1.name] || !touched[input2.name]) {
            setFieldTouched(input1.name);
            setFieldTouched(input2.name);
            return;
        }
        if (!errors[input1.name] && !errors[input2.name]) {
            buttonPressHandler(form);
        }
    };

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
                        style={{ marginBottom: 5 }}
                        placeholder={input1.placeholder}
                        label={input1.label}
                        secure={input1.secure}
                        value={values[input1.name]}
                        onBlur={() => setFieldTouched(input1.name)}
                        onChangeText={handleChange(input1.name)}
                    />
                    {touched[input1.name] && errors[input1.name] && (
                        <Text
                            style={{
                                fontSize: 12,
                                color: "#FF0D10",
                                marginBottom: 20,
                            }}
                        >
                            {errors[input1.name]}
                        </Text>
                    )}
                    <Input
                        style={{ marginBottom: 5 }}
                        placeholder={input2.placeholder}
                        label={input2.label}
                        secure={input2.secure}
                        value={values[input2.name]}
                        onBlur={() => setFieldTouched(input2.name)}
                        onChangeText={handleChange(input2.name)}
                    />
                    {touched[input2.name] && errors[input2.name] && (
                        <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                            {errors[input2.name]}
                        </Text>
                    )}
                </View>
            </View>

            <Button link={link} navigation={navigation} onPress={handleNext}>
                {buttonText}
            </Button>
        </View>
    );
};
