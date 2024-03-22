import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    margin-left: 150px;
    margin-right: 150px;
    margin-bottom: 20px;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    cursor: grab;
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
    cursor: pointer;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    overflow: hidden;
    width: 250px;
    height: 300px;
    margin-right: 20px;
    position: relative;
    opacity: 0.8; 
    &:hover {
      background: linear-gradient(to bottom right,#fff, #eab676, #873e00);
      opacity: 1; 
      transform: scale(1.1); /* Zoom in */
    }
  `,
});
