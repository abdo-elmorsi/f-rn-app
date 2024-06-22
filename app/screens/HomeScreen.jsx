import { View, Text, StyleSheet, StatusBar, Image, ImageBackground } from 'react-native';
import React from 'react';

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={require("@/assets/abdo.jpg")}

				style={

					styles.image
				} />
			<Text style={styles.text}>Abdo Elmorsi</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'start',
		alignItems: 'center',

	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		zIndex: 10,
		color: 'white',
		position: 'absolute',
    top: 600,
    left: 100,
	},
	image: {
		width: "100%",
		height: "100%",
	}
});