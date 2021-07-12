import { useState } from "react";

const Create = () => {
  const [wisdom, setWisdom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const posting= { wisdom };

    fetch(process.env.REACT_APP_RANDOM_API_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posting)
    }).then(() => {
      console.log('new quote added');
    })
    setWisdom('');
  }

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <div className="create">
        <label>New Inspirational Quotes:</label>
        <textarea 
          type="text" 
          required 
          value={wisdom}
          onChange={(e) => setWisdom(e.target.value)}
        />
        <button className='add-button'>ADD</button>
        </div>
      </form>
    </div>
  );
}
 
export default Create;