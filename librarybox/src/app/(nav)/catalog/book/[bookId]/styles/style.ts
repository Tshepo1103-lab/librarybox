import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    main: css`
    background-color: #eab676;
    height: 100vh;

    justify-content: center;
  `,
    container: css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; 
        background-color:#873e23; `,
    card: css`
        width: 500px;
        margin: auto; /* Center horizontally */
        margin-top: 30px;
        padding: 0;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.7);
    `,
    title: css`
        color: #000;
        justify-content: center;
        font-family: 'Old Standard TT', serif;
    `,
    paragraph:css`
    text-align:justify;
    margin-top:15px;
    margin-bottom:15px;
    `,
    btn: css`
        background-color: #873e23;
    `,
    resultContainer: css`
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        background-color: #f5f5f5;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 40%;
        left: 50%;
        border: 5px solid green;
    `,
    resultTitle: css`
        font-size: 24px;
        margin-bottom: 10px;
    `,
    resultSubtitle: css`
        font-size: 16px;
        margin-bottom: 10px;
    `,
    resultExtraButtons: css`
        margin-top: 20px;
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
    imageContainer:css`
    margin-top:40px;
    margin-left:20px;
    border: 2px solid #873e23;
    `
    ,
    findContainer:css`
    width:80%;;
    height:50px;
    border: 2px solid #873e23;
    margin-top:30px;
    `
    ,find:css`
    text-align:left;
    font-family: 'Old Standard TT', serif;
    display: inline-block;
    `,
    findparagraph:css`
    text-align:left;
    margin-top:10px;
    display: inline-block;
    margin-left: 10px;
`,detailsTitle:css`
    text-align:left;
    font-family: 'Old Standard TT', serif;
    margin-top:30px;
    margin-bottom:10px;
    `, twobutton: css`
    width: 180px;
    height: 40px;
    border-radius: 10px;
    background-color: #873e23;
    font-size: 20px;
    margin-right: 10px;
    color: #fff;
    &:hover {
        background-color: #eab676;
        border: 1px solid #fff;
        color: #000;  
    }
`

});
