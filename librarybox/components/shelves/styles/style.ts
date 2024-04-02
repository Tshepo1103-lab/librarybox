import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    margin-left: 90px;
    margin-right: 90px;
    margin-bottom: 20px;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    cursor: grab;
    
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
  
    border-radius: 5px;
  }
`,
  header:css`
  color:#000;
  font-family: 'Old Standard TT', serif;
  `,
  headercontainer: css`
  margin-left:40px;
  margin-right:40px;
  height: 40px;
  background-color: #eab676;
  opacity: 1; 
`,
  cardBox: css`
    padding: 30px;
    display: inline-flex;
    flex-wrap: nowrap;
    transition: transform 0.9s ease-in-out;
    user-select: none;
  `,
  card: css`
    background: linear-gradient(to bottom right,#fff, #eab676, #873e23);
    border-radius: 20px;
    color:#000;
    border:1px solid #fff;
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    overflow: hidden;
    width: 250px;
    height: 100px;
    margin-right: 20px;
    position: relative;
    opacity: 0.8; 
    &:hover {
      background: linear-gradient(to bottom right,#fff, #eab676, #873e00);
      opacity: 1; 
      border:2px solid #fff;
      transform: scale(1.1); /* Zoom in */
    }
  `,
});
