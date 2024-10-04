import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  scrollContainer: {
    width: '100%',
  },
  horizontalScrollContainer: {
    height: 300,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.4,
  },
  titleCard: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: '300',
    letterSpacing: 1.5,
    fontFamily: 'Pokemon',
    textTransform: 'capitalize',
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 8,
    borderColor: 'white',
    borderWidth: 2,
  },
  cardContainerDescription: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  cardLeft: {
    flex: 5,
  },
  cardRight: {
    flex: 5,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  customText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
    letterSpacing: 1.5,
    fontFamily: 'Pokemon',
    textTransform: 'capitalize',
  },
});
