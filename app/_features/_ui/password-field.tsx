import { Pressable } from 'react-native';
import { FormField, FormFieldProps } from './form-field';
import { usePasswordToggle } from './hooks/use-password-toggle';
import { Feather } from '@expo/vector-icons';

type PasswordFieldProps = Omit<FormFieldProps, 'secureTextEntry' | 'rightIcon'>;

export const PasswordField = ({ ...props }: PasswordFieldProps) => {
	const { isVisible, toggleVisibility } = usePasswordToggle();

	return (
		<FormField
			{...props}
			secureTextEntry={!isVisible}
			rightIcon={
				<Pressable onPress={toggleVisibility} hitSlop={8}>
					<Feather name={isVisible ? 'eye' : 'eye-off'} size={16} color='#9CA3AF' />
				</Pressable>
			}
		/>
	);
};
