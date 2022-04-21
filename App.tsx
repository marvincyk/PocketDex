import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import tw from "twrnc";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import data from "./data.json";

export default function App() {
  return (
    <SafeAreaView
      style={tw`flex bg-white items-center justify-center h-full w-full`}
    >
      <SearchBar />
      <View style={tw`flex flex-row flex-wrap w-4/5 justify-around mt-10`}>
        {data.pokemon.map((pokemon) => (
          <Card image={pokemon.image} name={pokemon.name} key={pokemon.id} />
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
