import React from 'react';
import AuthForm from "@/components/auth-form";
import Head from "next/head";
import {Tabs} from "antd";
import RegistrationForm from "@/components/registration-form";

const AuthPage = () => {
    return (
        <>
            <Head>
                <title>Auth</title>
            </Head>
            <main className="max-w-28 mx-auto w-full flex justify-center items-center">
                <Tabs
                    items={[
                        {
                            label: "Войти",
                            key: "1",
                            children: <AuthForm/>
                        },
                        {
                            label: "Зарегистрироваться",
                            key: "2",
                            children: <RegistrationForm/>
                        },
                    ]}
                />
            </main>
        </>
    );
};

export default AuthPage;
