import React from 'react';
import Rubrique from './composant/rubrique'
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Téléchargement CV</h1>
    <h2>Mikael.G</h2>
    <Rubrique/>
    <section id="barre">
          <div>
              <form id="recherche" action="formulaire.php" method="post">
                  <input type="text" id="nom" name="username" placeholder="Nom" required/>
                  <br/>
                  <input type="text" id="prenom" name="username" placeholder="Prénom" required/>
                  <br/>
                  <input type="text" id="mail" name="mail" placeholder="E-mail" required/>
                  <br/>
                  <textarea id="message"></textarea>
                  <br/>
                  <div id="b">
                      <button id="button">OK</button>
                  </div>
              </form>
          </div>
      </section>
    </div>
  );
}

export default App;
