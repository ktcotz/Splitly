import { useForm } from 'react-hook-form';
import { LoginFormSchema, LoginSchema } from '../schemas/login-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../mutations/useLogin';
import Toast from 'react-native-toast-message';

export const useLoginForm = () => {
	const { loginAction, isLoginLoading } = useLogin();

	const form = useForm<LoginSchema>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: LoginSchema) => {
		loginAction(data, {
			onSuccess: () => {
				Toast.show({
					type: 'success',
					text1: 'Zalogowano pomyślnie',
				});
			},
			onError: () => {
				Toast.show({
					type: 'error',
					text1: 'Błąd logowania',
				});
			},
		});
	};

	return { ...form, onSubmit, isLoginLoading };
};
