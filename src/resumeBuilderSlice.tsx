import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Field,
  contactData,
  headerData,
  skillsData,
  educationData,
  experienceData,
  ResumeData,
} from "@/config/builderData";

// Define the initial state
const initialState: ResumeData = {
  contact: contactData,
  header: headerData,
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

interface AddItemPayload {
  section: keyof ResumeData;
  newItem: Record<string, Field>;
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

        // Type assertion to help TypeScript understand that it's an array
        const sectionArray = state[section] as Array<Record<string, Field>>;
        const fieldName = fieldKey as keyof (typeof sectionArray)[0];
        sectionArray[index][fieldName].value = value;
      } else {
        // Handle object-based sections (contact, summary)
        const sectionObject = state[section] as Record<string, Field>;
        sectionObject[field].value = value;
      }
    },
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      if (Array.isArray(state[action.payload.section])) {
        // Type assertion to help TypeScript understand that it's an array
        const sectionArray = state[action.payload.section] as Array<
          Record<string, Field>
        >;
        sectionArray.push(action.payload.newItem);
      }
    },
    deleteItem: (
      state,
      action: PayloadAction<{ section: keyof ResumeData; index: number }>
    ) => {
      const { section, index } = action.payload;
      if (Array.isArray(state[section])) {
        state[section].splice(index, 1);
      }
    },
  },
});

// Export the action and reducer
export const { updateField, addItem, deleteItem } = resumeSlice.actions;
export default resumeSlice.reducer;
