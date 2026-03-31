import Armenia from "./components/Armenia";
import FlagOne from "./components/FlagOne";
import FlagThree from "./components/FlagThree";
import FlagTwo from "./components/FlagTwo";
import Gabon from "./components/Gabon";
import Germany from "./components/Germany";
import Heading from "./components/Heading";

export default function App(){
  return(
    <>
    <Heading/>
    <div>
      <FlagOne/>
      <Armenia/>
    <FlagTwo/>
    <Gabon/>
    <FlagThree/>
    <Germany/>
    </div>
    </>
  );
}