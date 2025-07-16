import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './../global.css';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter: require('./../assets/fonts/Inter/Inter.ttf'),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Stack screenOptions={{ headerShown: false }} />
			<Toast />
		</QueryClientProvider>
	);
}
