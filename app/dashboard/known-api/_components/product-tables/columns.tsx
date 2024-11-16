'use client';
import { KnownApi } from '@/constants/data';
import { CellAction } from './cell-action';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<KnownApi>[] = [
  {
    accessorKey: 'type',
    header: 'Type'
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
    header: 'API Discovered'
  },
  {
    accessorKey: 'last_updated',
    header: 'Last Updated'
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
