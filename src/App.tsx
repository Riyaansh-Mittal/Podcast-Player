import "./App.css";
import PodcastPlayer from "./features/podcast-player/PodcastPlayer";

function App() {
  const chapters = [
    { title: "Introduction", time: "0:00" },
    { title: "Original Statement", time: "1:04" },
    { title: "The Night Bus", time: "3:20" },
    { title: "The Ambulance", time: "6:19" },
    { title: "The Table", time: "9:03" },
    { title: "Leaving", time: "9:34" },
    { title: "Watching Graham", time: "10:20" },
    { title: "Grahams energy", time: "12:16" },
    { title: "He did almost nothing else", time: "13:29" },
    { title: "The pipe", time: "15:24" },
    { title: "The arm", time: "16:07" },
    { title: "The police", time: "17:21" },
    { title: "Grahams flat", time: "18:00" },
    { title: "Police", time: "18:58" },
    { title: "The New Graham", time: "19:41" },
    { title: "The Old Graham", time: "20:23" },
    { title: "Statement Ends", time: "21:17" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <PodcastPlayer
        audioUrl={"./EP1.mp3"}
        thumbnailUrl={'./Thumbnail.jpg'}
        chapters={chapters}
      />
    </div>
  );
}

export default App;
