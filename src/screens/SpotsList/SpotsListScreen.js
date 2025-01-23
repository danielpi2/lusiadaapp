import React from 'react';
import { FlatList, Text, View, TouchableHighlight, Image, SafeAreaView } from 'react-native';
import styles from './styles';

export default class SpotsListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.route.params?.title, 
    };
  };

  constructor(props) {
    super(props);
  }

  onPressSpot = item => {
    this.props.navigation.navigate('SpotsDetails', { spotId: item.id, title: item.title });
  };

  renderSpot = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressSpot(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.location}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation, route } = this.props;
    const item = route.params?.category; 
    const spots = route.params?.spots;

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
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={spots}
          renderItem={this.renderSpot}
          keyExtractor={item => `${item.id}`}
        />
      </SafeAreaView>
    );
  }
}
