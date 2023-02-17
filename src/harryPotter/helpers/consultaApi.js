

export const consultaApi = async(casa) => {
    const url = 'https://harry-potter-api.onrender.com/db';
    const res = await fetch(url);
    const { personajes } = await res.json();

    return personajes.filter( personaje => personaje.casaDeHogwarts === casa );
};