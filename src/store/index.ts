import { create } from 'zustand';

type ILog = {
  note: string;
  hour: number;
  date: Date;
};

interface LogState {
  log: ILog;
  setLog: (log: ILog) => void;
}

export const useLogStore = create<LogState>()((set) => ({
  log: {
    note: '',
    hour: 0,
    date: new Date(),
  },
  setLog: (log: ILog) =>
    set((state) => ({
      log: { ...state.log, ...log },
    })),
}));
