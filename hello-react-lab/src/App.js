// src/App.js
import './App.css';
import cosarallas from "./images/cosarallas.png";
import ironhack from "./images/ironhack.png"
import llave from "./images/llave.png";
import pc from "./images/pc.png";
import pc2 from "./images/pc2.png";
import pc3 from "./images/pc3.png";
function App() {
  return (
    <div className="App">
      <header>
        <div >
         <img className="rallas" src={cosarallas} alt="que piki"></img>
        <img className="logo" src={ironhack} alt="que piki"></img>
        </div>
       
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use</p>
        <br/>
        <p>the most popiular frontend library,</p>
        <br/>
        <p>and become a super Ninja developer.</p>
        <br/>
        <button>Awesome</button>
        <br/>
      </header>
      <div class="segundaParte">
      <section>
        <div>
        <img src={llave} alt="que piki"></img>
        <h3>Declarative</h3>
        <p>aghjsfkdjlkghsfdhulkasfdhhjkasfd</p>
        </div>
      </section>
      <section>
        <div>
        <img src={pc} alt="que piki"></img>
        <h3>Components</h3>
        <p>aghjsfkdjlkghsfdhulkasfdhhjkasfd</p>
        </div>
      </section>
      <section>
        <div>
        <img src={pc2} alt="que piki"></img>
        <h3>Single-way</h3>
        <p>aghjsfkdjlkghsfdhulkasfdhhjkasfd</p>
        </div>
      </section>
      <section>
        <div>
        <img src={pc3} alt="que piki"></img>
        <h3>JSX</h3>
        <p>aghjsfkdjlkghsfdhulkasfdhhjkasfd</p>
        </div>
      </section>
    </div>
    </div>
  );
}
export default App;