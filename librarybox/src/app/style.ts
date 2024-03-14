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
        background-color: #6b8e91;
    `,
    
    footerStyle: css`
        text-align: center;
        color: #fff;
        background-color: #6b8e91;
        `,
    contentStyle: css`
        text-align: center;
        height: 88vh;
        color: #000;
        background-color: #f8ebe0;
        `
})