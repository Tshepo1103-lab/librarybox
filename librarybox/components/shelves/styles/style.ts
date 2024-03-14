import { createStyles,css } from "antd-style";


export const useStyles=createStyles({
    container:css`
    // background-color:#bd7e1f;
    margin-left:150px;
    margin-right:150px;
    margin-bottom:
    align-items:center;
    `,
    cardBox:css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        padding: 30px;
      
      `,
    card:css`
    background: #fff;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out;
    overflow: hidden;
    height:100px;
`    
})