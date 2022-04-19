import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import tw from "twrnc";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <SafeAreaView
      style={tw`flex bg-white items-center justify-center h-full w-full`}
    >
      <SearchBar />
      <View
        style={tw`flex flex-row flex-wrap w-4/5 content-center justify-around`}
      >
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          name="Bulbasaur"
        />
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
          name="Ivysaur"
        />
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
          name="Venusaur"
        />
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
          name="Charmander"
        />
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"
          name="Charmeleon"
        />
        <Card
          image="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
          name="Charizard"
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
