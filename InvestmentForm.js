import React, { useState, useEffect } from 'react';
import './InvestmentForm.css'; // Import your CSS file for styling
import bg from './bg.mp4';


function InvestmentForm() {
  
  const [amountToInvest, setAmountToInvest] = useState('');
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the amount to invest is greater than zero
    if (amountToInvest <= 0) {
      alert('Amount to be invested must be greater than zero.');
      return;
    }

    
  

    // Verify the user's answer to the addition challenge
    if (parseInt(answer) === num1 + num2) {
      // Handle form submission here, e.g., submit the data to the server
      console.log('Amount to be Invested:', amountToInvest);
      // Reset the form
      setAmountToInvest('');
      setAnswer('');
      setSubmitted(true);
      // Generate a new addition challenge
      generateRandomNumbers();
     // Redirect based on the entered amount
    
    } else {
      alert('Incorrect answer. Please try again.');
      setAnswer('');
    }
  };


  return (
    <div>
      <center>
        <heading1>WELCOME TO MONEY ADVISER</heading1><br/>
        <heading2>ENTER THE AMOUNT TO BE INVESTED</heading2>
      </center>
      <div className="container">
        <div>
          <video src={bg} autoPlay loop muted className="video-background" />
          <div className="center">
            {submitted && <p>LOGIN IN SUCCESSFULLY!!</p>}
            <div className="form-group">
              <input
                type="number"
                id="amountToInvest"
                name="amountToInvest"
                value={amountToInvest}
                onChange={(e) => setAmountToInvest(e.target.value)}
                required
              />
            </div>

            {/* Display the addition challenge */}
            <div className="form-group">
              <label htmlFor="additionChallenge">
                {num1} + {num2} = ?
              </label>
              <input
                type="number"
                id="additionChallenge"
                name="additionChallenge"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestmentForm;
