import './App.css'
import AudioPlayer from 'material-ui-audio-player'
import Mirror from './assets/Mirror.wav'
import Cover from './assets/Cover.wav'
import Vanessa from './assets/Vanessa.mp3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'red' }}> Red Pill</h1>
        <h4>Mirror</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={Mirror}
        />
        <br />
        <h4>Cover - Aghatocles</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={Cover}
        />
        <br />
        <h4>Rage</h4>
        <AudioPlayer
          elevation={1}
          width="55%"
          variation="default"
          spacing={3}
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={true}
          src={Vanessa}
        />
      </header>
    </div>
  )
}

export default App
