import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  navContainer: css`
    position: relative;
    top: 0;
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    padding: 0.25em;
    padding: 20px;
    color: #fff;
    cursor: pointer;
  `,
  picContainer:css`
  padding:20px;
  `,
  list: css`
  display: flex;
  width:100%;
  justify-content: center !important; 
  align-items: center;
  flex-grow: 1;
  `,
  items: css`
    padding-right: 40px;
    font-size: 20px;
    color: #ffffff;
    &:hover {
      color: #eab676;
      transform: scale(1.7); 
    }
  `,
  li: css`
    margin: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-size: 20px;
    display: inline-block;
    padding: 20px;
   
  `,
  profileButton:css`
  color:#ffff;
  background: #873e23;
  position:absolute;
  right:0;
  top:15px;
  margin-right:20px;
`, 

  drawerItems: css`
    text-align: left;
    color: #000;
    font-family: 'Old Standard TT', serif;
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
      color: #d3a962;; 
    }
  `,
  active: css`
    font-weight: bold;
  `,
  img: css`
    margin-top: 25px;
  `,
  drawer:css`
  background-color:#873e23`
});
