'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import dayjs from 'dayjs';

import { GrAdd } from 'react-icons/gr';
import { DatePicker } from './DatePicker';
import { useLogStore } from '@/store';

export default function NewLog() {
  const { log, setLog, setLogs } = useLogStore((state) => state);
  const { toast } = useToast();

  const closeDialog = () => {
    document.getElementById('close-btn')?.click();
  };

  const validateLog = () => {
    if (!log.date || !log.hour || log.hour === 0) {
      throw 'Date or hour cannot be empty';
    } else if (log.hour >= 24) {
      throw 'Please enter valid hour';
    }
  };

  const submitLog = () => {
    try {
      validateLog();
      setLogs(log, dayjs(log.date).format('YYYY-MM-DD'));
      toast({
        title: 'Successfully create log',
        description: `${log.hour} hours in ${log.date.toDateString()}`,
      });
      closeDialog();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Fail to create log',
        description: error as string,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full sm:w-72 border-dashed border py-3 flex items-center justify-center rounded-md cursor-pointer hover:border-solid ">
          <GrAdd />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            Remember, time is your most valuable asset - invest it wisely with
            our Time Log App!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <DatePicker />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input
              id="hour"
              type="number"
              className="col-span-3"
              value={log.hour}
              onChange={(e) =>
                setLog({ ...log, hour: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              placeholder="Note of the log"
              className="col-span-3"
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
