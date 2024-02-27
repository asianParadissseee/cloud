"use client"
import React from 'react';
import {Avatar, Button, Layout, Menu, Popover} from "antd";
import {CloudOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";

export function Header() {

    const router = useRouter()

    return (
        <Layout.Header className="flex justify-between items-center">
                <h2 className="text-white font-bold font-sans text-2xl flex gap-8">
                    <CloudOutlined/>
                    Cloud
                    <Menu
                        className="text-sm"
                        theme={"dark"}
                        mode={"horizontal"}
                        defaultSelectedKeys={["1"]}
                        onSelect={({key}) => router.push(key)}
                        items={[
                            {
                                key: "/dashboard", label: "Главная",
                            }, {
                                key: "/dashboard", label: "Профиль"

                            }
                        ]}
                    />
                </h2>
            <div>
                <Popover
                    trigger={"click"}
                    content={
                        <Button type={"primary"} danger>
                            Выйти
                        </Button>
                    }
                >
                    <Avatar size={"large"} className="bg-white text-black">
                        A
                    </Avatar>
                </Popover>
            </div>
        </Layout.Header>
    );
}

