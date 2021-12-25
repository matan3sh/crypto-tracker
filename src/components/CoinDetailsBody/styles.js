import { StyleSheet } from 'react-native';
import { fontSize, spacing } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: fontSize[1],
    color: 'white',
  },
  price: {
    fontSize: fontSize[2],
    letterSpacing: 1,
    fontWeight: '600',
    color: 'white',
  },
  priceChange: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
  },
});
