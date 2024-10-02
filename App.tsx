import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Input } from './components/Input';

const colorBlue = "#0000d0";
const colorRed = "#dc3545";
const colorGreen = "#28a700";

export default function App() {
  const [color, setColor] = useState("#FF0000");
  const [name, setName] = useState("");
  const [nim, setNim] = useState("000000");

  const handleNameChange = (name: string) => { setName(name) };
  const handleNimChange = (nim: string) => { setNim(nim) };

  console.log(name);

  useEffect(() => {
    setInterval(() => {
      if(color === colorRed)
        setColor(colorBlue)
      else 
        setColor(colorRed)
    }, 1000);
  }, [])

  return (
    <View 
      style={styles.container}
    >
      <Input 
        label="Name"
        placeholder="Enter your name"
        onChangeText={handleNameChange} 
        type="default"
        value={name}
      />

      <Input 
        label="NIM"
        placeholder="Enter your NIM"
        onChangeText={handleNimChange} 
        type="numeric"
        value={nim}
      />

      <Text style={{
        color: color,
        backgroundColor: colorGreen,
        fontWeight: 900,
        fontSize: 24,
      }}
      >{name} - {nim}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
