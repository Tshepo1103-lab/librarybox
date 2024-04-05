import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
  background-image: url("/assets/img/cover.jpeg"); 
  `,
  form: css`
    width: 400px;
    padding-top: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    font-family: 'Poppins', sans-serif;
  `,
  loginHeader: css`
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 50px;
  `,
  container: css`
  background-color: #eab676;
  `,
  header: css`
    margin-bottom: 40px;
  `,
  input: css`
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    ::placeholder {
      color: #ffffff; 
    }
  `,
  button: css`
    margin-top: 10px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    height: 55px;
  `,
  background: css`
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
  `,
  shape: css`
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
  `,
  "shape:first-child": css`
    background: linear-gradient(#ffffff, #fff);
    left: -300px;
    top: -90px;
  `,
  "shape:last-child": css`
    background: linear-gradient(to right, #873e23, #eab676);
    right: -300px;
    bottom: -90px;
  `,
  text:css`
  color:#ffffff;
  text-decoration: none
  `
});
