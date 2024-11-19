'use client';
import { KnownApi } from '@/constants/data';
import { CellAction } from './cell-action';
import { ColumnDef } from '@tanstack/react-table';
import { MethodCell } from '@/components/method-cell';
import DateTimeCell from '@/components/date-cell';

export const columns: ColumnDef<KnownApi>[] = [
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <div className="flex flex-col items-center rounded-sm border">
        {row.getValue('type') ?? ''}
      </div>
    )
  },
  {
    accessorKey: 'project',
    header: 'Project'
  },
  {
    accessorKey: 'endpoint_path',
    header: 'Endpoint Path'
  },
  {
    accessorKey: 'source_type',
    header: 'Source Type'
  },
  {
    accessorKey: 'api_discovered',
    header: 'API Discovered',
    cell: ({ row }) => (
      <DateTimeCell dateStr={row.getValue('api_discovered') ?? ''} />
    )
  },
  {
    accessorKey: 'method',
    header: 'Method',
    cell: ({ row }) => <MethodCell status={row.getValue('method') ?? ''} />
  },
  {
    accessorKey: 'last_updated',
    header: 'Last Updated',
    cell: ({ row }) => (
      <DateTimeCell dateStr={row.getValue('last_updated') ?? ''} />
    )
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
