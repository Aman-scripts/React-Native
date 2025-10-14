import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dark = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[
        styles.container,
        { backgroundColor: dark ? '#121212' : '#f9f9f9' },
      ]}
    >
      <Header />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
