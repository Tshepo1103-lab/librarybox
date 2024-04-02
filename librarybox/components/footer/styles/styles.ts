import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  footerContainer: css`
  height: 50px;
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 999;
`,
column: css`
  display: flex;
  align-items: center;
`,
libraryBox: css`
  font-family: 'Old Standard TT', serif; /* Use 'Old Standard TT' font */
  font-weight: bold;
  font-size: 50px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #eab676; 
  }
`
, socials:css`
  font-size: 30px;
  margin-right: 10px;
  transition: color 0.3s ease-in-out;
  &:hover{
    transform: scale(1.2);
    color: #eab676;
  }
`

});
