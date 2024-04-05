import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    background-color: #eab676;
    height: 100vh;

    justify-content: center;
  `,
  data: css`
    grid-gap: 30px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 10px;
    width: 1200px;
    align-items: center;
    margin-left: 250px;
    overflow-y:auto;
    height: 70vh;
    &::-webkit-scrollbar {
      width: 5px;
    }
  
    &::-webkit-scrollbar-thumb {
    
      border-radius: 5px;
    }
    
  `,
  searchCard: css`
    background: linear-gradient(to bottom right, #fff, #eab676, #873e23);
    transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out;
    overflow: hidden;
    height: 350px;
    width: 230px;
    &:hover {
      background: linear-gradient(to bottom right, #fff, #eab676, #873e00);
      opacity: 1;
      border: 2px solid #fff;
      transform: scale(1.1); /* Zoom in */
    }
  `,
  title: css`
    margin-bottom: 10px;
  `,
  header: css`
    color: #000;
    font-family: 'Old Standard TT', serif;
    
  `,
});
