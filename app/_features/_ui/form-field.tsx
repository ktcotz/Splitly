import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Label } from './label';
import { Input } from './input';
import { cn } from '@/app/lib/utils';
import { forwardRef } from 'react';

type FormFieldProps = {
	label: string;
	error?: string;
} & TextInputProps;

export const FormField = forwardRef<TextInput, FormFieldProps>(
	({ label, error, placeholder, secureTextEntry, className, ...props }, ref) => {
		return (
			<View className='flex flex-col gap-2 w-full'>
				<Label className={cn('text-foreground', error && 'text-destructive')}>
					{label}
				</Label>
				<TextInput
					ref={ref}
					placeholder={placeholder}
					secureTextEntry={secureTextEntry}
					className={cn(
						'border border-border bg-white text-foreground px-4 py-2 rounded-lg',
						error && 'border-destructive',
						className,
					)}
					placeholderTextColor='#9CA3AF'
					{...props}
				/>
				{error && <Text className='text-sm text-destructive'>{error}</Text>}
			</View>
		);
	},
);

FormField.displayName = 'FormField';
