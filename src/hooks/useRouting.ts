import { useNavigate } from "react-router-dom";

const useRouting = () => {
	const navigate = useNavigate();

	const goToIntro = () => {
		navigate(`/`);
	}

	const goToBack = () => {
		navigate(-1);
	}

	const goToPage = (path: string, params?: any) => {
		navigate(path, params);
	}

	return {
		goToIntro,
		goToBack,
		goToPage
	};
}
export {useRouting};