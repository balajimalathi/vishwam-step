'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-09-01', repo: 222, log: 150 },
  { date: '2024-09-02', repo: 97, log: 180 },
  { date: '2024-09-03', repo: 167, log: 120 },
  { date: '2024-09-04', repo: 242, log: 260 },
  { date: '2024-09-05', repo: 373, log: 290 },
  { date: '2024-09-06', repo: 301, log: 340 },
  { date: '2024-09-07', repo: 245, log: 180 },
  { date: '2024-09-08', repo: 409, log: 320 },
  { date: '2024-09-09', repo: 59, log: 110 },
  { date: '2024-09-10', repo: 261, log: 190 },
  { date: '2024-09-11', repo: 327, log: 350 },
  { date: '2024-09-12', repo: 292, log: 210 },
  { date: '2024-09-13', repo: 342, log: 380 },
  { date: '2024-09-14', repo: 137, log: 220 },
  { date: '2024-09-15', repo: 120, log: 170 },
  { date: '2024-09-16', repo: 138, log: 190 },
  { date: '2024-09-17', repo: 446, log: 360 },
  { date: '2024-09-18', repo: 364, log: 410 },
  { date: '2024-09-19', repo: 243, log: 180 },
  { date: '2024-09-20', repo: 89, log: 150 },
  { date: '2024-09-21', repo: 137, log: 200 },
  { date: '2024-09-22', repo: 224, log: 170 },
  { date: '2024-09-23', repo: 138, log: 230 },
  { date: '2024-09-24', repo: 387, log: 290 },
  { date: '2024-09-25', repo: 215, log: 250 },
  { date: '2024-09-26', repo: 75, log: 130 },
  { date: '2024-09-27', repo: 383, log: 420 },
  { date: '2024-09-28', repo: 122, log: 180 },
  { date: '2024-09-29', repo: 315, log: 240 },
  { date: '2024-09-30', repo: 454, log: 380 },
  { date: '2024-10-01', repo: 165, log: 220 },
  { date: '2024-10-02', repo: 293, log: 310 },
  { date: '2024-10-03', repo: 247, log: 190 },
  { date: '2024-10-04', repo: 385, log: 420 },
  { date: '2024-10-05', repo: 481, log: 390 },
  { date: '2024-10-06', repo: 498, log: 520 },
  { date: '2024-10-07', repo: 388, log: 300 },
  { date: '2024-10-08', repo: 149, log: 210 },
  { date: '2024-10-09', repo: 227, log: 180 },
  { date: '2024-10-10', repo: 293, log: 330 },
  { date: '2024-10-11', repo: 335, log: 270 },
  { date: '2024-10-12', repo: 197, log: 240 },
  { date: '2024-10-13', repo: 197, log: 160 },
  { date: '2024-10-14', repo: 448, log: 490 },
  { date: '2024-10-15', repo: 473, log: 380 },
  { date: '2024-10-16', repo: 338, log: 400 },
  { date: '2024-10-17', repo: 499, log: 420 },
  { date: '2024-10-18', repo: 315, log: 350 },
  { date: '2024-10-19', repo: 235, log: 180 },
  { date: '2024-10-20', repo: 177, log: 230 },
  { date: '2024-10-21', repo: 82, log: 140 },
  { date: '2024-10-22', repo: 81, log: 120 },
  { date: '2024-10-23', repo: 252, log: 290 },
  { date: '2024-10-24', repo: 294, log: 220 },
  { date: '2024-10-25', repo: 201, log: 250 },
  { date: '2024-10-26', repo: 213, log: 170 },
  { date: '2024-10-27', repo: 420, log: 460 },
  { date: '2024-10-28', repo: 233, log: 190 },
  { date: '2024-10-29', repo: 78, log: 130 },
  { date: '2024-10-30', repo: 340, log: 280 },
  { date: '2024-10-31', repo: 178, log: 230 },
  { date: '2024-11-01', repo: 178, log: 200 },
  { date: '2024-11-02', repo: 470, log: 410 },
  { date: '2024-11-03', repo: 103, log: 160 },
  { date: '2024-11-04', repo: 439, log: 380 },
  { date: '2024-11-05', repo: 88, log: 140 },
  { date: '2024-11-06', repo: 294, log: 250 },
  { date: '2024-11-07', repo: 323, log: 370 },
  { date: '2024-11-08', repo: 385, log: 320 },
  { date: '2024-11-09', repo: 438, log: 480 },
  { date: '2024-11-10', repo: 155, log: 200 },
  { date: '2024-11-11', repo: 92, log: 150 },
  { date: '2024-11-12', repo: 492, log: 420 },
  { date: '2024-11-13', repo: 81, log: 130 },
  { date: '2024-11-14', repo: 426, log: 380 },
  { date: '2024-11-15', repo: 307, log: 350 },
  { date: '2024-11-16', repo: 371, log: 310 },
  { date: '2024-11-17', repo: 475, log: 520 },
  { date: '2024-11-18', repo: 107, log: 170 },
  { date: '2024-11-19', repo: 341, log: 290 },
  { date: '2024-11-20', repo: 408, log: 450 },
  { date: '2024-11-21', repo: 169, log: 210 },
  { date: '2024-11-22', repo: 317, log: 270 },
  { date: '2024-11-23', repo: 480, log: 530 },
  { date: '2024-11-24', repo: 132, log: 180 },
  { date: '2024-11-25', repo: 141, log: 190 },
  { date: '2024-11-26', repo: 434, log: 380 },
  { date: '2024-11-27', repo: 448, log: 490 },
  { date: '2024-11-28', repo: 149, log: 200 },
  { date: '2024-11-29', repo: 103, log: 160 },
  { date: '2024-11-30', repo: 446, log: 400 }
];

const chartConfig = {
  views: {
    label: 'APIs Found'
  },
  repo: {
    label: 'repo',
    color: 'hsl(var(--chart-1))'
  },
  log: {
    label: 'log',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('repo');

  const total = React.useMemo(
    () => ({
      repo: chartData.reduce((acc, curr) => acc + curr.repo, 0),
      log: chartData.reduce((acc, curr) => acc + curr.log, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>File Scanned</CardTitle>
          <CardDescription>
            Showing total file scanned for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['repo', 'log'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
