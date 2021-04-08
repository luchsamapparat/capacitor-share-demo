import { Plugins } from '@capacitor/core';
import './App.css';
const { Share } = Plugins;

function App() {
  const doShare = () => Share.share({
    title: 'See cool stuff',
    text: 'Really awesome thing you need to see right meow',
    url: 'http://ionicframework.com/',
    dialogTitle: 'Share with buddies'
  });

  return (
    <div className="App">
      <button onClick={() => doShare()}>SHARE</button>
    </div>
  );
}

export default App;
