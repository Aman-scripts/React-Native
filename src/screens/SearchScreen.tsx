import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 16, color: '#666' },
});

export default SearchScreen;


