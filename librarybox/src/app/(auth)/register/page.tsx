'use client'
import React from 'react';
import { Button, Form, Input } from 'antd';
import { useUser } from '../../../../Providers/LoginProviders';
import { useStyles } from './styles/styles'; // Ensure correct import path

const Register = () => {
  const { styles } = useStyles(); // Destructure styles from useStyles
  const [form] = Form.useForm();
  const { createUser } = useUser();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    const roleNames = ['user'];
    if (createUser) {
      createUser({ ...values });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <div className={`${styles.shape} ${styles['shape:first-child']}`}></div>
        <div className={`${styles.shape} ${styles['shape:last-child']}`}></div>
      </div>
      <Form
        name="register"
        form={form}
        onFinish={onFinish}
        initialValues={{ prefix: '27' }}
        className={styles.form} // Apply styles.form className here
      >
        <div className={styles.header}>
          <h2 className={styles.loginHeader}>Register</h2>
          <p>Create an account</p>
          </div>
              <Form.Item
                  name="userName"
                  rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
              >
                  <Input placeholder="Username" className={styles.input}/>
              </Form.Item>
              <Form.Item
                  name="emailAddress"
                  rules={[
                      { type: 'email', message: 'The input is not valid E-mail!' },
                      { required: true, message: 'Please input your E-mail!' },
                  ]}
              >
                  <Input placeholder="E-mail" className={styles.input}/>
              </Form.Item>
              <Form.Item
                  name="name"
                  rules={[
                      { type: 'string', message: 'The input is not valid E-mail!' },
                      { required: true, message: 'Please input your E-mail!' },
                  ]}
              >
                  <Input placeholder="Name" className={styles.input}/>
              </Form.Item>
              <Form.Item
                  name="surname"
                  rules={[
                      { type: 'string', message: 'The input is not valid E-mail!' },
                      { required: true, message: 'Please input your E-mail!' },
                  ]}
              >
                  <Input placeholder="Surname" className={styles.input}/>
              </Form.Item>
              <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  hasFeedback
              >
                  <Input.Password placeholder="Password" className={styles.input} />
              </Form.Item>
              <Form.Item
                  name="phoneNumber"
                  rules={[
                      { type: 'string', message: 'The input is not valid E-mail!' },
                      { required: true, message: 'Please input your E-mail!' },
                  ]}
              >
                  <Input placeholder="Phone" className={styles.input}/>
              </Form.Item>
              <Form.Item >
                  <Button type="primary" htmlType="submit" className={styles.button}>
                      Register
                  </Button>
        </Form.Item>
        {/* Anchor tag */}
        <a href="/login" className={styles.text}>
          Already have an account
        </a>
      </Form>
    </div>
  );
};

export default Register;
