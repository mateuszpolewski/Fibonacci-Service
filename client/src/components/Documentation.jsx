import React from "react";
import documentation from "./img/documentation.png";
const Documentation = () => {
  return (
    <div>
    <h2>Informacja główna:</h2>
    <p>Aplikacja oparta jest na czterech kontenerach:</p>
    <ul>
        <li>mongo - Baza danych mongoDB</li>
        <li>nginx - serwer proxy</li>
        <li>client - frontend oparty na React.js</li>
        <li>backend - backend oparty na Node.js/Express.js</li>
    </ul>
    <h2>Skład aplikacji:</h2>
    <p>Aplikacja składa się z 3 podstron:</p>
    <ul>
        <li>Home - Strona główna</li>
        <li>FibCalc - Kalkulator k-tego elementu ciągu liczb Fibonacciego</li>
        <li>Documentation - Dokumentacja aplikacji</li>
    </ul>
    <h2>Uruchamianie:</h2>
    <p>W celu uruchomienia aplikacji, należy wykorzystać polecenie "docker compose -f docker-compose.dev.yml up", a następnie przejść do http://localhost:3000.</p>
    <p>Aby uruchomić aplikację w wersji produkcyjnej nalezy użyć polecenia "docker compose -f docker-compose.yml up"</p>
    <h2>Schemat:</h2>
    <img src={documentation}></img>
    </div>
  );
};

export default Documentation;