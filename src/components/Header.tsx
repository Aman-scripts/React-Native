import React from 'react';
import { View, Text, useColorScheme, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './Search';

const Header: React.FC = () => {
  const dark = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={[{ backgroundColor: dark ? '#121212' : '#f9f9f9' }]}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.headerText, { color: dark ? '#fff' : '#1e90ff' }]}>
          Movie App
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <Search />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerText: { fontSize: 22, fontWeight: 'bold' },
  logo: { width: 45, height: 45 },
  searchContainer: { paddingHorizontal: 16, marginVertical: 12 },
});

export default Header;
