import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14,
  },
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EDEDED", 
    borderRadius: 20, 
    width: 250,
    height: 40,  // Aumentei um pouco a altura
    justifyContent: "flex-start", // Ajustei para o conteúdo começar mais à esquerda
    marginLeft: 80, // Corrigido para a barra não ficar muito centralizada
    paddingLeft: 15,  // Adicionei um padding para o ícone ficar alinhado
    shadowColor: '#000',  // Sombra para um visual mais bonito
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  searchIcon: { 
    width: 20, 
    height: 20, 
    tintColor: 'gray'  // Ícone mais suave para combinar com o tema escuro
  },
  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 30,
    paddingLeft: 10,  // Deixei o texto um pouco afastado
    fontSize: 14,  // Fonte um pouco menor para melhor legibilidade
  }
});

export default styles;
