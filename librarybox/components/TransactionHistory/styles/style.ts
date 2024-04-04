import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
  height: 88vh;
  color: #000;
  background-image: url("/assets/img/Home.JPEG"); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  `,
  container:css`
  width:70%;
  transform: translateX(25%);
  text-align: center;
  
  margin-top:30px;
  overflow-y:scroll;
  padding:50px;
     
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
  
    border-radius: 5px;
  }
  `,
  items:css`
   background-color:#eab676;
   height:250px;
   border-radius:10px;
  `,
  details:css`
   text-align:left;
   margin-right:50px;
  `,
  status: css`
  width: 300px;
  border: 2px solid #873e23;
  border-radius:10px;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
`,imageContainer:css`
margin-top:40px;
margin-left:20px;
border: 2px solid #873e23;
`

  
});
