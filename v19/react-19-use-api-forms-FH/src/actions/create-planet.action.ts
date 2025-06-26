import { planetsApi } from '../api/planetsApi';
import type { Planet } from '../interfaces/planet.interface';

export const createPlanetAction = async (plantet: Partial<Planet>) => {
  //Se usa Partial<Planet> porque posiblemente recibamos undefined pero aquí una interface que nos indique como debe ser el objeto que se envía al crear un planeta
  try {
    const response = await planetsApi.post('/', plantet);
    return response.data;
  } catch (error) {
    console.error(error);

    return error;
  }
};

export const createPlanetActionForm = async (
  prevState: unknown,
  formData: FormData,
): Promise<Planet> => {
  //Se usa Partial<Planet> porque posiblemente recibamos undefined pero aquí una interface que nos indique como debe ser el objeto que se envía al crear un planeta
  try {
    const data = Object.fromEntries(formData.entries());
    const response = await planetsApi.post('/', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al crear el planeta: ' + error);
  }
};
