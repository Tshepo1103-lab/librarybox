import { createStyles,css } from "antd-style";

export const useStyles=createStyles({
    main:css`
    overflow-y:auto;
    height:88vh;
    &::-webkit-scrollbar {
        width: 5px;
      }
    
      &::-webkit-scrollbar-thumb {
      
        border-radius: 5px;
      }
    
      
   
    `
})