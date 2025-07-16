import { API_PATHS, BASE_URL } from '@/app/services/api';
import { LoginSchema } from '../schemas/login-form-schema';

export const login = async (payload: LoginSchema) => {
	const url = `${BASE_URL}/${API_PATHS.LOGIN}`;

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (!response.ok) {
		throw new Error(`Wystąpił błąd z serwisem, spróbuj ponownie później.`);
	}

	const data = await response.json();

	return data;
};
