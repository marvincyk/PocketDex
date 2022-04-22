import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import tw from "twrnc";
import SearchBar from "./components/SearchBar";
import PokemonLogo from "./components/PokemonLogo";
import PokemonList from "./components/PokemonList";

export default function App() {
  const [search, setSearch] = useState("");

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={tw`flex bg-white items-center justify-center h-full w-full`}
      >
        <PokemonLogo />
        <SearchBar
          onChangeText={handleChangeText}
          placeholder="Search for a Pokémon"
          search={search}
        />
        <PokemonList search={search} limit={151} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
