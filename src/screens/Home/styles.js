import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles'; // Certifique-se de que esse caminho está correto

const styles = StyleSheet.create({
  container: RecipeCard.container, // Assume que RecipeCard.container está definido corretamente
  photo: RecipeCard.photo,         // Assume que RecipeCard.photo está definido corretamente
  title: RecipeCard.title,         // Assume que RecipeCard.title está definido corretamente
  category: RecipeCard.category,   // Assume que RecipeCard.category está definido corretamente
  menuButton: {
    marginLeft: 15,               // Margem para o lado esquerdo
    padding: 10,                  // Espaço interno para deixar o ícone com um bom espaçamento
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,             // Botão arredondado
    backgroundColor: "rgba(73,182,77,0.9)", // Cor verde de fundo
  },
  headerImageBackground: {
    width: '100%',
    height: '30%',                // 30% da altura da tela
    justifyContent: 'flex-end',   // Coloque qualquer conteúdo dentro da imagem aqui, caso necessário
    padding: 20,                  // Ajuste o padding conforme necessário
  },
});

export default styles;
