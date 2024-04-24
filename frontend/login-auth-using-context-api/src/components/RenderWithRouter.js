import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Render function with MemoryRouter
const renderWithRouter = (ui) => {
  return render(ui, { wrapper: MemoryRouter });
};

export default renderWithRouter;
