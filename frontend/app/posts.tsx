import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdTime: string;
  updatedTime: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/posts')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort(
          (a: BlogPost, b: BlogPost) => b.id - a.id
        );
        setPosts(sortedData);
      })
      .catch((error) => console.error(error));
  }, []);
   

  const renderItem = ({ item }: { item: BlogPost }) => {
    const createdDate = new Date(item.createdTime + 'Z').toLocaleString();
    const updatedDate = item.updatedTime ? new Date(item.updatedTime + 'Z').toLocaleString() : null;
    const displayDate = updatedDate || createdDate;
  
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.content}</Text>
        <Text>{displayDate}</Text>
      </View>
    );
  };
  
  

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
