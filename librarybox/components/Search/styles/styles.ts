import { createStyles,css } from "antd-style";

export const useStyles=createStyles({
  
   container: css`
   color: white;
   font-family: 'Roboto', sans-serif;
   font-size: 20px; 
    font-weight: bold; 
    margin-top:4%;
    `,
    searchContainer: css`
    padding: 5px 100px; 
     
    `,
    searchBox: css`
    width: 50%;
    margin-top: 2%;
    position: fixed;
    color:red;
    z-index: 999;
    text-align: center;
    left: 50%; 
    transform: translateX(-50%); /* Adjust to center */
  `
    ,
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
    data:css`
    grid-gap: 30px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top:10px;
    width:1000px;
    align-items:center;
    margin-left:340px;
    `
})