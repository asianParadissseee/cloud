import {GetServerSidePropsContext} from "next";
import nookies from "nookies";
import axios from "axios";
import * as Api from "@/api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const {_token} = nookies.get(ctx)
    axios.defaults.headers.Authorization = `Bearer ${_token}`
    try {
        await Api.auth.getUserId()
        return {
            props: {}
        }
    } catch (e) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }
        }
    }
}
