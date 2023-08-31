import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Logs() {
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
          <TableRow>
            <TableCell className="font-medium">
              {new Date().toDateString()}
            </TableCell>
            <TableCell>10</TableCell>
            <TableCell>This is placeholder</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
