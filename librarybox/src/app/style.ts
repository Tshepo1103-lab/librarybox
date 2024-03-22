import { createStyles, css } from "antd-style";


export const useStyles = createStyles({
    layoutStyle: css`
        border-radius: 0;;
        overflow: hidden;
        width: 100%;
        max-width: 100%
        `,
     
    headerStyle: css`
        text-align: right;
        background-color: #873e23;
    `,
    
    footerStyle: css`
        text-align: center;
        color: #fff;
        background-color: #873e23;
        `,
    contentStyle: css`
    text-align: center;
    height: 88vh;
    color: #000;
    background-image: url('/assets/img/Home.JPEG'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
        `
})