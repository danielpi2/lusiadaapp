import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(73,182,77,0.8)', // Botão de fundo verde suave
    justifyContent: "flex-start",
  },
  menuButtonText: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: '600',
    textTransform: "uppercase",
  },
});

export default styles;
