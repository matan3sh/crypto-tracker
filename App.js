import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DetailedScreen, HomeScreen } from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <DetailedScreen />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
