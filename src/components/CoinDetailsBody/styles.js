import { StyleSheet } from 'react-native';
import { fontSize, radius, spacing } from '../../styles';

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
  priceChangeContainer: {
    backgroundColor: 'red',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[3],
    borderRadius: radius[2],
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceChange: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    marginLeft: spacing[2],
  },
  converter: {
    flexDirection: 'row',
  },
  symbol: {
    color: 'white',
  },
  input: {
    width: 130,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 16,
  },
});
