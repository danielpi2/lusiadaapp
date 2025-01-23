import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const user = {
    name: "João Silva",
    age: 25,
    bio: "Apaixonado por tecnologia, viagens e aventura.",
    profilePicture: "https://img.freepik.com/free-photo/smiley-man-using-modern-smartphone-home_23-2148793450.jpg?t=st=1737516473~exp=1737520073~hmac=5bbc8afe44a59f017f59835377291dc8c4122d67919e8de92b8c2331e88270c2&w=360", // Imagem de exemplo
  };

  const navigation = useNavigation();

  const statusBarHeight = StatusBar.currentHeight || 0;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#fff" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#121212',
      },
      headerTintColor: '#fff',
    });
  }, [navigation]);

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight + 20 }]}>
      {/* Imagem de perfil */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: user.profilePicture }}
          style={styles.profilePicture}
        />
      </View>

      {/* Informações do usuário */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userAge}>{user.age} anos</Text>
        <Text style={styles.userBio}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    padding: 20,
  },
  profilePictureContainer: {
    marginTop: 90,
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50, // Torna a imagem redonda
    borderWidth: 2,
    borderColor: '#fff', // Cor da borda
  },
  userInfoContainer: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userAge: {
    fontSize: 18,
    color: '#B0B0B0',
    marginTop: 5,
  },
  userBio: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ProfileScreen;
