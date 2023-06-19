import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const selectedDate = new Date(birthDate);

    if (isNaN(selectedDate)) {
      setAge(null);
      return;
    }

    let calculatedAge = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < selectedDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const handleInputChange = (event) => {
    setBirthDate(event.target.value);
  };

  return (
    <div>
      <label>Date of Birth:</label>
      <input type="date" value={birthDate} onChange={handleInputChange} />

      <button onClick={calculateAge}>Calculate Age</button>

      {age !== null && <p>Your age is {age} years old.</p>}
    </div>
  );
};

export default AgeCalculator;
