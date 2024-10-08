import { useState } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateField, addItem, deleteItem } from "@/resumeBuilderSlice";
import { Field, ResumeData } from "@/config/builderData";
import { Button } from "./ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

type DynamicGeneratorProps = {
  sectionName: keyof ResumeData;
  sectionData: Record<string, Field>[] | Record<string, Field>;
};

export default function DynamicGenerator({
  sectionName,
  sectionData,
}: DynamicGeneratorProps) {
  const dispatch = useAppDispatch();
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    const newItem: Record<string, Field> = {};

    if (Array.isArray(sectionData) && sectionData.length > 0) {
      Object.keys(sectionData[0]).forEach((key) => {
        newItem[key] = {
          ...sectionData[0][key],
          value: "", // Reset the value for the new item
        };
      });
    } else {
      if (sectionName === "skills") {
        const defaultStructure: Record<string, Field> = {
          name: { label: "Name", value: "", inputType: "text" },
        };

        Object.keys(defaultStructure).forEach((key) => {
          newItem[key] = {
            ...defaultStructure[key],
            value: "", // Reset the value for the new item
          };
        });
      }
      if (sectionName === "experience") {
        const defaultStructure: Record<string, Field> = {
          name: { label: "Name", value: "", inputType: "text" },
          company: { inputType: "text", value: "", label: "Company" },
          position: { inputType: "text", value: "", label: "Position" },
          city: { inputType: "textarea", value: "", label: "City" },
          startDate: { inputType: "calendar", value: "", label: "Start Date" },
          endDate: { inputType: "calendar", value: "", label: "End Date" },
          description: {
            inputType: "textarea",
            value: "",
            label: "Description",
          },
          responsibilities: {
            inputType: "textarea",
            value: "",
            label: "Responsibilities",
          },

          // Add other default fields as needed
        };

        Object.keys(defaultStructure).forEach((key) => {
          newItem[key] = {
            ...defaultStructure[key],
            value: "", // Reset the value for the new item
          };
        });
      }
      // Define a default structure for a new item when sectionData is empty
    }

    dispatch(
      addItem({
        section: sectionName,
        newItem,
      })
    );
  };

  const handleDeleteItem = (index: number) => {
    dispatch(
      deleteItem({
        section: sectionName,
        index,
      })
    );
  };

  const handleFieldChange = (index: number | string, value: string) => {
    dispatch(
      updateField({
        section: sectionName,
        field: `${index}-name`, // Format field key as 'index-name'
        value,
      })
    );
  };

  if (
    Array.isArray(sectionData) &&
    (sectionName === "skills" || sectionName === "experience")
  ) {
    return (
      <div className="flex flex-col">
        {sectionData.map((item, index) => (
          <div key={index} className="card mb-6 p-4 border rounded">
            <div className="flex justify-between items-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                {Object.entries(item).map(([key, field]) => (
                  <div key={key} className="grid gap-3">
                    <Label htmlFor={`${key}-${index}`}>{field.label}</Label>
                    <Input
                      value={field.value as string}
                      onChange={(e) =>
                        handleFieldChange(`${index}-${key}`, e.target.value)
                      }
                      id={`${key}-${index}`}
                      type={field.inputType}
                      className="w-full"
                    />
                  </div>
                ))}
                <div className='grid gap-3'>
                <h3 className='text-[14px]'>Delete Experience</h3>
                  <Button className="w-full"
                    onClick={() => handleDeleteItem(index)}
                    variant="destructive"
                    size={"sm"}
                  >
                    <TrashIcon />
                    </Button>
                  </div>
              </div>

            </div>
          </div>
        ))}
        <div>
        <Button onClick={handleAddItem} className="btn btn-primary mt-4">
          Add {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 gap-6 w-full">
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
