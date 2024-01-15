import React, { useEffect } from 'react';
import '../../CSS/Cek/cek.css';

const App = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = 'home.html';
    }, 15000);

    // Clear the timeout to avoid memory leaks when the component unmounts
    return () => clearTimeout(redirectTimeout);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      marginTop: '9cm',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2 style={{ color: '#000000' }}>
        Silahkan cek aplikasi Whatsapp anda untuk menlanjutkan pembelian
      </h2>
    </div>
  );
}

export default App;
