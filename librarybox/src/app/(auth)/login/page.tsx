'use client';

import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useStyles } from './styles/styles';
import Image from "next/image";

const Login = () => {
    const {styles}=useStyles();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };
    
      return (
        <div className={styles.container}>
            <Form
            name="normal_login"
            className={styles.form}
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <div className={styles.header}>
            <h2>Login</h2>
            <p>Welcome back, please login to your account</p>
            </div>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button><br/>
                Or <a href="/register">register now!</a>
            </Form.Item>
            </Form>
            <div>
                {/* <Image src="/img/Boyreading.jpg" alt="Stack of books" width={500} height={400}/> */}
            </div>
        </div>
      );
}

export default Login