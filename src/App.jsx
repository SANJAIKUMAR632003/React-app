
import { CORE_CONCEPTS } from "./data"
import reactImg from "./assets/react-core-concepts.png";

function GetRanDes(max){
  return(Math.floor(Math.random()*(max+1)));
}

function Header(){
    const react_descriptions=["fundamental ", "core", "basic"];
    const description= react_descriptions[GetRanDes(2)];
    return(<header>
        
<img src={reactImg} alt="Stylized atom" />
<h1>React Essentials</h1>
<p>
  {description} React concepts you will need for almost any app you are
  going to build!
</p>
</header>)}

function Coreconcepts(a){
  return(
  <li>
    <img src={a.image} alt={a.title} />
    <h3>{a.title}</h3>
    <p>{a.description}</p>
  </li>)
}
function App() {
  return (
    <div>
     <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          
          <ul>
             <Coreconcepts {...CORE_CONCEPTS[0]}/>
              <Coreconcepts {...CORE_CONCEPTS[1]}/>
              <Coreconcepts {...CORE_CONCEPTS[2]}/>
              <Coreconcepts {...CORE_CONCEPTS[3]}/>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
