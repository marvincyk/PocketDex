import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from "react-native";
import tw from "twrnc";
import TouchableCard from "./components/TouchableCard";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getPokemonList = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => data.results)
        .then(async (results) => {
          setPokemonList(
            await Promise.all(
              results.map(async (result: { name: string; url: string }) => {
                return fetch(result.url).then((response) => response.json());
              })
            )
          );
        });
    };
    getPokemonList();
  }, []);

  const capitalise = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleChangeText = (value: string) => {
    setSearch(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={tw`flex bg-white items-center justify-center h-full w-full`}
      >
        <Image
          source={{
            uri: "https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png",
          }}
          style={tw`w-4/5 h-1/5 mb-8`}
        />
        <SearchBar
          onChangeText={handleChangeText}
          placeholder="Search for a Pokémon"
          search={search}
        />
        <View style={tw`w-4/5 h-2/3 mt-10`}>
          {pokemonList && (
            <FlatList
              data={pokemonList.filter((pokemon) => {
                if (
                  search == "" ||
                  pokemon.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return pokemon;
                }
              })}
              renderItem={({ item }) => (
                <TouchableCard
                  image={item.sprites.front_default}
                  name={capitalise(item.name)}
                  key={item.id}
                />
              )}
              numColumns={3}
              initialNumToRender={12}
            />
          )}
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
