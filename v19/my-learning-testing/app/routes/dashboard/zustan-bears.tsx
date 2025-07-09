import { BlackBearsCard } from '~/components/black-bears-card';
import { PandaBearsCard } from '~/components/panda-bears-card';
import { PolarBearsCard } from '~/components/polar-bears-card';

import { BearsDisplay } from '~/components/bears-display';

const ZustanBears = () => {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="flex gap-8 mr-8">
        <BlackBearsCard></BlackBearsCard>
        <PandaBearsCard></PandaBearsCard>
        <PolarBearsCard></PolarBearsCard>
      </div>
      <BearsDisplay></BearsDisplay>
    </div>
  );
};

export default ZustanBears;
