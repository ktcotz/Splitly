import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { FormField } from '../_ui/form-field';
import { useLoginForm } from './hooks/useLoginForm';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { PasswordField } from '../_ui/password-field';
import { GitHubButton } from '../_ui/github-button';

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		onSubmit,
		isLoginLoading,
	} = useLoginForm();

	const buttonState = twMerge(
		clsx('p-3 rounded-xl', isLoginLoading ? 'bg-gray-400' : 'bg-primary'),
	);

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
						editable={!isLoginLoading}
						autoFocus
						autoComplete='email'
					/>
				)}
			/>

			<Controller
				control={control}
				name='password'
				render={({ field }) => (
					<PasswordField
						label='Hasło'
						placeholder='*******'
						error={errors.password?.message}
						value={field.value}
						onChangeText={field.onChange}
						editable={!isLoginLoading}
						autoComplete='password'
					/>
				)}
			/>

			<Pressable
				className={buttonState}
				onPress={handleSubmit(onSubmit)}
				disabled={isLoginLoading}
				accessibilityState={{ disabled: isSubmitting || isLoginLoading }}
			>
				{isSubmitting ? (
					<ActivityIndicator color='white' />
				) : (
					<Text className='text-white text-center font-semibold'>Zaloguj się</Text>
				)}
			</Pressable>

			<View className='relative w-full mt-4'>
				<View className='absolute inset-0 flex items-center'>
					<View className='w-full border-t border-border'></View>
				</View>
				<View className='relative -top-2 flex items-center justify-center '>
					<Text className='bg-background px-2 text-muted-foreground text-xs uppercase'>
						Lub kontynuuj z
					</Text>
				</View>
			</View>

			<GitHubButton />
		</View>
	);
};
