import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/authLayout";
import Login from "./_auth/forms/login";
import RootLayout from "./_root/rootLayout";
import Home from "./_root/pages/Home";
import QuizSetting from "./_root/pages/QuizSetting";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/quiz-setup/:title" element={<QuizSetting />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
