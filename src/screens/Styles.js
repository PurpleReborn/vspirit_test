import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  btnWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btn: {
    paddingHorizontal: windowWidth / 13,
    paddingVertical: 10,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: windowHeight / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imgWrap: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -1,
    zIndex: -10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 1,
    shadowColor: '#505050',
  },
  likeWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnDislike: {
    marginLeft: 10,
  },
  flat: {
    marginBottom: windowHeight / 11,
  },
  elevation: {
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
});

export default styles;
