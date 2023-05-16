import { RouteObject } from "react-router-dom";
import { Category, Home, Intro, Login, NewnessLike, NewnessStore, Result, SaveNewness } from "@pages/index";
import HomeLayout from "@components/layout/HomeLayout";
import NewnessLayout from "@components/layout/NewnessLayout";

/**
 * router path 정리 
 * 
 * @author colen
 * @since 2023-03-11
 */
const path: RouteObject[] = [
	{
		path: "", 
		element: <Intro />
	},
	{
		path: "login",
		element: <Login />
	},
	{
		path: "home",
		element: <HomeLayout />, //header, content
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "result",
				element: <Result />
			},
		]
	},
	{
		path: "newness",
		element: <NewnessLayout />,
		children: [
			{
				path: "category",
				element: <Category />
			},
			{
				path: "save",
				element: <SaveNewness />
			},
			{
				path: "store",
				element: <NewnessStore />
			},
			{
				path: "like",
				element: <NewnessLike />
			}
		]
	}

];

export {path};