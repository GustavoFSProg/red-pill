import './App.css'
import AudioPlayer from 'material-ui-audio-player'
import Mirror from './assets/Mirror.wav'
import Cover from './assets/Cover.wav'
import Vanessa from './assets/Vanessa.mp3'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10px',
            background: '#282c34',

            color: 'white',
            width: '80%',
          }}
        >
          <h1 style={{ color: 'red', marginBottom: '40px' }}> Red Pill</h1>
          <h3>Mirror</h3>
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
          <h3>Cover - Aghatocles</h3>
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
          <h3>Rage</h3>
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
          <br />
         
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 style={{ color: 'white' }}>Line up:</h2>
            <span style={{ fontSize: '20px', marginBottom: '13px' }}>
              Bruno Pommer - Bass and Vocals
            </span>
            <span style={{ fontSize: '20px', marginBottom: '13px' }}>Gustavo Sohne - Drums</span>
            <span style={{ fontSize: '20px', marginBottom: '13px' }}>
              Rodrigo Avellar de Muniagurria - Guitar
            </span>
            <span style={{ fontSize: '20px', marginBottom: '33px' }}>Vanessa Keppler - Vocals</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
