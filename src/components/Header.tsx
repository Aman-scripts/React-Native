import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from './Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { showToast } from '../utils/toast';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const dark = useColorScheme() === 'dark';
  const { isAuthenticated, signOut } = useContext(AuthContext);
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={[{ backgroundColor: dark ? '#121212' : '#f9f9f9' }]}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={[styles.headerText, { color: dark ? '#fff' : '#' }]}>
          Movie App
        </Text>
        {!isAuthenticated ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginModal')}
            style={[
              styles.loginButton,
              { backgroundColor: dark ? '#1e90ff' : 'skyblue' },
            ]}
          >
            <Text
              style={[styles.loginText, { color: dark ? '#fff' : '#000' }]}
            >
              Login
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={async () => {
              await signOut();
              showToast('Logged out');
            }}
            style={{ position: 'absolute', right: 16 }}
          >
            <Ionicons
              name="log-out-outline"
              size={30}
              color={dark ? '#fff' : '#1e90ff'}
            />
          </TouchableOpacity>
        )}
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

  loginButton: {
    position: 'absolute',
    right: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Header;
