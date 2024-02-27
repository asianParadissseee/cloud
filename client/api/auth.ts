import axios from "axios";
import {LoginFormDto, LoginResponseDto, RegistrationFormDto, RegistrationResponseDto} from "@/api/dto/auth.dto";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post("http://localhost:3000/auth/login", values)).data
}


export const registration = async (values: RegistrationFormDto): Promise<RegistrationResponseDto> => {
    return (await axios.post("http://localhost:3000/auth/registration", values)).data
}
