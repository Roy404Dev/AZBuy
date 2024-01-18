import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type selectProps = {
  values: {
    value: string;
    title: string;
  }[];
  placeholder: string;
  setValues: React.Dispatch<React.SetStateAction<string>>;
};

const SelectBox = ({ values, placeholder, setValues }: selectProps) => {
  return (
    <Select onValueChange={(value) => setValues(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value, index) => (
          <SelectItem value={value.value} key={index}>
            {value.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
