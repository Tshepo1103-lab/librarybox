import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  footerContainer: css`
  justify-content: space-between;
  z-index: 999; 
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  padding: 0.25em;
  padding: 20px;
  color: #fff;
  cursor: pointer;
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
