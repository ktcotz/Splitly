import z from 'zod';

export const LoginFormSchema = z.object({
	email: z.string().nonempty('Email jest wymagany').email('Niepoprawny adres email'),
	password: z
		.string()
		.nonempty('Hasło jest wymagane')
		.min(6, 'Hasło musi mieć co najmniej 6 znaków'),
});

export type LoginSchema = z.infer<typeof LoginFormSchema>;
