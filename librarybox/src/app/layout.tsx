'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 import NavBar from "../../components/NavBar/navbar";
import FooterContainer from "../../components/footer/footer";
import { Layout, Flex } from 'antd';
import { UserProvider } from "../../Providers/LoginProviders";
import { useStyles } from "./style";
import BookProvider from "../../Providers/BookProviders";

const inter = Inter({ subsets: ["latin"] });
const { Header, Footer, Sider, Content } = Layout;

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Landing page of the app",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {styles} = useStyles();
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <BookProvider>
            <Flex gap="middle" wrap="wrap">
            <Layout className={styles.layoutStyle}>
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
