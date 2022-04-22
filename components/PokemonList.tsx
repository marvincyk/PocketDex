import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { APIResource, Pokemon, PokemonClient } from "pokenode-ts";
import TouchableCard from "./TouchableCard";

interface PokemonListProps {
  search?: string;
  offset?: number;
  limit?: number;
}

const PokemonList = ({ search, offset, limit }: PokemonListProps) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemonList = async () => {
      const api = new PokemonClient();
      await api
        .listPokemons(offset, limit)
        .then((data) => data.results)
        .then(async (results) => {
          setPokemonList(
            await Promise.all(
              results.map(async (result: APIResource) => {
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

  return (
    <View style={tw`w-4/5 h-2/3 mt-10`}>
      {pokemonList && (
        <FlatList
          data={pokemonList.filter((pokemon) => {
            if (
              search == "" ||
              pokemon.name.toLowerCase().includes(search!.toLowerCase())
            ) {
              return pokemon;
            }
          })}
          renderItem={({ item }) => (
            <TouchableCard
              image={item.sprites.front_default!}
              name={capitalise(item.name)}
              key={item.id}
            />
          )}
          numColumns={3}
          initialNumToRender={12}
        />
      )}
    </View>
  );
};

export default PokemonList;
