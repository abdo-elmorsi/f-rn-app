import { StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from "@/constants"
import { HomeScreen } from '@/screens';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HomeScreen />
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
  }
})