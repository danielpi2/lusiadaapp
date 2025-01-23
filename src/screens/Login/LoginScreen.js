import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <ImageBackground
        source={require('../../../assets/background2.jpg')}
        style={styles.container}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.overlay}>
            <View style={styles.content}>
              <Text style={styles.title}>Faça seu Login</Text>

              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#fff"
              />

              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#fff"
                secureTextEntry
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Aqui você navega para o DrawerStack, que inclui a tela Home
                  navigation.navigate('Drawer'); // Navega para o DrawerStack
                }}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgba(73, 182, 77, 0.9)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
