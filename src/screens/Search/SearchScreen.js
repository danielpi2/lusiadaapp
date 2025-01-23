import React, { useLayoutEffect, useRef, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, Image, TextInput, Animated, SafeAreaView } from "react-native";
import { Ionicons } from "react-native-vector-icons"; 
import styles from "./styles";
import { getAllSpots, getSpotsByNameOrLocation } from "../../data/MockDataAPI"; 

export default function SearchScreen(props) {
  const { navigation } = props;
  const [value, setValue] = useState('');
  const [data, setData] = useState(getAllSpots());
  const zoomRefs = useRef({}); 

  const darkTheme = {
    backgroundColor: '#121212',
    textColor: '#FFFFFF',
    cardBackground: 'rgba(73,182,77,0.9)',
  };

  const theme = darkTheme; 

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={{ color: theme.textColor }}>Menu</Text>
        </TouchableOpacity>
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);

  const handleSearch = (text) => {
    const searchData = getSpotsByNameOrLocation(text);
    setValue(text);
    setData(searchData);
  };

  const onPressSpot = (item) => {
    navigation.navigate("SpotsDetails", { spotId: item.id, title: item.title }); // Corrigido para o nome correto
  };

  const handleZoomIn = (spotId) => {
    if (!zoomRefs.current[spotId]) {
      zoomRefs.current[spotId] = new Animated.Value(1); // Inicializa a animação se não existir
    }

    const zoom = zoomRefs.current[spotId]; // Acessa a animação do item

    Animated.spring(zoom, {
      toValue: 1.1, // Zoom in
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.spring(zoom, {
        toValue: 1, // Restaura o zoom para o tamanho original
        useNativeDriver: true,
      }).start();
    }, 300); // A duração do zoom (300ms)
  };

  const renderSpot = ({ item }) => {
    const zoom = zoomRefs.current[item.id] || new Animated.Value(1);

    return (
      <TouchableOpacity onPress={() => onPressSpot(item)} onPressIn={() => handleZoomIn(item.id)}>
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: theme.cardBackground,
              transform: [{ scale: zoom }],
              margin: 10,
              borderRadius: 20,
            },
          ]}
        >
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={[styles.title, { color: theme.textColor }]}>{item.title}</Text>
          <Text style={[styles.category, { color: theme.textColor }]}>{item.location}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSearch}
          value={value}
          placeholder="Buscar por nome ou localização..."
          placeholderTextColor="#ccc"
        />
      </View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={renderSpot}
        keyExtractor={(item) => `${item.id}`}
      />
    </SafeAreaView>
  );
}
