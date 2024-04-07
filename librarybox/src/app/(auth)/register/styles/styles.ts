import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 100vh;
    background-color: #d3a962;
  `,
  form: css`
  width: 400px;
  padding-top: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(1px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 25px 35px;
  font-family: 'Poppins', sans-serif;
  `,
  loginHeader: css`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  color: #873e23;
  margin-bottom: 50px;
  `,
  container: css`
    background-color: #eab676;
  `,
  header: css`
    margin-bottom: 40px;
  `,
  input: css`
    height: 30px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 5px;
    font-size: 15px;
    font-weight: 200;
    ::placeholder {
      color: #000; 
    }
  `
  ,
  button: css`
  margin-top: 10px;
  width: 100%;
  background-color: #873e23;
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  height: 55px;
  &:hover{
    background-color:#ffffff !important;
    color: #873e23 !important;
    border:2px solid #fff !important;
  }
  `,
  background: css`
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
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
    left: -320px;
    top: -130px;
  `,
  "shape:last-child": css`
    background: linear-gradient(to right, #873e23, #eab676);
    right: -320px;
    bottom: -130px;
  `,
  text: css`
    color: #000;
    text-decoration: none;
    &:hover{
      color:#ffffff;
    }
  `,
});
