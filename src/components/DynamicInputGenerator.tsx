import React from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Field } from "@/config/builderData";
import { updateField } from "@/resumeBuilderSlice";

type DynamicGeneratorProps = {
  sectionName: string;
  sectionData: Record<string, Field>[] | Record<string, Field>;
};

export default function DynamicInputGenerator({
  sectionName,
  sectionData,
}: DynamicGeneratorProps) {
  const dispatch = useAppDispatch();

  // Check if sectionData is an array (like experienceData)
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
      </>
    );
  } else {
    // If sectionData is an object (like contactData)
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
