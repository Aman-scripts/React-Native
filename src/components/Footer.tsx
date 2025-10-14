import React from 'react';
import { View, StyleSheet, useColorScheme, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Footer: React.FC = () => {
  const dark = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: dark ? '#121212' : '#f9f9f9' },
      ]}
    >
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: dark ? '#fff' : '#1e90ff' }]}>
          Welcome to Movie App 🎬
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  footerText: { fontSize: 16, fontWeight: '600' },
});
