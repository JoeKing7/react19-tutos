import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-500 disabled:bg-gray-500 text-white p-2 rounded flex-1 sm:flex-none"
    >
      Agregar planeta
    </button>
  );
};
