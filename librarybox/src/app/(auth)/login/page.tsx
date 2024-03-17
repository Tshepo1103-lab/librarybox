'use client';
import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useStyles } from './styles/styles';
import { ILogin } from '../../../../Providers/LoginProviders/context';
import { useUser } from '../../../../Providers/LoginProviders';

const Login = () => {
    const { styles } = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   

    const handleSubmit = async (values:ILogin) => {
        console.log('Received values of form: ', values);

        try {
            // Extract username and password from form values
            const { userNameOrEmailAddress, password } = values;
    
            // Checks if the user provided credentials
            if (username && password) {
                const data = await login({
                    username,
                    password
                });
                localStorage.setItem('token', data.result.accessToken);
            }
        } catch (error) {
            setError("Invalid username or password");
            console.error(error);
        }
    };
    

    return (
        <div className={styles.container}>
            <Form
                name="normal_login"
                className={styles.form}
                initialValues={{ remember: true }}
                onFinish={handleSubmit}>
                <div className={styles.header}>
                    <h2>Login</h2>
                    <p>Welcome back, please login to your account</p>
                </div>
                <Form.Item
                    name="userNameOrEmailAddress"
                    rules={[{ required: true, message: 'Please input your Username!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button><br />
                    Or <a href="/register">register now!</a>
                </Form.Item>
            </Form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;
