// resumeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Import the types and initial data
import {
  Field,
  contactData,
  summaryData,
  skillsData,
  educationData,
  experienceData,
} from "@/config/builderData";

// Define the combined ResumeData type
export type ResumeData = {
  contact: typeof contactData;
  summary: typeof summaryData;
  skills: typeof skillsData;
  education: typeof educationData;
  experience: typeof experienceData;
};

// Define the initial state
const initialState: ResumeData = {
  contact: contactData,
  summary: summaryData,
  skills: skillsData,
  education: educationData,
  experience: experienceData,
};

// Define the payload for updating a field
interface UpdateFieldPayload {
  section: keyof ResumeData;
  field: string;
  value: string | number;
}

// Create the Redux slice
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<UpdateFieldPayload>) => {
      const { section, field, value } = action.payload;

      if (Array.isArray(state[section])) {
        // Handle array-based sections (skills, education, experience)
        const [indexStr, fieldKey] = field.split("-");
        const index = parseInt(indexStr, 10);
        const fieldName = fieldKey as keyof (typeof state)[section][0];
        (state[section][index][fieldName] as Field).value = value;
      } else {
        // Handle object-based sections (contact, summary)
        (state[section] as any)[field].value = value;
      }
    },
    addItem: (
      state,
      action: PayloadAction<{
        section: keyof ResumeData;
        newItem: Record<string, Field>;
      }>
    ) => {
      state[action.payload.section].push(action.payload.newItem as Experience);
    },
  },
});

// Export the action and reducer
export const { updateField, addItem } = resumeSlice.actions;
export default resumeSlice.reducer;
