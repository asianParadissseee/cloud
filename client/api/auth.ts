import axios from "axios";
import {LoginFormDto, LoginResponseDto, RegistrationFormDto, RegistrationResponseDto, User} from "@/api/dto/auth.dto";
import {destroyCookie} from "nookies";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post("http://localhost:3000/auth/login", values)).data
}


export const registration = async (values: RegistrationFormDto): Promise<RegistrationResponseDto> => {
    return (await axios.post("http://localhost:3000/auth/registration", values)).data
}

export const getUserId = async (): Promise<User> => {
    return (await axios.post("http://localhost:3000/auth/registration")).data
}

export const logout = () => {
    destroyCookie(null, "_token", {
        path: "/"
    })
}
