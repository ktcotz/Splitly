import { useMutation } from '@tanstack/react-query';
import { login } from '../services/services';

export const useLogin = () => {
	const {
		mutate: loginAction,
		isPending: isLoginLoading,
		isError: isLoginError,
		error: loginError,
	} = useMutation({
		mutationFn: login,
	});

	return { loginAction, isLoginError, isLoginLoading, loginError } as const;
};
