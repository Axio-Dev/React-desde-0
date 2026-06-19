import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const ProfessionalApp = () => {
  return (
    <div className="bg-gradient flex">
      <RouterProvider router={appRouter} />
    </div>
  );
};
