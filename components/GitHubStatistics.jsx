import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native'; // Ensure StyleSheet is imported for styling
import SectionTitle from '@/components/global/SectionTitle'; // Adjust path as needed
import { USERDATA } from '@/constants'; // Adjust path as needed

const GitHubStatistics = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="GitHub Statistics" />
      <View><Text>GitHubStatistics</Text></View>
      <View style={styles.imageContainer}>
        <Image
          source={{
						uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s`,
          }}
          style={styles.image}
					/>
      </View>
					<View><Text>GitHubStatistics</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 120,
    borderRadius: 4,
    overflow: 'hidden', // Ensure image stays within bounds of borderRadius
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
		zIndex: 10,
		backgroundColor: "#fff"
  },
});

export default GitHubStatistics;
