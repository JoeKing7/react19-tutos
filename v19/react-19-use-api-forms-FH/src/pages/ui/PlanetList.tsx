import { useState, useOptimistic, useTransition } from 'react';
import { updateCapitalizePlanetName as updateUpperCasePlanetName } from '../../actions/update-planet.action';
import { Planet } from '../../interfaces/planet.interface';

interface Props {
  planets: Planet[];
}

export const PlanetList = ({ planets }: Props) => {
  const [isPending, startTransition] = useTransition();

  const [optimisticPlanets, setOptimisticPlanets] = useOptimistic(
    planets,
    (current, newPlanet: Planet) => {
      const updatedPlanet = current.map((planet) =>
        planet.id === newPlanet.id ? newPlanet : planet,
      );
      return updatedPlanet;
    },
  );

  const handleUpdateUpperCasePlanetName = async (planet: Planet) => {
    startTransition(async () => {
      const data = {
        ...planet,
        name: planet.name.toUpperCase(), // Convertir el nombre a mayúsculas
      };

      try {
        setOptimisticPlanets(data);
        const updatedPlanet = await updateUpperCasePlanetName(data);
        setOptimisticPlanets(updatedPlanet);
      } catch (error) {
        console.error('Error al actualizar el nombre del planeta:', error);

        setOptimisticPlanets(planet);
      }
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
      {optimisticPlanets.map((planet) => (
        <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">{planet.name}</h2>
          <p className="text-gray-700">{planet.type}</p>
          <p className="text-gray-700">{planet.distanceFromSun}</p>

          <br />

          <button
            className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded w-full"
            onClick={() => handleUpdateUpperCasePlanetName(planet)}
            disabled={isPending}
          >
            Actualizar
          </button>
        </div>
      ))}
    </div>
  );
};
