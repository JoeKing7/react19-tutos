import { useNavigation } from 'react-router';
import type { Route } from './+types/home';
import { ChartAreaInteractive } from '~/components/chart-area-interactive';
import { DataTable } from '~/components/data-table';
import { SectionCards } from '~/components/section-cards';

export async function loader() {
  const res = await fetch(
    'https://mocki.io/v1/bdef34b6-3b59-4011-b363-a1881284e3d5',
  );
  const data = await res.json();

  const chartRes = await fetch(
    'https://mocki.io/v1/c776606a-703f-4159-a8ed-d40716aacc18',
  );
  const chartData = await chartRes.json();

  return {
    data,
    chartData,
  };
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const Home = ({ loaderData }: Route.ComponentProps) => {
  const { data, chartData } = loaderData;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive data={chartData} />
          </div>

          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
