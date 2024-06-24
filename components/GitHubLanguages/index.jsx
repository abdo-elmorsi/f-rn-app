import { Image, View, StyleSheet } from 'react-native';
import { SectionTitle } from '@/components/global';
const GitHubLanguages = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="GitHub Languages" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s`,
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

export default GitHubLanguages;
