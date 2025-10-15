import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GenreTagProps {
  genre: string;
}

const GenreTag: React.FC<GenreTagProps> = ({ genre }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#E50914',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default GenreTag;
