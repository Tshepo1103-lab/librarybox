'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/NavBar/navbar";
import FooterContainer from "../../components/footer/footer";
import { Layout, Flex } from 'antd';

import { useStyles } from "./style";
import BookProvider from "../../Providers/BookProviders";
import { UserProvider } from "../../Providers/LoginProviders";

const inter = Inter({ subsets: ["cyrillic"] });
const { Header, Footer, Sider, Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { styles } = useStyles();
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
        </head>
      <body className={inter.className} style={{ height: '100%', margin: 0, }}>
        <UserProvider>
        <BookProvider>
        <Flex gap="middle" wrap="wrap" style={{ height: '100%' }}>
          <Layout className={styles.layoutStyle} style={{ height: '100%',}}>
            <Header className={styles.headerStyle}><NavBar/></Header>
            <Content className={styles.contentStyle}> {children}</Content>
            <Footer className={styles.footerStyle}><FooterContainer/></Footer>
          </Layout>
        </Flex>
        </BookProvider>
        </UserProvider>
        
      </body>
    </html>
  );
}
