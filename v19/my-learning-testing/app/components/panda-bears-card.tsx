import { Button } from './ui/button';

import { useBearsStore } from '~/store';

export const PandaBearsCard = () => {
  const pandaBears = useBearsStore((state) => state.pandaBears);
  const increasePandaBears = useBearsStore((state) => state.increasePandaBears);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-64">
      <div className="text-4xl mb-2">🐼</div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Panda Bears</h2>
      <div className="flex items-center gap-4 mb-4">
        <Button onClick={() => increasePandaBears(-1)}>-</Button>
        <span className="text-2xl font-semibold">{pandaBears}</span>
        <Button onClick={() => increasePandaBears(+1)}>+</Button>
      </div>
    </div>
  );
};
