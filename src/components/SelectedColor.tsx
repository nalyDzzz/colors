'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useColorContext } from '@/app/colors/providers';

export default function SelectedColor() {
  const { color } = useColorContext();
  return (
    <>
      <span className="text-base-content text-nowrap">
        Selected Color: {color}
      </span>
      <div
        className="w-16 h-16 border rounded-lg"
        style={{ backgroundColor: color }}
      ></div>
      <Select defaultValue="500">
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Base" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
          <SelectItem value="200">200</SelectItem>
          <SelectItem value="300">300</SelectItem>
          <SelectItem value="400">400</SelectItem>
          <SelectItem value="500">500</SelectItem>
          <SelectItem value="600">600</SelectItem>
          <SelectItem value="700">700</SelectItem>
          <SelectItem value="800">800</SelectItem>
          <SelectItem value="900">900</SelectItem>
          <SelectItem value="950">950</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
