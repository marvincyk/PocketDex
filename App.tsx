import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import tw from "twrnc";
import Home from "./screens/Home";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={tw`flex bg-white items-center justify-center h-full w-full`}
      >
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
