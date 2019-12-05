import React, { useState, useEffect } from 'react';
import sampleFetch from './sample-fetch';

const UseState = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const confirm = async () => {
    setIsLoading(true);
    setHasError(false);

    const isCorrect = await sampleFetch(confirmationCode);
    
    if (isCorrect) {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
      setHasError(true);
    }

    setIsLoading(false);
  };

  const reset = () => {
    setConfirmationCode('');
    setIsLoading(false);
    setHasError(false);
    setIsPasswordCorrect(false);
    setIsActive(true);
  };

  // useEffect(() => {
  //   if (isActive) {
  //     reset();
  //   }
  // }, [isActive]);

  return (
    <>
      {isActive && (
        <div className="ActiveBox">
          <h2 className="Box-title">Eliminar UseState</h2>

          {!isPasswordCorrect && (
            <>
              <p>
                Por favor, escribe el código de seguridad para comprobar que quieres eliminar.
              </p>

              {isLoading && <p>Cargando...</p>}
              {hasError && <p style={{ color: 'red' }}>Error...</p>}

              <input
                value={confirmationCode}
                onChange={e => {
                  setConfirmationCode(e.currentTarget.value);
                }}
                placeholder="Código de Seguridad"
              />

              <button onClick={() => confirm()} disabled={!confirmationCode}>
                Comprobar
              </button>
            </>
          )}

          {isPasswordCorrect && (
            <>
              <p>¿Seguro que quieres eliminar UseState?</p>
              <button onClick={() => setIsActive(false)}>
                Sí, eliminar
              </button>
              <button onClick={reset}>
                No, volver
              </button>
            </>
          )}
        </div>
      )}

      {!isActive && (
        <div className="RecoverBox">
          <h2 className="Box-title">UseState fue eliminado</h2>
          <button onClick={reset}>Recuperar UseState</button>
        </div>
      )}
    </>
  );
};

export default UseState;
