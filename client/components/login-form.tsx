"use client"
import React from 'react';
import {Button, Form, Input} from "antd";

export default function LoginForm() {

    const handleSubmit = (values: Record<string, string>)=>{
        console.log(values)
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
                    <Button  type="primary"   size={"large"} htmlType={"submit"}>
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

