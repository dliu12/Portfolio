import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { UnfoundPage, Introduction } from "./pages";
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { ProjectTemplate } from "./Shared";
import { generalNavigation } from "./general_util";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <UnfoundPage />,
		children: [
			{
				path: "/",
				element: <Introduction />,
			},
			{
				path: "/web",
				element: <ProjectTemplate title='Web Development Projects' navigation={generalNavigation} />,
				children: [
					{ path: "smash", element: <div>smash</div> },
					{ path: "/web/3D_smash", element: <div>3d smash</div> },
				],
			},
			{ path: "other", element: <ProjectTemplate title='Other Projects' navigation={generalNavigation} /> },

			//TODO: fill in rest of the paths later on...
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
