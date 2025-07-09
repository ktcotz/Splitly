import { Pressable, Text, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '../_ui/form-field';
import { LoginFormSchema, LoginSchema } from './schemas/login-form-schema';

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginSchema>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: LoginSchema) => {
		console.log('Login data:', data);
	};

	return (
		<View className='flex flex-col gap-4'>
			<Controller
				control={control}
				name='email'
				render={({ field }) => (
					<FormField
						label='Email'
						placeholder='splittly@wp.pl'
						error={errors.email?.message}
						value={field.value}
						onChangeText={field.onChange}
						autoCapitalize='none'
						keyboardType='email-address'
						textContentType='emailAddress'
					/>
				)}
			/>

			<Controller
				control={control}
				name='password'
				render={({ field }) => (
					<FormField
						label='Hasło'
						placeholder='*******'
						secureTextEntry
						error={errors.password?.message}
						value={field.value}
						onChangeText={field.onChange}
					/>
				)}
			/>

			<Pressable
				className='bg-primary p-3 rounded-xl'
				onPress={handleSubmit(onSubmit)}
				disabled={isSubmitting}
			>
				<Text className='text-white text-center font-semibold'>
					{isSubmitting ? 'Logowanie...' : 'Zaloguj się'}
				</Text>
			</Pressable>
		</View>
	);
};
