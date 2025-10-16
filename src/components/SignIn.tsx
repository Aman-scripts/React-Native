import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      phoneNumber: Yup.string()
        .min(10, 'Must be 10 digits')
        .required('Required'),
    }),
    onSubmit: values => {
      Alert.alert('Form Submitted', JSON.stringify(values, null, 2));
    },
  });

  // Render input with label and error
  const renderInput = (label: string, fieldName: keyof typeof formik.values, props = {}) => (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        value={formik.values[fieldName]}
        {...props}
        returnKeyType="next"
      />
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <Text style={styles.errorText}>{formik.errors[fieldName]}</Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderInput('First Name', 'firstName')}
      {renderInput('Last Name', 'lastName')}
      {renderInput('Email', 'email', { keyboardType: 'email-address' })}
      {renderInput('Password', 'password', { secureTextEntry: true })}
      {renderInput('Phone Number', 'phoneNumber', { keyboardType: 'numeric' })}

      <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignupForm;
