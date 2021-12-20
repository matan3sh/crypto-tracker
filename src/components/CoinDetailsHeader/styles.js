import { StyleSheet } from 'react-native';
import { spacing } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageSmall: {
    width: 25,
    height: 25,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: spacing[2],
    fontSize: 15,
  },
  biggerText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: spacing[2],
  },
  rank: {
    backgroundColor: '#585858',
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: spacing[2],
  },
});
