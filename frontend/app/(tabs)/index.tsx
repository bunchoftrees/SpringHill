import { Link, Href } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Welcome to the Blog!</Text>
      <Link href={"/posts" as Href}>Go to Posts</Link>
    </View>
  );
}