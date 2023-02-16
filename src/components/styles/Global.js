import { createGlobalStyle } from "styled-components";
import bgImage from "../../../public/images/bg-intro-desktop.png";

const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        background-image: url(${bgImage});
        background-color: ${({ theme }) => theme.colors.orange};
    }
`;

export default GlobalStyles;
