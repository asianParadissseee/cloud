import React from 'react';
import {GetServerSidePropsContext} from "next";
import {checkAuth} from "@/utils/check-auth";

function DashboardPage() {
    return (
        <main>
            <h1>
                Dashboard Private
            </h1>
        </main>
    );
};

const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx)

    if ("redirect" in authProps) {
        return authProps
    }

    return  {
        props: {}
    }

}
export {DashboardPage, getServerSideProps}
