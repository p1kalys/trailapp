import "./App.css";
import MainPage from "./pages/MainPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <MainPage />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3500,
          style: {
            fontSize: "1rem",
            borderRadius: "8px",
            background: "#fff",
            color: "#2F395C",
            boxShadow: "0 2px 8px rgba(47,57,92,0.08)",
          },
          success: {
            iconTheme: {
              primary: "#CEFF66",
              secondary: "#2F395C",
            },
          },
          error: {
            style: {
              background: "#ffeaea",
              color: "#d32f2f",
            },
            iconTheme: {
              primary: "#d32f2f",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
