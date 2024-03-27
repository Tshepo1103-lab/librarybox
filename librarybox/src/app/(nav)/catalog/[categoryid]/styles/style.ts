import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    list: css`
        position:absolute;
        left: 50%;
        transform: translate(-50%, 10%);
        border-radius: 15px;
        width: 40%;
        text-align: center;
        align-items: center;
        background-color: #ba946c;
        justify-content: center;
        align-items: center; 
        margin-top: 40px;
        height: 60vh;
        opacity: 0.8; 
    `,
    title: css`
        color: #000;
    `,
    items: css`
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
        background-color:#873e23;
        &:hover {
            border: 2px solid #fff;
        }
    `
});
