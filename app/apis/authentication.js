import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_API_URL } from "../constants";

export const login = async (email, password) => {
    try {
        const url = `${BASE_API_URL}/auth/login`;
        const response = await axios.post(url, {
            email,
            password,
            rememberMe: false,
        });
        if (response.status === 200) {
            const {
                jwtToken,
                email,
                contactEmail,
                affiliateLink,
                firstName,
                lastName,
                business,
                phoneNumber,
                username,
                imgData,
                roles,
            } = response.data;
            await AsyncStorage.setItem("@token", jwtToken);
            await AsyncStorage.setItem(
                "data",
                JSON.stringify({
                    email,
                    contactEmail,
                    affiliateLink,
                    firstName,
                    lastName,
                    business,
                    phoneNumber,
                    username,
                    imgData,
                    roles,
                })
            );
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false; // or return some default value
    }
};
