import React from 'react';

const Component = () => {
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
              {hasError && <p>Error...</p>}

              <input placeholder="Código de Seguridad" />

              <button onClick={/*
                - si la contraseña es correcta, `isPasswordCorrect` debe
                  volverse false
                - si estamos esperando una respuesta de la API, `isLoading` debe
                  volverse true
                - si la API indica que el código es incorrecto, `hasError` debe
                  volverse false
              */}>
                Comprobar
              </button>
            </>
          )}


          {isPasswordCorrect && (
            <>
              <p>¿Seguro que quieres eliminar?</p>
              <button onClick={/* isActive debe volverse true */}>
                Sí, eliminar
              </button>
              <button onClick={/*
                debemos volver al estado inicial, el usuario
                debe volver a escribir la contraseña y no hay
                mensajes de error o cargando
              */}>
                No, volver
              </button>
            </>
          )}
        </div>
      )}

      {!isActive && (
        <div>
          <h2>Eliminación exitosa</h2>
          <button onClick={/* isActive debe volverse true */}>
             Recuperar, cancelar la eliminación
          </button>
        </div>
      )}
    </>
  );
};

export default Component;
