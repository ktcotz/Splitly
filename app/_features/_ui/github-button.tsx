import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type GitHubButtonProps = {
	isLoading?: boolean;
	disabled?: boolean;
	onPress?: () => void;
};

export const GitHubButton: React.FC<GitHubButtonProps> = ({
	isLoading = false,
	disabled,
	onPress,
}) => {
	const isDisabled = disabled || isLoading;

	const buttonClassName = twMerge(
		clsx(
			'shadow-xs flex-row items-center justify-center border border-border rounded-lg py-3 w-full bg-background',
			isDisabled && 'opacity-50',
		),
	);

	const textClassName = 'text-card-foreground font-semibold text-center ml-2 text-sm';

	return (
		<Pressable onPress={onPress} disabled={isDisabled} className={buttonClassName}>
			{isLoading ? (
				<>
					<ActivityIndicator size='small' color='#000' />
					<Text className={textClassName}>Logowanie...</Text>
				</>
			) : (
				<>
					<FontAwesome name='github' size={20} color='#000' />
					<Text className={textClassName}>Zaloguj się przez GitHub</Text>
				</>
			)}
		</Pressable>
	);
};
