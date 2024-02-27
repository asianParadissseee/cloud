"use client"
import React from 'react';
import {Button, Form, Input, notification} from "antd";
import {LoginFormDto} from "@/api/dto/auth.dto";
import * as Api from "@/api"
import {setCookie} from "nookies";

export default function LoginForm() {

    const handleSubmit = async (values: LoginFormDto) => {
        try {
            const {token} = await Api.auth.login(values)
            notification.success({
                message: "Успешно !",
                description: "Переходим в админ-панель",
                duration: 2
            })

            setCookie(null, "_token", token, {
                path: "/"
            })

        } catch (e) {
            console.warn("Loginform", e)
            notification.error({
                message: "Произошла ошибка авторизации",
                description: "Неверено введены данные",
                duration: 2
            })
        }
    }
    return (
        <div>
            <Form name={"basic"}
                  labelCol={{
                      span: 8,

                  }}
                  onFinish={handleSubmit}
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
                    <Button type="primary" size={"large"} htmlType={"submit"}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

