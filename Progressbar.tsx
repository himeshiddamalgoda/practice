import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen p-4">
      {/* Help Button */}
      <button className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">
        Help
      </button>
      
      {/* Progress Bar */}
      <div className="w-full h-6 bg-gray-300 rounded mt-20 relative overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500"
          style={{
            width: `${100 - progress}%`, 
            position: 'absolute',
            right: 0, 
          }}
        ></div>
      </div>
    </div>
  );
}
