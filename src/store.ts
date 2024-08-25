import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./components/BuilderSteps/Contact/contactSlice";
import summarySlice from "./components/BuilderSteps/Summary/summarySlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    summary: summarySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
