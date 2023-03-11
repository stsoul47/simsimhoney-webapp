import { RouteObject } from "react-router-dom";
import Intro from "@pages/Intro";

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
	}
];

export {path};