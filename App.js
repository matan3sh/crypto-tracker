import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#121212' } }}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style='light' />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#121212',
    flex: 1,
  },
});
