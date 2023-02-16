import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Heading from "./components/Heading";
import Form from "./components/Form";

const theme = {
  colors: {
    orange: "#FF7979",
    green: "#38CC8B",
    purple: "#5E54A4",
    darkGray: "#3D3B48",
  },
};

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Heading />
        <Form />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
