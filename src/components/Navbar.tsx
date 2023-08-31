import { IoMdTimer } from 'react-icons/io';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between  ">
      <div className="flex items-center text-2xl">
        <IoMdTimer />
        <h1>Time</h1>
      </div>
      <Button>Logout</Button>
    </div>
  );
}
