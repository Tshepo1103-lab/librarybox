import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 20px; 
    font-weight: bold; 
    margin-top: 4%;
  `,
  searchContainer: css`
    padding: 5px 100px; 
  `,
  title: css`
    margin-bottom: 10px;
  `,
  searchBox: css`
    width: 50%;
    margin-top: 2%;
    position: fixed;
    height:50px;
    z-index: 999;
    left: 50%; 
    transform: translateX(-50%); 
  `,
  searchCard: css`
  color:transparent;
  opacity: 1;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
  transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
  overflow: hidden;
  height: 300px;
  width: 220px;
  &:hover {
    background: linear-gradient(to bottom right,#fff, #eab676, #873e00) !important;
    transform: scale(1.1); /* Zoom in */
    color: #000;
    font-family: 'Old Standard TT', serif;
    z-index:999;
  }
  `,
  data: css`
    
    grid-gap: 20px;
    padding: 30px;
    overflow-x:hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 70px;
    width: 90%
    align-items: center;
  
    overflow-y: auto; /* Make the data section scrollable */
    max-height: calc(95vh - 200px); /* Adjust the max height based on your layout */
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
    }
  `
});