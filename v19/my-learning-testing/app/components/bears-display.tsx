import { useShallow } from 'zustand/react/shallow';
import { Button } from './ui/button';

import { useBearsStore } from '~/store';

export const BearsDisplay = () => {
  const bears = useBearsStore(useShallow((state) => state.bears));
  const doNothing = useBearsStore((state) => state.doNothing);
  const addBear = useBearsStore((state) => state.addBear);
  const clearBears = useBearsStore((state) => state.clearBears);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-64">
      <Button onClick={doNothing}>Do Nothing</Button>
      <Button onClick={addBear} className="mt-3">
        Add Bear
      </Button>
      <pre>{JSON.stringify(bears, null, 2)}</pre>

      <Button onClick={clearBears}>Clear all</Button>
    </div>
  );
};
