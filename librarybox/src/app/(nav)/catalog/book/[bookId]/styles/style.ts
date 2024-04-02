import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Optional: Adjust the height as needed */
    `,
    card: css`
        width: 900px;
        margin: auto; /* Center horizontally */
        margin-top: 30px;
        padding: 0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.7);
    `,
    sidecard: css`
        width: 300px;
        margin-top: 30px;
    `,
    title: css`
        color: #ffff;
        justify-content: center;
    `,
    btn: css`
        background-color: #873e23;
    `,
    resultContainer: css`
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        background-color: #f5f5f5;
    `,
    resultTitle: css`
        font-size: 24px;
        margin-bottom: 10px;
    `,
    resultSubtitle: css`
        font-size: 16px;
        margin-bottom: 10px;
    `,
    resultExtraButtons: css`
        margin-top: 20px;
    `
});
