'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  // { month: 'January', repo: 186, log: 80 },
  // { month: 'February', repo: 305, log: 200 },
  // { month: 'March', repo: 237, log: 120 },
  { month: 'September', repo: 237, log: 80 },
  { month: 'October', repo: 76, log: 200 },
  { month: 'November', repo: 214, log: 140 }
];

const chartConfig = {
  repo: {
    label: 'repo',
    color: 'hsl(var(--chart-1))'
  },
  log: {
    label: 'log',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>API Status - Stacked</CardTitle>
        <CardDescription>
          Showing total API Status for the last 3 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="log"
              type="natural"
              fill="var(--color-log)"
              fillOpacity={0.4}
              stroke="var(--color-log)"
              stackId="a"
            />
            <Area
              dataKey="repo"
              type="natural"
              fill="var(--color-repo)"
              fillOpacity={0.4}
              stroke="var(--color-repo)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Sep - Nov 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
