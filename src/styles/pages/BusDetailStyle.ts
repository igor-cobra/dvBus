import { StyleSheet, Dimensions } from 'react-native';

const BusDetailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagesContainer: {
    height: 240,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 24,
  },
  title: {
    color: '#4D6F80',
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
  },
  description: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },
  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },
  mapStyle: {
    width: '100%',
    height: 150,
  },
  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5'
  },
  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 40,
  },
  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scheduleItem: {
    width: '100%',
    padding: 20,
  },
  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },
  scheduleText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },
  scheduleTextBlue: {
    color: '#5C8599'
  }
});

export default BusDetailStyle;