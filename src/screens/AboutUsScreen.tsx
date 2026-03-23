import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { styles } from '../theme/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutUsScreen() {
  const handlePress = async () => {
  const url = 'https://pzas.chdtu.edu.ua/';
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.error("Помилка при відкритті посилання:", error);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Кафедра програмного забезпечення автоматизованих систем
        </Text>
        
        <Text style={styles.text}>
          Наша кафедра готує найкращих фахівців у галузі програмної інженерії,
          кібербезпеки та штучного інтелекту. Ми поєднуємо теорію з реальною
          практикою.
        </Text>

        {/* Додаємо кнопку переходу */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Відвідати сайт кафедри 🌐</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
