import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    main: css`
    background-color: #d3a962; /* Adjusted color */
    height: 100vh;
  `,
  container: css`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  `,
  bookcontainer:css`
     height:70vh;
     width:80%;
     border: 2px solid #873e23;
     transform: translate(-50%, -50%);
     position: absolute;
     top: 50%;
     left: 50%;
    `,
  header:css`
  color:#000;
  font-family: 'Old Standard TT', serif;
  `,
  
  team: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  `,
  
  memberContainer: css`
  border: 2px solid #873e23;
    padding: 20px;
    border-radius: 5px;
  `,
  
  memberName: css`
    margin-bottom: 10px;
  `,
  
  memberDescription: css`
    margin-bottom: 15px;
  `,
  member:css`
  border: 2px solid #873e23;;
    padding: 20px;
    border-radius: 5px;
  `,
  
    paragraph:css`
    text-align:justify;
    margin-top:15px;
    margin-bottom:15px;
    `,
});
