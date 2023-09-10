'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { ILog, useLogStore } from '@/store';

export default function Logs() {
  const { logs } = useLogStore((state) => state);

  return (
    <div className="border border-dashed p-5">
      <Table>
        <TableCaption>List of log</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Date</TableHead>
            <TableHead className="w-1/3">Hour</TableHead>
            <TableHead className="w-1/3">Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(logs)?.map(
            ([key, log]: [key: string, log: ILog], index: number) => {
              const date = log.date as Date;

              return (
                <TableRow
                  key={key}
                  className={cn(log.hour < 5 ? 'bg-red-100' : '')}
                >
                  <TableCell className="font-medium">
                    {date.toDateString()}
                  </TableCell>
                  <TableCell>{log.hour}</TableCell>
                  <TableCell>{log.note}</TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
}
