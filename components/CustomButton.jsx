import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '@/constants'

const CustomButton = ({ title, icon, onPress, buttonStyle, textStyle }) => {
	return (
		<Pressable
			style={[styles.button, buttonStyle]}
			onPress={onPress}
		>
			<LinearGradient
				colors={[COLORS.MAGENTA_PINK, COLORS.LAVENDER_PURPLE]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={styles.gradientBorder}
			>
				<View style={styles.buttonContent}>
					{icon && <View style={styles.icon}>{icon}</View>}
					<Text style={[styles.buttonText, textStyle]}>{title}</Text>
				</View>
			</LinearGradient>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: SIZES.xSmall,
		paddingHorizontal: SIZES.small,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gradientBorder: {
		borderWidth: 2,
		borderRadius: 8,
		padding: 2,
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.primaryBg,
		borderRadius: 6,
		paddingVertical: SIZES.xSmall - 2,
		paddingHorizontal: SIZES.xSmall,
	},
	icon: {
		marginRight: 8,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: SIZES.small,
	},
})

export default CustomButton