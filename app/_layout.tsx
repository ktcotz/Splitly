import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import './../global.css';
import { useEffect } from 'react';

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

	return <Stack screenOptions={{ headerShown: false }} />;
}
