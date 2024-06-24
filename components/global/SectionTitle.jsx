import { StyleSheet, View } from 'react-native'
import { SIZES, COLORS } from '@/constants'
import CustomButton from '../CustomButton'

export default function SectionTitle({ title }) {
	return (
		<View style={styles.container}>
			<CustomButton title={title} buttonStyle={{ zIndex: 10 }} />
			<View style={styles.line}></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		marginVertical: SIZES.xxLarge,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primaryBg,
		position: "relative",
	},
	line: {
		position: 'absolute',
		top: "50%",
		left: "0",
		backgroundColor: COLORS.primaryText,
		width: "90%",
		height: 1,
		borderRadius: 1,
	},
})