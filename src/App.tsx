import React from "react";
import { Text,View, SafeAreaView, FlatList, StyleSheet, TextInput } from "react-native";
import Products from './components/productsCard';
import productData from './store.json';



const App = () => {
  const renderProduct = ({ item }) => <Products products={item} />
  return (
    <SafeAreaView>
      <Text style={styles.mainTitle}>PATİKASTORE</Text>
      <FlatList
        ListHeaderComponent={(
          <TextInput
            style={styles.searchInput}
            enterKeyHint="search"
            placeholder="Ara..."
          />
        )}
        style={styles.container}
        numColumns={2}
        data={productData}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
      />


    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainTitle:{
    fontSize:40,
    color:'purple',
    fontWeight:'bold'
  },
  searchInput:{
    alignSelf:'center',
    width:'95%',
    height:50,
    backgroundColor:'whitesmoke',
    borderRadius:9,
    padding:12,
    textTransform:'capitalize',
    color:'goldenrod'
  }
})

export default App;