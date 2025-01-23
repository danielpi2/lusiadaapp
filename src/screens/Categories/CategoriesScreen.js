import React from 'react';
import { FlatList, Text, View, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getSpotsByCategory } from '../../data/MockDataAPI';

export default class CategoriesScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    const spots = getSpotsByCategory(item.id);
    this.props.navigation.navigate('SpotsList', { category, spots, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getSpotsByCategory(item.id).length} lugares</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    // Tema escuro
    const darkTheme = {
      backgroundColor: '#121212',
      textColor: '#FFFFFF',
      cardBackground: 'rgba(73,182,77,0.9)', // Cor verde para os cards
    };

    const theme = darkTheme; // Usando o tema escuro fixo

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{
            padding: 10,
            backgroundColor: theme.backgroundColor,
          }}
        />
      </SafeAreaView>
    );
  }
}
