import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: '300',
    lineHeight: 30,
    letterSpacing: 0.5,
    fontFamily: 'Pokemon',
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Pokemon',
    fontWeight: '300',
    lineHeight: 30,
    fontSize: 30,
    letterSpacing: 0.5,
    textAlign: 'center',
    //caretHidden: true,
  },
});
