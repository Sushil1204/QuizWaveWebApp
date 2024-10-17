import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/authLayout";
import Login from "./_auth/forms/login";
import Registration from "./_auth/forms/registration";
import RootLayout from "./_root/rootLayout";
import Home from "./_root/pages/Home";
import QuizSetting from "./_root/pages/QuizSetting";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/quiz-setup/:title" element={<QuizSetting />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
