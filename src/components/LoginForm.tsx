import React, { useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { showToast } from '../utils/toast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm: React.FC = () => {
  const dark = useColorScheme() === 'dark';
  const { signIn } = useContext(AuthContext);

  return (
    <View style={[styles.container, { backgroundColor: dark ? '#121212' : '#f2f2f2' }]}>
      <Formik
        initialValues={{ email: '', password: '', passwordHidden: true as any }}
        validationSchema={validationSchema}
        onSubmit={async values => {
          await signIn(values.email);
          showToast('Logged in');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={dark ? '#aaa' : '#555'}
              style={[styles.input, { backgroundColor: dark ? '#1e1e1e' : '#fff', color: dark ? '#fff' : '#000' }]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <View style={{ position: 'relative' }}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={dark ? '#aaa' : '#555'}
                style={[styles.input, { paddingRight: 44, backgroundColor: dark ? '#1e1e1e' : '#fff', color: dark ? '#fff' : '#000' }]}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={values.passwordHidden as any}
              />
              <TouchableOpacity
                onPress={() => setFieldValue('passwordHidden', !values.passwordHidden)}
                style={{ position: 'absolute', right: 12, top: 12 }}
              >
                <Ionicons name={values.passwordHidden ? 'eye-off-outline' : 'eye-outline'} size={22} color={dark ? '#fff' : '#333'} />
              </TouchableOpacity>
            </View>
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <Button onPress={handleSubmit as any} title="Login" color={dark ? '#E50914' : '#E50914'} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  errorText: {
    color: '#E50914',
    marginBottom: 8,
    fontSize: 13,
  },
});

export default LoginForm;
