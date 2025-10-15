import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

type RootStackParamList = {
  MovieDetails: { id: number };
};

interface CardProps {
  title: string;
  genre: string;
  imageSource: any;
  id: number;
}

const Card: React.FC<CardProps> = ({ title, genre, imageSource, id }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { isAuthenticated } = useContext(AuthContext);
  const handlePress = () => {
    if (!isAuthenticated) {
      // open login modal on root stack
      (navigation as any).getParent()?.navigate('LoginModal');
      return;
    }
    navigation.navigate("MovieDetails", { id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc} numberOfLines={1}>
        {genre}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
  },
  desc: {
    fontSize: 12,
    color: "#666",
  },
});

export default Card;