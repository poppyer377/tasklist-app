import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // Part 3.4 Accessibility
  const [largeText, setLargeText] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Part 3.5 Data Binding
  const [inputText, setInputText] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#ff99aa' }]}>

      {/* Main Text */}
      <Text
        accessibilityLabel="Main welcome text"
        style={{
          fontSize: largeText ? 28 : 16,
          color: darkMode ? '#fff' : '#000'
        }}
      >
        Open up App.js to start working on your app!
      </Text>

      {/* Part 3.4 Buttons */}
      <Button
        title="Toggle Large Text"
        onPress={() => setLargeText(!largeText)}
      />

      <Button
        title="Toggle Dark Mode"
        onPress={() => setDarkMode(!darkMode)}
      />

      {/* Part 3.5 Data Binding */}
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          width: 200,
          marginTop: 20,
          backgroundColor: '#fff'
        }}
        placeholder="Type something..."
        value={inputText}
        onChangeText={setInputText}
      />

      <Text style={{ marginTop: 10, fontSize: 18, color: darkMode ? '#fff' : '#000' }}>
        You typed: {inputText}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});





