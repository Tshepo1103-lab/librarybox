import { createStyles ,css} from "antd-style";

export const useStyles=createStyles({
    card:css`
    width: 900px;
    alignItems:'center';
    margin-left:300px;
    margin-top:30px;
    padding: 0;
    overflow: 'hidden';
    background-color: rgba(0,0,0,0.7);
    `,
    sidecard:css`
        width:300px;
        margin-top:30px;
       
    `,
    title:css`
    color:#ffff;
    justify-content:center;
    `,
    btn:css`
    background-color:#873e23;
    `
})