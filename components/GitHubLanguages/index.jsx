import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionTitle } from '@/components/global';
import { USERDATA } from '@/constants';
import { SvgUri } from 'react-native-svg';

const GitHubStatistics = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="GitHub Languages" />

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${USERDATA.githubUser}&theme=algolia`}
        />
      </View>

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${USERDATA.githubUser}&theme=algolia`}
        />
      </View>

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERDATA.githubUser}&layout=compact&theme=default&hide_border=true&&langs_count=6`}
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
    width: '100%',
    height: 130,
    marginBottom: 30,
  },
});

export default GitHubStatistics;
