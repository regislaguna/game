import { useState } from "react";
import "./Game.css";

function Game () {
    // numero secreto.... do pc
    const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
    //chute
    const [guess, setGuess] =useState("");
    //msg
    const [message, setMessage] = useState('Tente adivinhar um número entre 1 e 10')
    //numero de tentativas
    const [attempts, setAttempts] = useState(0);


    //numero aleatório de 1 até 10
    function generateRandomNumber () {
        return Math.floor(Math.random() * 10) + 1;
    }

   
    function reset  () { 
        setGuess(" ")
        setSecretNumber(generateRandomNumber)
        setMessage ('Tente adivinhar um número entre 1 e 10')
        setAttempts (0)
    }

    function handleGuess () {
        const numericGuess = parseInt(guess);
        if (isNaN(numericGuess)){
            setMessage('Informe um número válido!!');
            return;
        }
        setAttempts(attempts+1);

        if (numericGuess === secretNumber){
            setMessage('Parabéns. Você acertou!!');
        }else {
            //errou!!!
            if (numericGuess < secretNumber) {
                setMessage('Estou pensando em um número maior');
            } else {
                setMessage('Estou pensando em um número menor');
            }
        }
    }


    
    return (
        <div className="box-game">
            <h1>Jogo da Advinhação</h1>
            <p>{message}</p>
            <p>Tentativas: {attempts}</p>
            <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Digite seu palpite" />
            <br/>
            <button onClick={handleGuess}>Chutar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    )
}

export default Game;