import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'red',
  },
  title: {
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '300',
    letterSpacing: 1.5,
    fontFamily: 'Pokemon',
    textTransform: 'capitalize',
  },
});
