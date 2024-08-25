import { useAppDispatch } from "@/hooks/reduxHooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateField, addItem } from "@/resumeBuilderSlice";
import { Field, ResumeData } from "@/config/builderData";

type DynamicGeneratorProps = {
  sectionName: keyof ResumeData; // Adjust to ensure proper typing
  sectionData: Record<string, Field>[] | Record<string, Field>;
};

export default function DynamicGenerator({
  sectionName,
  sectionData,
}: DynamicGeneratorProps) {
  const dispatch = useAppDispatch();

  const handleAddItem = () => {
    const newItem: Record<string, Field> = {};

    // Assuming that all items in the array have the same structure
    if (Array.isArray(sectionData) && sectionData.length > 0) {
      Object.keys(sectionData[0]).forEach((key) => {
        newItem[key] = {
          ...sectionData[0][key],
          value: "", // Reset the value for the new item
        };
      });

      dispatch(
        addItem({
          section: sectionName,
          newItem,
        })
      );
    }
  };

  if (Array.isArray(sectionData)) {
    return (
      <>
        {sectionData.map((item, index) => (
          <div key={index} className="mb-6">
            {Object.entries(item).map(([key, field]) => (
              <div key={key} className="grid gap-3 mb-4">
                <Label htmlFor={`${key}-${index}`}>{field.label}</Label>
                <Input
                  value={field.value as string}
                  onChange={(e) =>
                    dispatch(
                      updateField({
                        section: sectionName,
                        field: `${index}-${key}`,
                        value: e.target.value,
                      })
                    )
                  }
                  id={`${key}-${index}`}
                  type={field.inputType}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleAddItem} className="btn btn-primary mt-4">
          Add {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
        </button>
      </>
    );
  } else {
    return (
      <div className="grid grid-flow-col gap-6 w-full">
        {Object.entries(sectionData).map(([key, field]) => (
          <div key={key} className="grid gap-3">
            <Label htmlFor={key}>{field.label}</Label>
            <Input
              value={field.value as string}
              onChange={(e) =>
                dispatch(
                  updateField({
                    section: sectionName,
                    field: key,
                    value: e.target.value,
                  })
                )
              }
              id={key}
              type={field.inputType}
              className="w-full"
            />
          </div>
        ))}
      </div>
    );
  }
}
