import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    paddingBottom: 25,
    paddingTop: 100,
  },
  image: {
    height: 192,
    width: 192,
    paddingBottom: 10,
  },
  loginButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 70,
  },
  loginButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
});

export default LoginStyles;