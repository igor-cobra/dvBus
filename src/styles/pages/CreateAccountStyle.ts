import { StyleSheet } from "react-native";

const CreateAccountStyles = StyleSheet.create({
  createAccountButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 93,

    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 3,
    marginTop: 70,
  },
  createAccountButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
});

export default CreateAccountStyles;