import { KeyboardAvoidingView, ScrollView, Platform, Text, View } from 'react-native';
import { LoginForm } from '../_features/_auth/login-form';
import { SplittlyLogo } from '../_features/_ui/logo';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../_features/_ui/card';
import { Link } from 'expo-router';

export default function LoginPage() {
	return (
		<KeyboardAvoidingView
			className='flex-1 bg-white'
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
		>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
					justifyContent: 'center',
					paddingHorizontal: 24,
				}}
				keyboardShouldPersistTaps='handled'
				showsVerticalScrollIndicator={false}
			>
				<View className='flex flex-col gap-8'>
					<View className='items-center flex flex-col gap-2'>
						<SplittlyLogo />
						<Text className='text-2xl font-bold'>Witaj ponownie w Splitly</Text>
						<Text className='text-muted-foreground text-center'>
							Zaloguj się, aby kontynuować dzielenie wydatków ze znajomymi
						</Text>
					</View>
					<Card>
						<CardHeader>
							<CardTitle>Logowanie</CardTitle>
							<CardDescription>
								Wprowadź swoje dane, aby się zalogować
							</CardDescription>
						</CardHeader>
						<CardContent>
							<LoginForm />
						</CardContent>
						<CardFooter className='flex flex-col gap-4 border-t border-border pt-4'>
							<View className='text-sm text-center text-muted-foreground'>
								<Link
									href='/(auth)/forgot-password'
									className='text-primary hover:underline'
								>
									Zapomniałeś hasła?
								</Link>
							</View>
							<View className='flex flex-row gap-1 text-sm text-center justify-center'>
								<Text>Nie masz jeszcze konta?</Text>
								<Link
									href='/(auth)/register'
									className='text-primary font-medium hover:underline'
								>
									Zarejestruj się
								</Link>
							</View>
						</CardFooter>
					</Card>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
