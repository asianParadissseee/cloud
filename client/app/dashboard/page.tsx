import React from 'react';
import { GetServerSidePropsContext} from "next";
import nookies from "nookies"
import axios from "@/core/axios";
import * as Api from "@/api"

export function DashboardPage() {
    return (
        <main>
            <h1>
                Dashboard Private
            </h1>
        </main>
    );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const {_token} = nookies.get(ctx)
    axios.default.headers.Authorization = `Bearer ${_token}`
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
