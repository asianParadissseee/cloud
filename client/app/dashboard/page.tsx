import React from 'react';
import {GetServerSidePropsContext} from "next";
import {checkAuth} from "@/utils/check-auth";
import {Header} from "@/components/header";

export default function DashboardPage() {
    return (
        <main>
            <Header/>
            <h1>
                Dashboard Private
            </h1>
        </main>
    );
}

// export default async function getServerSideProps(ctx: GetServerSidePropsContext) {
//     const authProps = await checkAuth(ctx)
//
//     if ("redirect" in authProps) {
//         return authProps.props
//     }
//
//     return {
//     }
//
// }
