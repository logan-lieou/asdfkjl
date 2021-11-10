import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [text, setText] = React.useState<string>("");

  const handleSubmit = async () => {
    await fetch("https://8725-129-110-241-69.ngrok.io", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({"text": text})
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Something</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.text}
        onChange={(e: any) => setText(e.target.value)}
        placeholder="Enter some words to say..."
        value={text}
      />
      <Button 
        title = "Submit"
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    color: '#ffffff',
  },
});
