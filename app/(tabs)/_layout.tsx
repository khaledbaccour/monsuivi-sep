import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000", 
        tabBarInactiveTintColor: "#fff", 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#f7ce4d', 
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="taches"
        options={{
          title: 'Taches',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'checkmark-done' : 'checkmark-done-outline'} size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="jeux"
        options={{
          title: 'Jeux',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} size={30} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="suivi"
        options={{
          title: 'Suivi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bar-chart' : 'bar-chart-outline'} size={30} color={color} />
          ),
        }}

      />

<Tabs.Screen
        name="(chat)"
        options={{
          tabBarShowLabel: false,
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-outline' : 'chatbox-outline'} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
