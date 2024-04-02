import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    main: css`
    background-color: #eab676;
    height: 100vh;
    display: flex;
    justify-content: center;
    `,
    list: css`
    border-radius: 15px;
    width: 250%;
    transform: translateX(-25%);
    text-align: center;
    background-color: #ba946c;
    margin-top: 40px;
    height: 60vh;
    opacity: 0.8;
    overflow-y: scroll; 
    
    `,
    title: css`
        color: #000;
        font-family: 'Old Standard TT', serif;
        margin-top:30px;
    `,
    items: css`
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
        background-color: #873e23;
        text-align:center;
        &:hover {
            border: 2px solid #fff;
        }
    `,
    itemText: css`     
        width:100%;
        color: white; /* Add this line to ensure text color */
    `
});
