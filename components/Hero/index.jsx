import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLORS, SIZES, USERDATA } from "@/constants";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import CoderProfile from "./CoderProfile";
import { openUrl } from '@/utils/utils';


const Hero = ({ profileData }) => {

	return <View style={styles.container} >
		<Image

			style={{
				width: 120,
				height: 120,
				resizeMode: "cover",
				borderRadius: 75,
			}}
			source={{ uri: profileData.avatar_url }} />
		<Text style={styles.description}>
			{profileData.bio}
		</Text>
		<View style={styles.socialIcons}>
			<TouchableOpacity onPress={() => openUrl(profileData.html_url)}>
				<FontAwesome5 name="github" size={24} color={COLORS.primaryIcon} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/yourprofile')}>
				<FontAwesome name="linkedin-square" size={24} color={COLORS.primaryIcon} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => openUrl('https://www.facebook.com/yourprofile')}>
				<FontAwesome5 name="facebook" size={24} color={COLORS.primaryIcon} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => openUrl('https://www.yourcodesite.com')}>
				<Entypo name="code" size={24} color={COLORS.primaryIcon} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => openUrl(`https://twitter.com/${profileData.twitter_username}`)}>
				<FontAwesome name="twitter-square" size={24} color={COLORS.primaryIcon} />
			</TouchableOpacity>
		</View>
		<View>
			<CustomButton
				title={"Get Resume"}
				onPress={() => {
					openUrl(USERDATA.cvUrl)
				}}
				icon={<FontAwesome name="cloud-download" size={20} color={COLORS.primaryText} />}
			/>
		</View>
		<View>
			<CoderProfile profileData={profileData} />
		</View>
	</View>
}
export default Hero;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	description: {
		color: COLORS.primaryText,
		fontSize: SIZES.medium,
		textAlign: 'center',
		paddingTop: 20,
	},
	socialIcons: {
		flexDirection: 'row',
		width: 200,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 20,
	}
})