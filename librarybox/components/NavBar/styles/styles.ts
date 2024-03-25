import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  navContainer: css`
    position: relative;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25em;
    padding: 20px;
    color: #fff;
    cursor: pointer;
  `,
  list: css`
  
  `,
  items: css`
    padding-right: 40px;
    font-size: 20px;
  `,
  li: css`
    margin: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-size: 20px;
    display: inline-block;
    padding: 20px;
  `,
  drawerItems: css`
    text-align: left;
  `,
  logout: css`
    position: absolute;
    bottom: 0;
    padding-bottom: 20px;
    padding-left: 150px;
    color: white; 
    transition: color 0.3s ease;
  `,
  logoutHover: css`
    &:hover {
      color: red; 
    }
  `,
  active: css`
    font-weight: bold;
  `,
  img: css`
    margin-top: 25px;
  `,
});
