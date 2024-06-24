import { StyleSheet, View } from 'react-native';
import { SectionTitle } from '@/components/global';
import CustomButton from '@/components/CustomButton';
import { COLORS } from '@/constants';
import ProjectCard from './ProjectCard';
import { AntDesign } from '@expo/vector-icons';
import { openUrl } from '@/utils/utils';

const Projects = ({ profile, projects }) => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Git Projects" />
      {projects.map(project => {
        return <ProjectCard key={project.id} project={project} />;
      })}
      <CustomButton
        title={"View All Projects"}
        onPress={() => {
          openUrl(profile.html_url)
        }}

        icon={<AntDesign name="arrowright" size={20} color={COLORS.primaryText} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'start',
    padding: 20,
  },

});

export default Projects;
