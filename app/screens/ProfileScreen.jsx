import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Image source={require("@/assets/abdo.jpg")}

				style={

					styles.image
				} />
			<Text style={styles.text}>Abdo Elmorsi</Text>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'start',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 20,
		paddingTop: StatusBar.currentHeight,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 75,
		borderWidth: 2,
		borderColor: 'black',
		marginBottom: 20,
	}
});