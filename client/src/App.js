import './App.css';
import Notes from "./components/notes";
import About from "./components/About"
import Create from "./components/Create"
import {BrowserRouter, Route} from 'react-router-dom';
import TopNav from './components/TopNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Route exact path="/" component={Notes}/>
        <Route path="/about" component={About}/>
        <Route path="/create" component={Create}/>
      </div>
    </BrowserRouter>
  //   <div className="col-sm-12 col-xl-10 maindiv">
  //   <Route exact path='/' component={SenSentence}/>
  //   <Route path='/Sentiment/Paragraph' component={SenParagraph}/>
  //   <Route path='/Emotion/Sentences' component={EmoSentence}/>
  //   <Route path='/Emotion/Paragraph' component={EmoParagraph}/>
  // </div>
  );
}

export default App;
