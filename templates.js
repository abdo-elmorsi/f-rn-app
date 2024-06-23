// import React from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useFonts } from 'expo-font';
// import HomeScreen from '@/app/screens/HomeScreen';
// import ProfileScreen from '@/app/screens/ProfileScreen';
// import { AntDesign } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   // Load custom font
//   const [fontsLoaded] = useFonts({
//     'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf')
//   });

//   if (!fontsLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#1E1E1E',
//           borderTopWidth: 0,
//           elevation: 10,
//         },
//         tabBarActiveTintColor: '#FFFFFF',
//         tabBarInactiveTintColor: '#8E8E8E',
//         tabBarLabelStyle: {
//           fontFamily: 'SpaceMono',
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ color, size }) => (
//             <AntDesign name="home" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarShowLabel: false,
//           tabBarIcon: ({ color, size }) => (
//             <AntDesign name="user" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
