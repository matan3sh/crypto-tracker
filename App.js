import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import WatchlistProvider from './src/context/WatchlistContext';
import StackNavigation from './src/navigation/stackNavigation';

export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: '#121212' } }}>
      <WatchlistProvider>
        <View style={styles.container}>
          <StackNavigation />
          <StatusBar style='light' />
        </View>
      </WatchlistProvider>
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
