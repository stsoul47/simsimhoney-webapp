import { RouteObject } from "react-router-dom";
import { Intro, Login } from "@pages/index";

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
	}
];

export {path};