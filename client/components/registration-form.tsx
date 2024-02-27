"use client"
import React from 'react';
import {Button, Form, Input, notification} from "antd";
import * as Api from "@/api"
import {RegistrationFormDto, RegistrationResponseDto} from "@/api/dto/auth.dto";
import {setCookie} from "nookies";

export function RegistrationForm() {

    const handleSumbit = async (values: RegistrationFormDto)=> {
            try {
                const {token} = await Api.auth.registration(values)
                notification.success({
                    message: "Регистрация прошла успешно !",
                    description: "Переходим в админ-панель",
                    duration: 2
                })
                setCookie(null, "_token", token, {
                    path: "/"
                })
                location.href = "/dashboard"
            }catch (e) {

            }
    }

    return (
        <div>
            <Form
                name={"basic"}
                labelCol={{
                    span: 8,
                }}
                onFinish={handleSumbit}
            >
                <Form.Item
                    label={"E-mail"}
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            message: "Укажите почту"
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Name"}
                    name={"name"}
                    rules={[
                        {
                            required: true,
                            message: "Укажите имя"
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label={"Password"}
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Укажите пароль"
                        }
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}
                >
                    <Button type="primary" size={"large"} color={"blue"}  htmlType={"submit"}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

