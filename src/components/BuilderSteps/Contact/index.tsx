import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setInput } from "./contactSlice";

export default function Contact() {
  const contactData = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();
  console.log(contactData);

  return (
    <>
      <div className="grid grid-flow-col gap-6 w-full">
        {Object.entries(contactData).map(([key, value]) => (
          <div key={key} className="grid gap-3">
            <Label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Label>
            <Input
              value={value}
              onChange={(e) =>
                dispatch(setInput({ name: key, value: e.target.value }))
              }
              id={key}
              type="text"
              className="w-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
