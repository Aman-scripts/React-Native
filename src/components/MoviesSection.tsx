import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Card from './Card';
import Skeleton from './Skeleton';

interface MoviesSectionProps {
  title: string;
  movies: {
    id: number;
    title: string;
    description: string;
    imageSource: any;
    genre: string;
  }[];
}

const MoviesSection: React.FC<MoviesSectionProps> = ({ title, movies }) => {
  const dark = useColorScheme() === 'dark';

  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: dark ? '#fff' : '#222' }]}>
        {title}
      </Text>

      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {movies.length === 0
          ? Array.from({ length: 5 }).map((_, i) => (
              <View key={`sk-${i}`}>
                <Skeleton width={150} height={200} borderRadius={8} />
                <Skeleton width={120} height={14} style={{ marginTop: 8 }} />
                <Skeleton width={90} height={12} style={{ marginTop: 6 }} />
              </View>
            ))
          : movies.map(movie => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                genre={movie.genre}
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
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  cardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    gap: 16,
  },
});

export default MoviesSection;
