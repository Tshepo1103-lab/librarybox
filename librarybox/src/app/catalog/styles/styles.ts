import { createStyles,css } from "antd-style";

export const useStyles=createStyles({
        container:css`
      
         position: relative; /* Change to relative position */
         bottom: 0;
        `,
        searchContainer:css`
      
        margin:50px;
        padding:50px;
        `,
        searchBox:css`
        width:50%;
        `
})