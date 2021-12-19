import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
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
    marginHorizontal: 5,
    fontSize: 15,
  },
  biggerText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  rank: {
    backgroundColor: '#585858',
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
