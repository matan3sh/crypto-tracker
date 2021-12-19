import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  downArrow: {
    alignSelf: 'center',
    marginRight: 5,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: '#fff',
    marginRight: 5,
  },
  textNormal: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282828',
    padding: 15,
  },
  right: {
    marginLeft: 'auto',
    alignItems: 'flex-end',
  },
  rank: {
    fontWeight: 'bold',
    color: '#fff',
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
});
