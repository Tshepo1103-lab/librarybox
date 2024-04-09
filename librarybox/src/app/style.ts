import { createStyles, css } from "antd-style";


export const useStyles = createStyles({
    layoutStyle: css`
        border-radius: 0;;
        overflow: hidden;
        width: 100%;
        max-width: 100%
        `,
     
    headerStyle: css`
        padding:0;
        background-color: #873e23;
    `,
    
    footerStyle: css`
       background-color: #873e23;
       padding:0;
       z-index:999;
        `,
    contentStyle: css`
    text-align: center;
    height: 88vh;
    color: #000;
    background-color:#000;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
        `
})