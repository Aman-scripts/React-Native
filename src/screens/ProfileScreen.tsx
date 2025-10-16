import React from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignupForm from '../components/SignIn';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.text}>Profile Coming Soon</Text>

          <View style={{ flex: 1 }}>
            <SignupForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ProfileScreen;
