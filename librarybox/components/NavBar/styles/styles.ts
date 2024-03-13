import { createStyles,css} from "antd-style";

export const useStyles=createStyles({
    navContainer: css `
        position: relative;
        top:0;
        width:100%;
        height:50px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25em;
        padding:20px;
        color:#fff;
        `,
    list: css `
    backgroundcolor:grey;
    `,
    items: css `
        padding-right:40px;
    `,
      li: css `
      margin: 10px 20px;
      cursor: pointer;
      font-size: 18px;
      font-size: 20px;
      display: inline-block;
      padding: 20px;
      `
      
       
      
});