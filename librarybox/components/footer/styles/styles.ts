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
});
