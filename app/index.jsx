import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { USERDATA, COLORS } from "@/constants"
import Hero from "@/components/Hero/index.jsx"
import GitHubStatistics from "@/components/GitHubStatistics.jsx"
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


import { fetchData } from '@/utils/api';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


export default function App() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const data = await fetchData(`/users/${USERDATA.githubUser}`);
    setProfileData(data);
    setLoading(false);
    return data;
  }
  useEffect(() => {
    getData();
  }, [])

  const [fontsLoaded] = useFonts({
    'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Hero profileData={profileData} />
          <GitHubStatistics />
        </ScrollView>
        <StatusBar hidden={false} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    // paddingHorizontal: 20,
  }
})