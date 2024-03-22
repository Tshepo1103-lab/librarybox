'use client';
import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,Checkbox } from 'antd';
import { useStyles } from './styles/styles';
import { ILogin } from '../../../../Providers/LoginProviders/context';
import { useUser } from '../../../../Providers/LoginProviders';

const Login = () => {
    const [name, setName] = useState("");
    const { loginUser } = useUser();
    const { styles } = useStyles();
    
   

    const handleSubmit = async (values:ILogin) => {
        console.log('Received values of form: ', values);
        if(loginUser){
            loginUser (values);
            localStorage.setItem('name', values.userNameOrEmailAddress)
          }

    };
    

    return (
        <div className={styles.container}>
            <Form onFinish={handleSubmit}>
            <Form.Item
              name="userNameOrEmailAddress"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a  href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                Log in
              </Button>
              <br /><br />
              <div>
              <a href="/register">
                Register now!
              </a></div>
            </Form.Item>
          </Form>
        </div>
    );
}

export default Login;
