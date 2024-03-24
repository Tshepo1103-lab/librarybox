import { createStyles,css} from "antd-style";

export const useStyles=createStyles({
navContainer: css `
    position: relative;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0.25em;
    padding: 20px;
    color: #fff;
    cursor: pointer; 

  `,
  profile:css`
  position:absolute;
  right:0;
  `,

    list: css `
    align-items:center;
    margin-left:360px;
    `,
    items: css `
        padding-right:40px;
        font-size:20px;
        
    `,
      li: css `
      margin: 10px 20px;
      cursor: pointer;
      font-size: 18px;
      font-size: 20px;
      display: inline-block;
      padding: 20px;
      `,
      drawerItems:css`
      
      padding-left:100px;
      `,
      logout:css`
      position: absolute;
      bottom:0;
      padding-bottom:20px;
      padding-left:150px;
      `,
      icon:css`
      color:#ffff;
      `,
      active: css `
      font-weight: bold;
    `,
      img: css `
      margin-top: 25px;
    `,
      
       
      
});