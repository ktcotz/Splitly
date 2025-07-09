import { Text, View } from 'react-native';
import { LoginForm } from '../_features/_auth/login-form';
import { SplittlyLogo } from '../_features/_ui/logo';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../_features/_ui/card';

export default function LoginPage() {
	return (
		<View className='flex-1 justify-center px-6 bg-white'>
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
						<CardDescription>Wprowadź swoje dane, aby się zalogować</CardDescription>
					</CardHeader>
					<CardContent>
						<LoginForm />
					</CardContent>
				</Card>
			</View>
		</View>
	);
}
