import { useActionState, useState } from 'react';
import { Planet } from '../../interfaces/planet.interface';
import { createPlanetActionForm } from '../../actions/create-planet.action';
import { SubmitButton } from './SubmitButton';

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
  // const [name, setName] = useState('');
  // const [type, setType] = useState('');
  // const [distanceFromSun, setDistanceFromSun] = useState('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onAddPlanet({ name, type, distanceFromSun });
  // };

  const [state, formAction, isPending] = useActionState(
    async (prevState: unknown, formData: FormData) => {
      const newPlanet = await createPlanetActionForm(prevState, formData);
      onAddPlanet(newPlanet);
    },
    null,
  );

  return (
    <form className="mb-4 flex flex-col md:flex-row" action={formAction}>
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="name"
      />
      <input
        type="text"
        placeholder="Tipo de astro"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="type"
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name="distanceFromSun"
      />
      {/* <button
        disabled={isPending}
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded flex-1 sm:flex-none"
      >
        Agregar planeta
      </button> */}
      <SubmitButton></SubmitButton>
    </form>
  );
};
