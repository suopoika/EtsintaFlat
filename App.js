import React, {useState, useEffect} from 'react';
import { FlatList, TextInput, View, Text, setSearchTerm, SafeAreaView, StyleSheet } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';




export default function App(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(DATA);
  }, []);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }
 
    const renderItem = ({ item }) => {
      return (
          <Text>{item.lastname}</Text>
      )


  }
  return (
   <SafeAreaView style={styles.container}>
    <Search executeSearch={executeSearch}/>
    <FlatList
      data={items}
      renderItem= {({item}) => (
        <Row person = {item}/>
      )}
      ></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
})
