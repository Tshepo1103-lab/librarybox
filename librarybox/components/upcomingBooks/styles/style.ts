import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    padding: 20px 50px; 
    margin-bottom: 3%; 
  `,
  title: css`
    color: #000;
    font-family: 'Old Standard TT', serif;
  `,
  titlecontainer: css`
    height: 40px;
    opacity: 1; 
  `,
  searchCard: css`
    color:transparent;
    background: url('assets/img/bookCover.jpg') center/contain; 
    opacity: 1;,
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    overflow: hidden;
    height: 300px;
    width: 250px;
    &:hover {
      background: linear-gradient(to bottom right,#fff, #eab676, #873e00);;
      transform: scale(1.1); /* Zoom in */
      color:#000;
      z-index:999;
    }
  `,
  cardBox: css`
  padding: 30px;
  display: flex;
  justify-content: space-between; 
  flex-wrap: nowrap;
  transition: transform 0.9s ease-in-out;
  user-select: none;
  overflow-x: hidden;  
`,
});
