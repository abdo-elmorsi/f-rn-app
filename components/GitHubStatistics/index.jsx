import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionTitle } from '@/components/global';
import { USERDATA } from '@/constants';
import { SvgUri } from 'react-native-svg';

const GitHubStatistics = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="GitHub Statistics" />

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${USERDATA.githubUser}&theme=algolia`}
        />
      </View>

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-readme-stats.vercel.app/api?username=${USERDATA.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true`}
        />
      </View>

      <View style={styles.imageContainer}>
        <SvgUri
          width="100%"
          height="100%"
          uri={`https://github-readme-stats.vercel.app/api?username=${USERDATA.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`}
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
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
});

export default GitHubStatistics;
