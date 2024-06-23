import { Image, Linking, StyleSheet, Text, View } from "react-native"
import { COLORS, SIZES, USERDATA } from "@/constants";
import { Entypo, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import CoderProfile from "./CoderProfile";
import useFetch from "@/hooks/useFetch.js";
import { fetchData } from "@/utils/api.js";
import { useEffect } from "react";

const Hero = ({profileData}) => {
	const handleDownload = () => {
		Linking.openURL('https://drive.google.com/file/d/1kfM4Bvt8fO3L68BRt-H_pFgh-v9SNfk6/view?usp=sharing');
	};

	// console.log("data", data, "loading", loading, "error", error);
	return <View style={styles.container} >
		<Image

			style={{
				width: 120,
				height: 120,
				resizeMode: "cover",
				borderRadius: 75,
			}}
			source={require("@/assets/abdo.jpg")} />
		<Text style={styles.description}>
			I'm a Front-end developer skilled in React JS, NextJs, NodeJs, Express & MongoDb. Based in Cairo, Egypt, seeking a challenging role to elevate user experiences.
		</Text>
		<View style={styles.socialIcons}>
			<FontAwesome5 name="github" size={24} color={COLORS.primaryIcon} />
			<FontAwesome name="linkedin-square" size={24} color={COLORS.primaryIcon} />
			<FontAwesome5 name="facebook" size={24} color={COLORS.primaryIcon} />
			<Entypo name="code" size={24} color={COLORS.primaryIcon} />
			<FontAwesome name="twitter-square" size={24} color={COLORS.primaryIcon} />
		</View>
		<View>
			<CustomButton
				title={"Get Resume"}
				onPress={() => {
					handleDownload()
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
		backgroundColor: COLORS.primaryBg,
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