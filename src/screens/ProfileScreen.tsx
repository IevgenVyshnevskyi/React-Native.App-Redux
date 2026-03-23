import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatar = require('../../assets/profile.png')

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.card}>
      <Image
        source={avatar} 
        style={styles.avatar}
      />
      <Text style={styles.title}>Вишневський Євген</Text>
      <Text style={styles.subtitle}>Студент групи МПЗ-25</Text>
      <Text style={styles.text}>
          Захоплююсь розробкою мобільних додатків та сучасними UI/UX рішеннями.
      </Text>
    </View>
  </SafeAreaView>
);

export default ProfileScreen;