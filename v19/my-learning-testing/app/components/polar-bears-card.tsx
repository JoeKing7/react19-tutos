import { Button } from './ui/button';

import { useBearsStore } from '~/store';

export const PolarBearsCard = () => {
  const polarBears = useBearsStore((state) => state.polarBears);
  const increasePolarBears = useBearsStore((state) => state.increasePolarBears);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-64">
      <div className="text-4xl mb-2">🐻‍❄️</div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Polar Bears</h2>
      <div className="flex items-center gap-4 mb-4">
        <Button onClick={() => increasePolarBears(-1)}>-</Button>
        <span className="text-2xl font-semibold">{polarBears}</span>
        <Button onClick={() => increasePolarBears(+1)}>+</Button>
      </div>
    </div>
  );
};
