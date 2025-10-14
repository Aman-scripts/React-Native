import React from "react";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";
import Card from "./Card";

interface MoviesSectionProps {
  title: string;
  movies: {
    id: number;
    title: string;
    description: string;
    imageSource: any;
  }[];
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ title, movies }) => {
  const dark = useColorScheme() === "dark";

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: dark ? "#fff" : "#222" }]}>
        {title}
      </Text>

      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description}
            imageSource={movie.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { marginTop: 10 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: "row",
    gap: 16,
  },
});

export default MoviesSection;
