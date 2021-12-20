import { StyleSheet } from 'react-native';
import { spacing } from '../../styles';

export const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  downArrow: {
    alignSelf: 'center',
    marginRight: spacing[2],
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: spacing[3],
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
    marginRight: spacing[2],
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
    paddingHorizontal: spacing[2],
    borderRadius: spacing[2],
    marginRight: spacing[2],
  },
});
