// Loading.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const colors = ['#e63946', '#f1fa8c', '#06d6a0', '#118ab2', '#ff006e'];

export default function Loading() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % colors.length);
    }, 500); // change color every 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="h-dvh flex justify-center items-center bg-slate-400">
      <Text style={[styles.text, { color: colors[colorIndex] }]}>Isonga App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
