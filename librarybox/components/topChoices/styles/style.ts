import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    padding: 20px 50px; 
    margin-bottom: 3%; 
  `,
  title: css`
    color: #fff;
  `,
  titlecontainer: css`
    height: 40px;
    background-color: #000;
    opacity: 0.8; 
  `,
  searchCard: css`
    background: linear-gradient(to bottom right,#fff, #eab676, #873e00);;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
    overflow: hidden;
    height: 300px;
    width: 250px;
    &:hover {
      color:transparent;
      background: url('assets/img/bookCover.jpg') center/contain; /* Adjust the image URL and properties */
      opacity: 1; 
      transform: scale(1.1); /* Zoom in */
    }
  `,
  cardBox: css`
  padding: 20px;
  display: flex;
  justify-content: space-between; /* Add space between flex items */
  flex-wrap: nowrap;
  transition: transform 0.9s ease-in-out;
  user-select: none;
  overflow-x: hidden;  
`,
});
