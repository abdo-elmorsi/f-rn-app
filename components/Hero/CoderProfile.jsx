import { StyleSheet, View, Text } from 'react-native';
import { SIZES, USERDATA, COLORS } from '@/constants';


const CoderProfile = ({ profileData }) => {
	return (
		<View style={styles.container}>
			<View style={styles.gradientContainer}>
				<View style={styles.gradientRow}>
					{COLORS.GRADIENT_COLORS.map((color, index) => (
						<View key={index} style={[styles.gradientDot, { backgroundColor: color }]} />
					))}
				</View>
			</View>
			<View style={styles.contentContainer}>
				<View style={styles.codeContainer}>
					<Text style={styles.codeText}>
						const coder = &#123;{'\n'}
						{'\t'}{'\t'}name: '<Text style={{ color: COLORS.primaryIcon }}>{profileData.name}</Text>',{'\n'}

						{'\t'}{'\t'}company: '<Text style={{ color: COLORS.GRADIENT_COLORS[1] }}>{profileData.company}</Text>'',{'\n'}

						{'\t'}{'\t'}location: '<Text style={{ color: COLORS.primaryIcon }}>{profileData.location}</Text>',{'\n'}
						{'\t'}{'\t'}followers: '<Text style={{ color: COLORS.GRADIENT_COLORS[1] }}>{profileData.followers}</Text>',{'\n'}
						{'\t'}{'\t'}following: '<Text style={{ color: COLORS.GRADIENT_COLORS[1] }}>{profileData.following}</Text>',{'\n'}
						{'\t'}{'\t'}repositories: '<Text style={{ color: COLORS.GRADIENT_COLORS[1] }}>{profileData.public_repos}</Text>',{'\n'}


						{'\t'}{'\t'}skills: <Text style={{ color: COLORS.primaryTitle }}>['
							{USERDATA.skills.join(', ')}']</Text>
						,{'\n'}
						{'\t'}{'\t'}hireable: '<Text style={{ color: COLORS.GRADIENT_COLORS[1] }}>{profileData.hireable.toString()}</Text>',{'\n'}&#125;;
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#0d1224',
		borderWidth: 1,
		borderColor: '#1b2c68a0',
		borderRadius: 8,
		paddingHorizontal: SIZES.small,
		paddingVertical: SIZES.medium,
		marginTop: 40
	},
	gradientContainer: {
		paddingVertical: SIZES.large,
	},
	gradientRow: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 1,
	},
	gradientDot: {
		width: 12,
		height: 12,
		borderRadius: 6,
		marginHorizontal: 4,
	},
	contentContainer: {
		borderTopWidth: 2,
		borderColor: '#5c6bc0',
		paddingVertical: SIZES.small,
	},
	codeContainer: {
		backgroundColor: '#0a0d37',
		borderRadius: 8,
		overflow: 'hidden',
	},
	codeText: {
		fontFamily: 'SpaceMono',
		fontSize: SIZES.small,
		color: COLORS.primaryText,
		padding: SIZES.small,
	},
	skillText: {
		color: COLORS.primaryIcon,
	},
});

export default CoderProfile;