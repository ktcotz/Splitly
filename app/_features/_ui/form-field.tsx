import { Text, TextInput, TextInputProps, View } from 'react-native';
import { Label } from './label';
import { cn } from '@/app/lib/utils';
import { forwardRef, ReactNode } from 'react';

export type FormFieldProps = {
	label: string;
	error?: string;
	rightIcon?: ReactNode;
} & TextInputProps;

export const FormField = forwardRef<TextInput, FormFieldProps>(
	(
		{ label, editable, rightIcon, error, placeholder, secureTextEntry, className, ...props },
		ref,
	) => {
		return (
			<View className='flex flex-col gap-2 w-full'>
				<Label className={cn('text-foreground', error && 'text-destructive')}>
					{label}
				</Label>
				<View className='relative'>
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
						editable={editable}
						{...props}
					/>
					{rightIcon && (
						<View className='absolute right-3 top-1/2 -translate-y-1/2'>
							{rightIcon}
						</View>
					)}
				</View>
				{error && <Text className='text-sm text-destructive'>{error}</Text>}
			</View>
		);
	},
);

FormField.displayName = 'FormField';
