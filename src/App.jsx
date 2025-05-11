import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componunt/Navbar";
import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core'; // ✅ Import MantineProvider

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS> {/* ✅ Wrap your app */}
      <Navbar />
    </MantineProvider>
  );
}

export default App;
