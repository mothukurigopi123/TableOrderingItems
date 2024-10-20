import React, { useState } from 'react';

function Home1({ setTableNumber }) {
  const [qrCode, setQrCode] = useState('');

  const handleScan = () => {
    // Dummy function for QR scanning
    const scannedCode = 'Table-5';  // Simulate QR code scan
    setQrCode(scannedCode);
    setTableNumber(scannedCode);  // Pass table number to parent
  };

  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <button onClick={handleScan}>Scan QR Code</button>
      {qrCode && <p>Scanned Table Number: {qrCode}</p>}
    </div>
  );
}

export default Home1;
