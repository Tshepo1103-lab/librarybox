import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    main: css`
    background-color:  #d3a962;
    height: 100vh;
    display: flex;
    justify-content: center;
    `,
    list: css`
    border-radius: 15px;
    width: 350%;
    transform: translateX(-25%);
    text-align: center;
    background-color: #ba946c;
    margin-top: 40px;
    height: 60vh;
    opacity: 0.8;
    overflow-y: scroll; 
    &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
      
        border-radius: 5px;
      }
    
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
        border-radius:5px;
        text-align:center;
        &:hover {
            background-color:#eab676;
        }
    `,
    itemText: css`     
        width:100%;
        color: white; /* Add this line to ensure text color */
    `
});
