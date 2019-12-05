import React, { useReducer, useEffect } from 'react';
import sampleFetch from './sample-fetch';

const initialState = {
  confirmationCode: '',
  isLoading: false,
  hasError: false,
  isPasswordCorrect: false,
  isActive: true,
};

const confirmationReducer = (state, action) => {
  switch (action.type) {
    case 'WRITE_CONFIRMATION_CODE': {
      return {
        ...state,
        confirmationCode: action.payload,
      };
    }
    case 'START_CONFIRMATION': {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case 'CONFIRMATION_FAILED': {
      return {
        ...state,
        isPasswordCorrect: false,
        isLoading: false,
        hasError: true,
      };
    }
    case 'CONFIRMATION_SUCCESS': {
      return {
        ...state,
        isPasswordCorrect: true,
        isLoading: false,
        hasError: false,
      };
    }
    case 'DEACTIVATE': {
      return {
        ...state,
        isActive: false,
      };
    }
    case 'RESET': {
      return { ...initialState };
    }
    default: return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(confirmationReducer, initialState);

  const {
    confirmationCode,
    isLoading,
    hasError,
    isPasswordCorrect,
    isActive,
  } = state;

  const confirm = async () => {
    dispatch({ type: 'START_CONFIRMATION' });

    const isCorrect = await sampleFetch(confirmationCode);
    
    if (isCorrect) {
      dispatch({ type: 'CONFIRMATION_SUCCESS' });
    } else {
      dispatch({ type: 'CONFIRMATION_FAILED' });
    }
  };
  
  // useEffect(() => {
  //   if (isActive) {
  //     dispatch({ type: 'RESET' });
  //   }
  // }, [isActive]);
  
  return (
    <>
      {isActive && (
        <div className="ActiveBox">
          <h2 className="Box-title">Eliminar UseReducer</h2>

          {!isPasswordCorrect && (
            <>
              <p>
                Por favor, escribe el código de seguridad para confirmar que quieres eliminar.
              </p>

              {isLoading && <p>Cargando...</p>}
              {hasError && <p style={{ color: 'red' }}>Error...</p>}

              <input
                value={confirmationCode}
                onChange={e => {
                  dispatch({
                    type: 'WRITE_CONFIRMATION_CODE',
                    payload: e.currentTarget.value,
                  })
                }}
                placeholder="Código de Seguridad"
              />

              <button
                onClick={confirm}
                disabled={!confirmationCode}
              >
                Confirmar
              </button>
            </>
          )}

          {isPasswordCorrect && (
            <>
              <p>¿Seguro que quieres eliminar UseReducer?</p>
              <button
                onClick={() => {
                  dispatch({ type: 'DEACTIVATE' });
                }}
              >
                Sí, eliminar
              </button>
              <button
                onClick={() => {
                 dispatch({ type: 'RESET' });
                }}
              >
                No, volver
              </button>
            </>
          )}
        </div>
      )}

      {!isActive && (
        <div className="RecoverBox">
          <h2 className="Box-title">UseState fue eliminado</h2>
          <button
            onClick={() => {
              dispatch({ type: 'RESET' });
            }}
          >
            Recuperar UseState
          </button>
        </div>
      )}
    </>
  );
}

export default UseReducer;
