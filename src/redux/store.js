import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";
import { subjectReducer } from "./reducers/subject";
import { userReducer } from "./reducers/user";
import { learningResourcesHighlightReducer } from "./reducers/learningResourcesHighlight";
import { myLibraryHighlightReducer } from "./reducers/myLibraryHighlight";
import { commentsInLocalStorageReducer } from "./reducers/commentsInLocalStorage";
import { breadCrumbStatsReducer } from "./reducers/breadCrumbStats";
import { learningResourcesNotesListControllerReducer } from "./reducers/learningResourcesNotesListController";
import { learningObjectivesCompletedReducer } from "./reducers/learningObjectivesCompleted";
import { myLibraryReducer } from "./reducers/myLibrary";
import { courseReducer } from "./reducers/course";

export default configureStore({
  reducer: {
    auth: authReducer,
    subject: subjectReducer,
    user: userReducer,
    learningResources: learningResourcesHighlightReducer,
    myLibraryHighlight: myLibraryHighlightReducer,
    commentsInLocalStorage: commentsInLocalStorageReducer,
    breadCrumbStats: breadCrumbStatsReducer,
    learningObjectivesCompleted: learningObjectivesCompletedReducer,
    learningResourcesNotesListController:
      learningResourcesNotesListControllerReducer,
    myLibrary: myLibraryReducer,
    course: courseReducer,
  },
});
