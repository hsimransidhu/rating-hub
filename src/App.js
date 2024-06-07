import './style/index.css';
import StarRating from './components/Rating';
import Dialog from './components/Dialog';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState(false);
  return (
    <main>
     <StarRating />
     <Dialog value={value} onClose={() => setValue(false)} />
      <button className="open" onClick={() => setValue(true)}>
        Open
     </button>
    </main>
  );
}

export default App;
