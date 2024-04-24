import React from "react";
import { AuthProvider } from "./AuthContext";
import LoginForm from "./LoginForm";
import renderWithRouter from "./RenderWithRouter";

test("LoginForm renders correctly", () => {
  renderWithRouter(
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  );
});
