import { Image, View, StyleSheet } from 'react-native';
import { SectionTitle } from '@/components/global';
import { USERDATA } from '@/constants';
const GitHubStatistics = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Streak & Rank" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://github-readme-streak-stats.herokuapp.com/?user=${USERDATA.githubUser}&theme=algolia&hide_border=true&type=png`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${USERDATA.githubUser}&theme=algolia&utcOffset=${USERDATA.timezone}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://stardev.io/developers/${USERDATA.githubUser}/badge/languages/global.svg`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://stardev.io/developers/${USERDATA.githubUser}/badge/languages/locality.svg`,
          }}
          style={styles.image}
        />
      </View>
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
    width: "100%",
    height: 130,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 30,
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
