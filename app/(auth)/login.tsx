import { Link, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function LoginPage() {
	const router = useRouter();

	return (
		<View>
			<Text>Login Page!</Text>
			<Button title='Zaloguj się!' onPress={() => router.push('/(dashboard)/dashboard')} />
			<Link href='/(auth)/register'>Zarejestruj się</Link>
		</View>
	);
}
