import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const App: React.FC = () => {
  console.log('App component is rendering');

  const [ufoPosition, setUfoPosition] = useState({ x: 50, y: 50 });
  const [isBeamingUp, setIsBeamingUp] = useState(false);

  useEffect(() => {
    console.log('useEffect hook is running');
    const moveUFO = () => {
      setUfoPosition({
        x: Math.random() * 80 + 10,
        y: Math.random() * 40 + 10,
      });
    };

    const interval = setInterval(moveUFO, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBeamMeUp = () => {
    setIsBeamingUp(true);
    setTimeout(() => setIsBeamingUp(false), 2000);
    alert("Welcome aboard, young space explorer! 👽🚀");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="stars absolute inset-0"></div>
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold mb-2">ETembassy.org</h1>
        <p className="text-xl">Alien Adventures for Young Explorers</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <div
            className={`ufo transition-all duration-300 ease-in-out ${isBeamingUp ? 'scale-125' : ''}`}
            style={{ left: `${ufoPosition.x}%`, top: `${ufoPosition.y}%` }}
          >
            <Rocket size={80} className="text-green-400 transform rotate-45" />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome, Space Cadets!</h2>
            <p className="text-xl mb-6">Are you ready for an out-of-this-world adventure?</p>
            <button
              onClick={handleBeamMeUp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all duration-300 transform hover:scale-110 flex items-center"
            >
              Beam Me Up! <Rocket className="ml-2" />
            </button>
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full p-4 text-center">
        <p>&copy; 2024 ETembassy.org - Your Gateway to the Stars</p>
      </footer>
    </div>
  );
};

export default App;