import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center", // Centraliza a seta horizontalmente
    justifyContent: "center", // Centraliza a seta verticalmente
    borderRadius: 30, 
    padding: 10, // Mantendo o tamanho fixo do botão
    margin: 8, 
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnIcon: {
    height: 18,  // Tamanho da seta ajustado para não alterar o tamanho do botão
    width: 18,   // Garantindo que a seta tenha o mesmo tamanho
    resizeMode: 'contain', // Garantindo que a seta não distorça
  },
});

export default styles;
