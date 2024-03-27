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
      <div className={styles.main}>
        <div className={styles.background}>
        <div className={`${styles.shape} ${styles["shape:first-child"]}`}></div>
         <div className={`${styles.shape} ${styles["shape:last-child"]}`}></div>

        </div>
        <div className={styles.form}>
            <Form onFinish={handleSubmit}>
              <h3 className={styles.loginHeader}>Login</h3>
            <Form.Item
              name="userNameOrEmailAddress"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className={styles.input}/>
            </Form.Item>
           
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" className={styles.input}/>
            </Form.Item>
            <Form.Item>
              <Button  htmlType="submit" className={styles.button} >
                Log in
              </Button>
              <br /><br />
              <div>
              <a href="/register" className={styles.text}>
                Register now!
              </a></div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
}

export default Login;
