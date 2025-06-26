import { planetsApi } from '../api/planetsApi';
import type { Planet } from '../interfaces/planet.interface';

const sleep = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

export const updateCapitalizePlanetName = async (planet: Planet) => {
  try {
    await sleep(); // Simula un retraso de 2 segundos
    throw new Error('Error simulado'); // Simula un error para probar el manejo de errores

    const response = await planetsApi.patch<Planet>(`/${planet.id}`, planet);
    console.log('Planeta actualizado correctamente');

    return response.data;
  } catch (error) {
    console.error('Error al actualizar el nombre del planeta:', error);
    throw new Error(`Error al actualizar el nombre del planeta: ${error}`);
  }
};
