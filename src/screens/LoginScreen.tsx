import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { initializing, isAuthenticated } = useContext(AuthContext);
  const dark = useColorScheme() === 'dark';
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (isAuthenticated) {
      // Close modal and go to Home tab at root
      navigation.goBack();
      navigation.navigate('MainTabs', { screen: 'HomeTab' });
    }
  }, [isAuthenticated, navigation]);

  if (initializing) {
    return (
      <View style={[styles.loading, { backgroundColor: dark ? '#0d0d0d' : '#f2f2f2' }]}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: dark ? '#0d0d0d' : '#f2f2f2' }]}>
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default LoginScreen;


