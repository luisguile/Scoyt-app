import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import {  h1 }  from ` ./src/styles/styles.js `

export default function App() {
  return (
    <View style={styles.container}>

<header> 
       <h1>
         
        Scout game
      </h1 >
 </header>
 <main >
     
 </main>

      <StatusBar style="auto" />
    </View>
  );
}

//----------Estilos----------//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 	`#4169E1`,
    alignItems: `center`,
    justifyContent: `center`,
  },

});
