import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { FlagDetails } from "./pages/FlagDetails";
import { FlagPreviewPage } from "./pages/FlagsPreview";

const App = () => {
  return (
    <div className="font-nunito-sans dark:bg-very-dark-blue-bg min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<FlagPreviewPage />} />
        <Route path="/:id" element={<FlagDetails />} />
      </Routes>
    </div>
  );
};

export default App;
