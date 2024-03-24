import { createStyles,css } from "antd-style";

export const useStyles=createStyles({
    searchCard:css`
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out;
    overflow: hidden;
    height:330px;
    width:300px

    `,
    cardBox: css`
      padding: 30px;
      display: inline-flex;
      flex-wrap: nowrap;
      transition: transform 0.9s ease-in-out;
      user-select: none;
      overflow-x:hidden;
    `
})