import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '@/constants';
import { GITHUBCOLORS } from '@/constants/colors';

const ProjectCard = ({ project }) => {
	return (
		<TouchableOpacity
			onPress={() => Linking.openURL(project.html_url)}
			style={styles.container}
		>
			<View style={styles.header}>
				<Text style={styles.title}>{project.name}</Text>
				<Feather style={styles.icon} name="link-2" />
			</View>
			<Text style={styles.description}>{project.description}</Text>
			<View style={styles.footer}>
				<View style={styles.stats}>
					<View style={styles.statItem}>
						<AntDesign style={styles.icon} name="staro" />
						<Text style={styles.languageText}>{project.stargazers_count}</Text>
					</View>
					<View style={styles.statItem}>
						<Octicons style={styles.icon} name="repo-forked" />
						<Text style={styles.languageText}>{project.forks_count}</Text>
					</View>
				</View>
				<View style={styles.language}>
					<View style={[styles.languageDot, { backgroundColor: GITHUBCOLORS[project.language] }]} />
					<Text style={styles.languageText}>{project.language}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: SIZES.small,
		minHeight: 140,
		justifyContent: "space-between",
		backgroundColor: COLORS.primaryBg,
		marginBottom: SIZES.large,
		borderRadius: 5,
		borderColor: COLORS.primaryText,
		borderWidth: 0.2,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 8,
	},
	title: {
		fontSize: SIZES.medium,
		fontWeight: 'bold',
		color: COLORS.primaryTitle,
		textTransform: 'capitalize',
	},
	description: {
		fontSize: SIZES.medium - 2,
		color: COLORS.primaryText,
		lineHeight: 20,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 8,
	},
	stats: {
		flexDirection: 'row',
		gap: 2,
		alignItems: 'center',
	},
	statItem: {
		flexDirection: 'row',
		gap: 2,
		alignItems: 'center',
		marginRight: SIZES.medium,
	},
	icon: {
		fontSize: SIZES.large - 2,
		marginRight: 4,
		color: COLORS.primaryIcon,
	},
	language: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 4,
	},
	languageDot: {
		width: SIZES.xSmall - 1,
		height: SIZES.xSmall - 1,
		borderRadius: SIZES.xSmall - 1,
	},
	languageText: {
		fontSize: SIZES.small + 2,
		color: COLORS.primaryText,
	},
});

export default ProjectCard;
