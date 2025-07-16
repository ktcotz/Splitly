import { Pressable, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { FormField } from '../_ui/form-field';
import { useLoginForm } from './hooks/useLoginForm';

export const LoginForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		onSubmit,
		isLoginLoading,
	} = useLoginForm();

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
						editable={!isLoginLoading}
					/>
				)}
			/>

			<Pressable
				className='bg-primary p-3 rounded-xl'
				onPress={handleSubmit(onSubmit)}
				disabled={isLoginLoading}
				accessibilityState={{ disabled: isSubmitting || isLoginLoading }}
			>
				<Text className='text-white text-center font-semibold'>
					{isSubmitting ? 'Logowanie...' : 'Zaloguj się'}
				</Text>
			</Pressable>
		</View>
	);
};
