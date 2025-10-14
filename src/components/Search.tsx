import React from 'react';
import { View, Text, useColorScheme, StyleSheet, TextInput } from 'react-native';

const Search = () => {
  const dark = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: dark ? '#1e1e1e' : '#fff' }]}>
      <TextInput 
        placeholder="Search..." 
        placeholderTextColor={dark ? '#ccc' : '#888'}
        style={[styles.input, { backgroundColor: dark ? '#333' : '#f0f0f0', color: dark ? '#fff' : '#000' }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 12, overflow: 'hidden' },
  input: { 
    height: 48, 
    paddingHorizontal: 16,
    paddingVertical: 8, 
    borderRadius: 12,
    borderColor: '#3f21e9ff',
    borderWidth: 1,
  },
});

export default Search;
