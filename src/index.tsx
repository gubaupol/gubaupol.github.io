import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Hero from "./components/Hero/Hero";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "styled-react-modal";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ModalProvider>
          <Hero />
        </ModalProvider>
      </BrowserRouter>
      <Analytics />
    </RecoilRoot>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(<App />);
