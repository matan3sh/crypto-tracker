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
  converterContainer: {
    flexDirection: 'row',
  },
  converter: {
    flex: 1,
    flexDirection: 'row',
  },
  symbol: {
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 16,
    color: 'white',
  },
});
