import axios from "axios";
import {LoginFormDto, LoginResponseDto} from "@/api/dto/auth.dto";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post("http://localhost:3000/auth/login", values)).data
}

