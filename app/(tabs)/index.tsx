import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Title from '@/components/Title';

// Interface des props pour la navigation
interface HomeScreenProps {
  navigation: {
    navigate: (screen: string, params?: any) => void;
  };
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Composant Title */}
      <Title />

      {/* Message de bienvenue */}
      <Text style={styles.welcomeText}>Bienvenue Ahmed,</Text>

      {/* Section Derniers Podcasts */}
      <Text style={styles.sectionTitle}>Derniers Podcasts</Text>
      <View style={styles.podcastContainer}>
        <TouchableOpacity
          style={styles.podcastItem}
          onPress={() => navigation.navigate('PodcastDetail', { id: 1 })}
        >
          <Text style={styles.podcastText}>Épisode de Podcast 1 : Comprendre la sclérose en plaques</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.podcastItem}
          onPress={() => navigation.navigate('PodcastDetail', { id: 2 })}
        >
          <Text style={styles.podcastText}>Épisode de Podcast 2 : Vivre avec la sclérose en plaques</Text>
        </TouchableOpacity>
      </View>

      {/* Section Derniers Blogs */}
      <Text style={styles.sectionTitle}>Derniers Blogs</Text>
      <View style={styles.blogContainer}>
        <TouchableOpacity
          style={styles.blogItem}
          onPress={() => navigation.navigate('BlogDetail', { id: 1 })}
        >
          <Text style={styles.blogText}>Article de Blog 1 : Surmonter les défis de la sclérose en plaques</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.blogItem}
          onPress={() => navigation.navigate('BlogDetail', { id: 2 })}
        >
          <Text style={styles.blogText}>Article de Blog 2 : Espoir et résilience face à la sclérose en plaques</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// Styles pour la page d'accueil
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 24,
    color: '#333',
  },
  podcastContainer: {
    marginBottom: 16,
  },
  podcastItem: {
    padding: 12,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    marginBottom: 8,
  },
  podcastText: {
    fontSize: 16,
    color: '#00796b',
  },
  blogContainer: {
    marginBottom: 16,
  },
  blogItem: {
    padding: 12,
    backgroundColor: '#ffecb3',
    borderRadius: 8,
    marginBottom: 8,
  },
  blogText: {
    fontSize: 16,
    color: '#e65100',
  },
});

export default HomeScreen;