import React, { useLayoutEffect, useRef } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./styles"; 
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';
import { getSpotById } from "../../data/MockDataAPI";
import { Rating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';

const { width: viewportWidth } = Dimensions.get("window");

export default function SpotsDetailsScreen(props) {
  const { navigation, route } = props;
  const spotId = route.params?.spotId;
  const spot = getSpotById(spotId);
  const slider1Ref = useRef(null);
  const progress = useSharedValue(0);

  const darkTheme = {
    backgroundColor: '#121212',
    textColor: '#ffffff',
    cardBackground: '#333333',
    headerColor: '#ffffff',
    greenColor: 'rgba(73,182,77,0.9)',
  };

  if (!spot) {
    return (
      <View style={styles.center}>
        <Text style={[styles.errorText, { color: darkTheme.textColor }]}>Spot não encontrado!</Text>
      </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerLeft: () => (
        <View style={{ position: 'absolute', top: 20, left: 10, zIndex: 1 }}>
          {/* Ícone de voltar fixado no topo */}
          <Ionicons 
            name="arrow-back" 
            size={30} 
            color={darkTheme.textColor} 
            onPress={() => navigation.goBack()} 
          />
        </View>
      ),
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const onPressPagination = (index) => {
    slider1Ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleOpenLocation = () => {
    // URL do Google Maps com as coordenadas (substitua pelo link real)
    const url = `https://www.google.com/maps?q=${spot.latitude},${spot.longitude}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: darkTheme.backgroundColor }]}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={(c) => {
              slider1Ref.current = c;
            }}
            loop={false}
            width={viewportWidth}
            height={viewportWidth}
            autoPlay={false}
            data={spot.photosArray}
            scrollAnimationDuration={1000}
            renderItem={renderImage}
            onProgressChange={progress}
          />
          <Pagination.Basic
            renderItem={(item) => (
              <View
                style={{
                  backgroundColor: darkTheme.greenColor,
                  flex: 1,
                }}
              />
            )}
            progress={progress}
            data={spot.photosArray}
            dotStyle={styles.paginationDot}
            containerStyle={styles.paginationContainer}
            onPress={onPressPagination}
          />
        </View>
      </View>
      <View style={[styles.infoRecipeContainer, { backgroundColor: darkTheme.backgroundColor }]}>
        <Text style={[styles.infoRecipeName, { color: darkTheme.textColor, fontWeight: 'bold', fontSize: 30 }]}>
          {spot.title}
        </Text>

        <View style={styles.ratingContainer}>
          <Rating
            type="star"
            ratingCount={5}
            imageSize={25}
            startingValue={spot.rating}
            readonly
            style={[styles.rating, { backgroundColor: 'transparent' }]} // Removendo o fundo branco
            ratingColor="#73B64E" // Cor das estrelas, verde com opacidade
            ratingBackgroundColor="transparent" // Remover o fundo das estrelas
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.infoRecipe, { color: darkTheme.textColor, fontWeight: 'bold' }]}>
            Tempo estimado: <Text style={{ fontWeight: 'normal' }}>{spot.time} Horas</Text>
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.infoDescriptionRecipe, { color: darkTheme.textColor, fontSize: 18 }]}>
            {spot.description}
          </Text>
        </View>

        {/* Botão Ver Localização */}
        <TouchableOpacity style={styles.locationButton} onPress={handleOpenLocation}>
          <Text style={styles.locationButtonText}>Ver Localização</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
