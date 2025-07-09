import { Button } from './ui/button';

interface BearsCardProps {
  type: '🐻' | '🐻‍❄️' | '🐼';
  title: string;
  counter: number;
  increaseBears: (by: number) => void;
}

export const BearsCard = ({
  type,
  title,
  counter,
  increaseBears,
}: BearsCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-64">
      <div className="text-4xl mb-2">{type}</div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="flex items-center gap-4 mb-4">
        <Button onClick={() => increaseBears(-1)}>-</Button>
        <span className="text-2xl font-semibold">{counter}</span>
        <Button onClick={() => increaseBears(+1)}>+</Button>
      </div>
    </div>
  );
};
