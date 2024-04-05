import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    background-color: #d3a962; /* Adjusted color */
    height: 100vh;
  `,
  scroll: css`
    overflow-y: auto;
    height: 80vh;
    padding: 20px;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
    }
  `,
});

