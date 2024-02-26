import React, {ReactNode} from 'react';
import Head from "next/head"
import {Tabs} from "antd";
import LoginForm from "@/components/login-form";
import RegistrationForm from "@/components/registration-form";

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>Auth</title>
            </Head>
            <main className="max-w-80 mx-auto my-20">
                <Tabs
                    items={[
                        {
                            label: "Войти",
                            key: "1",
                            children: <LoginForm/>
                        },
                        {
                            label: "Регистрация",
                            key: "2",
                            children: <RegistrationForm/>
                        },
                    ]}
                />
            </main>
        </>
    );
};

export default LoginPage;
