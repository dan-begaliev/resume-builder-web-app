import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setInput } from "./summarySlice";

export default function Summary() {
  const summaryData = useAppSelector((state) => state.summary);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="grid gap-6">
        {Object.entries(summaryData).map(([key, value]) => (
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
