import React, { useState } from "react";
import Search from "./Components/Search";
import Rater from "./Components/Rater";
import MovieList from "./Components/MovieList";
import { Switch, Route } from "react-router-dom";
import Movie from "./Components/Moive";
// import NotFound from "./Components/NotFound"
import BlackList from "./assets/MoviePoster/BlackList.jpg";
import FatherHood from "./assets/MoviePoster/FatherHood.jpg";
import Infinite from "./assets/MoviePoster/Infinite.jpg";
import Jumanji from "./assets/MoviePoster/Jumanji.jpg";
import Lupin from "./assets/MoviePoster/Lupin.jpg";
import Vikings from "./assets/MoviePoster/Vikings.jpg";
import WrathOfMan from "./assets/MoviePoster/WrathOfMan.jpg";
import "./App.css";

function App() {
  const [arr, setArr] = useState([
    {
      
      id: 1,
      Img: WrathOfMan,
      video: "https://www.youtube.com/embed/EFYEni2gsK0",
      Name: "Wrath Of Man",
      rate: "2",
      description:
        "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
    },
    {
      
      id: 2,
      Img: Jumanji,
      Name: "Jumanji: The next level",
      video: "https://www.youtube.com/embed/rBxcF-r9Ibs",
      rate: "1",
      description:
        "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
    },
    {
      id: 3,
      Img: Infinite,
      Name: "Infinite",
      video: "https://www.youtube.com/embed/_WWEOCQGxSw",
      rate: "3",
      description:
        "A man discovers that his hallucinations are actually visions from past lives.",
    },
    {
      id: 4,
      Img: FatherHood,
      Name: "Fatherhood",
      video: "https://www.youtube.com/embed/T3mwUEoZdrI",
      rate: "1",
      description:
        "A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughter's birth.",
    },
    {
      
      id: 5,
      Img: BlackList,
      Name: "The Blacklist",
      video: "https://www.youtube.com/embed/XihA6GWIBdM",
      rate: "4",
      description:
        "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
    },
    {
      
      id: 6,
      Img: Vikings,
      Name: "Vikings",
      video: "https://www.youtube.com/embed/9GgxinPwAGc",
      rate: "5",
      description:
        "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
    },
    {
      
      id: 7,
      Img: Lupin,
      Name: "Lupin",
      video: "https://www.youtube.com/embed/ga0iTWXCGa0",
      rate: "3",
      description:
        "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [rate, setRate] = useState(1);

  const handleChangeFilterByName = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <div className="Search">
            <Search handleChangeFilterByName={handleChangeFilterByName} />
            <Rater setRate={setRate} />
          </div>
          <MovieList rate={rate} inputText={inputText}  arr={arr} setArr={setArr} />
        </div>
      </Route>
      <Route exact path="/:id"   render={(props) => <Movie  arr={arr} {...props}/>} />
      {/* <Route  render={(props)=><NotFound/>} /> */}
    </Switch>
  );
}

export default App;
