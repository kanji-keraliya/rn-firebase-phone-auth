/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('+1 650-555-3434');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log('confirmation', confirmation);
      setConfirm(confirmation);
      alert('OTP sent successfully');
    } catch (e) {
      alert('Error' + e.message);
    }
  }

  async function confirmCode() {
    try {
      const result = await confirm.confirm(code);
      console.log('Valid code.', result);
      alert('Verified Successfully');
    } catch (error) {
      alert('Invalid code.');
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <>
        <TextInput value={phone} placeholder="Phone" onChangeText={text => setPhone(text)} />
        <Button
          title="Phone Number Sign In"
          onPress={() => {
            if (phone)
              signInWithPhoneNumber(phone);
            else
              alert('Enter Phone')
          }}
        />
      </>
    );
  }

  return (
    <>
      <TextInput value={code} placeholder="Code" onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
