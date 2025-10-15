import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import Layout from '../layout';
import { moviesData } from '../data/moviesData';
import ActionButton from '../components/ActionButton';
import GenreTag from '../components/GenreTag';
import Icon from 'react-native-vector-icons/Ionicons';

const MovieDetails: React.FC = () => {
  const dark = useColorScheme() === 'dark';
  const route = useRoute();
  const { id } = route.params as { id: number };

  const movieDetails = moviesData.find(movie => movie.id === id);

  // No auth gating here; gating happens before navigating from cards

  if (!movieDetails) {
    return (
      <Layout>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Movie not found</Text>
        </View>
      </Layout>
    );
  }

  const ratingStars = Math.round(Number(movieDetails.rating.split('/')[0]) / 2);

  return (
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: dark ? '#0d0d0d' : '#f2f2f2' },
        ]}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { backgroundColor: dark ? '#0d0d0d' : '#f2f2f2' },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Image source={movieDetails.imageSource} style={styles.poster} />

          <View style={styles.actionsRow}>
            <ActionButton iconName="heart-outline" label="Like" />
            <ActionButton iconName="bookmark-outline" label="Watchlist" />
            <ActionButton iconName="share-outline" label="Share" />
          </View>

          <Text style={[styles.title, { color: dark ? '#fff' : '#111' }]}>
            {movieDetails.title}
          </Text>

          <View style={styles.starsRow}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon
                key={index}
                name={index < ratingStars ? 'star' : 'star-outline'}
                size={20}
                color="#FFD700"
                style={{ marginRight: 4 }}
              />
            ))}
            <Text style={{ color: dark ? '#aaa' : '#555', marginLeft: 8 }}>
              {movieDetails.rating}
            </Text>
          </View>

          <View style={styles.genreRow}>
            {movieDetails.genre.split(',').map((g, index) => (
              <GenreTag key={index} genre={g.trim()} />
            ))}
          </View>

          <View style={styles.divider} />

          <Text style={[styles.description, { color: dark ? '#ccc' : '#444' }]}>
            {movieDetails.description}
          </Text>

          <View style={styles.infoSection}>
            <Text style={[styles.infoText, { color: dark ? '#aaa' : '#555' }]}>
              <Text style={styles.infoLabel}>Director: </Text>
              {movieDetails.director || 'Unknown'}
            </Text>
            <Text style={[styles.infoText, { color: dark ? '#aaa' : '#555' }]}>
              <Text style={styles.infoLabel}>Release Year: </Text>
              {movieDetails.releaseYear || 'N/A'}
            </Text>
            <Text style={[styles.infoText, { color: dark ? '#aaa' : '#555' }]}>
              <Text style={styles.infoLabel}>Duration: </Text>
              {movieDetails.duration || 'N/A'}
            </Text>
            <Text style={[styles.infoText, { color: dark ? '#aaa' : '#555' }]}>
              <Text style={styles.infoLabel}>Rating: </Text>
              {movieDetails.rating || 'N/A'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 18,
    color: '#888',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: '80%',
    height: 400,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 16,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  genreRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  divider: {
    width: 60,
    height: 3,
    backgroundColor: '#E50914',
    borderRadius: 2,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  infoSection: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  infoLabel: {
    fontWeight: '700',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 6,
  },
});

export default MovieDetails;
