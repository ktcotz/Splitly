import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

export default function DashboardLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#10b981',
				tabBarInactiveTintColor: '#1b202e',
				tabBarStyle: {
					elevation: 0,
					backgroundColor: '#ffffff',
					borderTopColor: '#e2e8f0',
					height: 64,
					paddingVertical: 0,
				},
				tabBarItemStyle: {
					height: '100%',
					padding: 0,
					margin: 0,
				},
				tabBarIconStyle: {
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 0,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: 'Inter',
				},
			}}
		>
			<Tabs.Screen name='dashboard' options={{ href: null }} />
			<Tabs.Screen
				name='groups'
				options={{
					title: 'Groups',
					tabBarButton: (props) => {
						return <Pressable {...props} android_ripple={{ color: 'transparent' }} />;
					},
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								size={20}
								name='home'
								color={focused ? '#10b981' : '#1b202e'}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='friends'
				options={{
					title: 'Friends',
					tabBarButton: (props) => {
						return <Pressable {...props} android_ripple={{ color: 'transparent' }} />;
					},
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								size={20}
								name='users'
								color={focused ? '#10b981' : '#1b202e'}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='scan'
				options={{
					title: 'Scan',
					tabBarButton: (props) => {
						return <Pressable {...props} android_ripple={{ color: 'transparent' }} />;
					},
					tabBarIcon: ({ focused }) => {
						return (
							<View className='-top-6 bg-[#10b981] h-16 rounded-full aspect-square flex items-center justify-center'>
								<FontAwesome
									size={20}
									name='id-card'
									color={focused ? '#fff' : '#fff'}
								/>
							</View>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='alerts'
				options={{
					title: 'Alerts',
					tabBarButton: (props) => {
						return <Pressable {...props} android_ripple={{ color: 'transparent' }} />;
					},
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								size={20}
								name='bell'
								color={focused ? '#10b981' : '#1b202e'}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='rewards'
				options={{
					title: 'Rewards',
					tabBarButton: (props) => {
						return <Pressable {...props} android_ripple={{ color: 'transparent' }} />;
					},
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								size={20}
								name='trophy'
								color={focused ? '#10b981' : '#1b202e'}
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
