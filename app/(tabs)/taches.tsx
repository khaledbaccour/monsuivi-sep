import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontWeight } from '@shopify/react-native-skia';

export default function Taches() {
  const tasks = [
    {
      title: 'Exercices d’équilibre',
      description: 'Marchez sur une ligne imaginaire et envoyez une vidéo à votre médecin pour évaluer votre stabilité.',
      icon: 'walk-outline',
    },
    {
      title: 'Renforcement musculaire',
      description: 'Utilisez des bandes élastiques pour travailler vos muscles et partagez vos progrès avec une vidéo.',
      icon: 'fitness-outline',
    },
    {
      title: 'Méditation guidée',
      description: 'Faites des sessions de méditation pour gérer le stress et notez vos sensations.',
      icon: 'leaf-outline',
    },
    {
      title: 'Journal des symptômes',
      description: 'Tenez un journal de vos symptômes et envoyez-le régulièrement à votre médecin.',
      icon: 'document-text-outline',
    },
    {
      title: 'Exercices de pleine conscience',
      description: 'Pratiquez la pleine conscience pour réduire la douleur et envoyez vos retours au médecin.',
      icon: 'time-outline',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Ionicons name={task.icon} size={32} color="#f7ce4d" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.play}>play demo video</Text>

          </View>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="play-circle-outline" size={24} color="#fff" style={styles.playIcon} />
            <Text style={styles.buttonText}>Envoyer Vidéo</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  play:{
    fontWeight: 'bold',
    fontSize: 12
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  playIcon: {
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
