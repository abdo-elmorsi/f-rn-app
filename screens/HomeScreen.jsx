import React from 'react';
import { USERDATA } from "@/constants";
import Hero from "@/components/Hero";
import GitHubStatistics from "@/components/GitHubStatistics";
import Projects from "@/components/Projects";
import GitHubLanguages from "@/components/GitHubLanguages";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import useFetch from '@/hooks/useFetch';
import { useFonts } from 'expo-font';
import GitHubStreakRank from '@/components/GitHubStreakRank';

const HomeScreen = () => {
	const [fontsLoaded] = useFonts({
		'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
	});

	// Fetch user profile data
	const { data: profile, error: profileError, isLoading: profileLoading } = useFetch(
		'userQueryKey',
		`/users/${USERDATA.githubUser}`,
		{
			staleTime: 1000 * 60 * 5, // 5 minutes
			cacheTime: 1000 * 60 * 30, // 30 minutes
			refetchOnWindowFocus: false,
		}
	);

	// Fetch user's repositories data
	const { data: projects, error: projectsError, isLoading: projectsLoading } = useFetch(
		'repoQueryKey',
		`/search/repositories?q=user:${USERDATA.githubUser}+fork:false&sort=updated&per_page=10&type=Repositories`,
		{
			staleTime: 1000 * 60 * 5, // 5 minutes
			cacheTime: 1000 * 60 * 30, // 30 minutes
			refetchOnWindowFocus: false,
		}
	);


	if (!fontsLoaded || profileLoading || projectsLoading) {
		return <Loading />;
	}
	if (profileError || projectsError) {
		return (
			<Error message={profileError?.message || projectsError?.message} />
		);
	}

	return (
		<>
			<Hero profileData={profile} />
			<GitHubStatistics />
			<Projects profile={profile} projects={projects?.items || []} />
			<GitHubLanguages profile={profile} projects={projects?.items || []} />
			<GitHubStreakRank />
		</>
	);
};



export default HomeScreen;
