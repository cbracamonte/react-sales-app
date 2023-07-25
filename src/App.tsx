import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { Layout } from "./shared/components";
import { Home, Product, Profile } from "./modules";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/products",
				element: <Product />,
			},
		],
	},
]);

export const App = () => <RouterProvider router={router} />;
