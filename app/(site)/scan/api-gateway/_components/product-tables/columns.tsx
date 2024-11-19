'use client';
import { KnownApi } from '@/constants/data';
import { CellAction } from './cell-action';
import { ColumnDef } from '@tanstack/react-table';
import DateTimeCell from '@/components/date-cell';
import { MethodCell } from '@/components/method-cell';

export const columns: ColumnDef<KnownApi>[] = [
  {
    accessorKey: 'type',
    header: 'Type'
  },
  {
    accessorKey: 'gateway_project_name',
    header: 'Proxy' //Payment
  },
  {
    accessorKey: 'endpoint_path',
    header: 'Endpoint Path'
  },
  {
    accessorKey: 'method',
    header: 'Method',
    cell: ({ row }) => <MethodCell status={row.getValue('method') ?? ''} />
  },
  {
    accessorKey: 'gateway_source_type',
    header: 'Source' // Apigee x
  },
  {
    accessorKey: 'api_discovered',
    header: 'API Discovered',
    cell: ({ row }) => (
      <DateTimeCell dateStr={row.getValue('api_discovered') ?? ''} />
    )
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
