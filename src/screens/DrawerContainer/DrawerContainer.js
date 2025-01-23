import React from "react";
import { View, StatusBar, TouchableOpacity, Animated } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "react-native-vector-icons"; 
import styles from "./styles";
import { Easing } from "react-native-reanimated"; 

export default function DrawerContainer(props) {
  const { navigation } = props;
  
  const statusBarHeight = StatusBar.currentHeight || 0;

  // Tema escuro
  const darkTheme = {
    backgroundColor: '#121212', 
    textColor: '#FFFFFF', 
    buttonBackground: 'rgba(73,182,77,0.8)', 
    activeButtonBackground: 'rgba(73,182,77,1)', 
  };

  const theme = darkTheme; 

  const [scaleValue, setScaleValue] = React.useState(new Animated.Value(1));

  const handleButtonPress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={[styles.content, { backgroundColor: theme.backgroundColor, paddingTop: statusBarHeight + 20 }]}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleButtonPress();
            navigation.navigate("Main", { screen: "Home" });
            navigation.closeDrawer();
          }}
        >
          <Animated.View style={[styles.menuButton, { transform: [{ scale: scaleValue }] }]}>
            <Ionicons name="home-outline" size={30} color={theme.textColor} />
            <Animated.Text style={[styles.menuButtonText, { color: theme.textColor }]}>INICIO</Animated.Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleButtonPress();
            navigation.navigate("Main", { screen: "Categories" });
            navigation.closeDrawer();
          }}
        >
          <Animated.View style={[styles.menuButton, { transform: [{ scale: scaleValue }] }]}>
            <Ionicons name="apps-outline" size={30} color={theme.textColor} />
            <Animated.Text style={[styles.menuButtonText, { color: theme.textColor }]}>CATEGORIAS</Animated.Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleButtonPress();
            navigation.navigate("Main", { screen: "Search" });
            navigation.closeDrawer();
          }}
        >
          <Animated.View style={[styles.menuButton, { transform: [{ scale: scaleValue }] }]}>
            <Ionicons name="search-outline" size={30} color={theme.textColor} />
            <Animated.Text style={[styles.menuButtonText, { color: theme.textColor }]}>PESQUISAR</Animated.Text>
          </Animated.View>
        </TouchableOpacity>

        {/* Novo botão "Perfil" */}
        <TouchableOpacity
          onPress={() => {
            handleButtonPress();
            navigation.navigate("Main", { screen: "Profile" }); // Navega para a tela de perfil
            navigation.closeDrawer();
          }}
        >
          <Animated.View style={[styles.menuButton, { transform: [{ scale: scaleValue }] }]}>
            <Ionicons name="person-outline" size={30} color={theme.textColor} />
            <Animated.Text style={[styles.menuButtonText, { color: theme.textColor }]}>PERFIL</Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }),
};
