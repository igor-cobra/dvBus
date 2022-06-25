import { StyleSheet } from "react-native";

const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
    marginHorizontal: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    marginHorizontal: 24,
  },
});

export default MainStyle;
