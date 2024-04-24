import { render } from "@testing-library/react";
import { AuthProvider, useAuth } from "./AuthContext";

test("AuthProvider sets initial state correctly", () => {
  const TestComponent = () => {
    const { isLoggedIn, username } = useAuth();
    return (
      <>
        <div data-testid="isLoggedIn">{`${isLoggedIn}`}</div>
        <div data-testid="username">{`${username}`}</div>
      </>
    );
  };

  const { getByTestId } = render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("isLoggedIn").textContent).toBe("false");
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("username").textContent).toBe("");
});
