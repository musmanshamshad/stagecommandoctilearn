import flashCardQuestions from "./config/MockData/createFlashCardQuestions.json";
import getUserDataNav from "./config/MockData/getUserDataNav";
import dashboardStatistics from "./config/MockData/dashboardStatisticsSummary.json";
import currentProgress from "./config/MockData/currentProgress";
import CourseChart from "./config/MockData/courseChart.json";
import initialDetails from "./config/MockData/initialDetails.json";
import { baseURL } from "./config/baseUrl";

const postLearningObjective = async ({ value, id }, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    completed: value,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const data = await fetch(`${baseURL}/userLoObj/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error("error", error));
  return data;
};

const saveTimeStatistics = async ({ startDate, endDate }, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    startDate,
    endDate,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/user/stats`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error("error", error));
  return data;
};

const buildFunc = (payload) => {
  try {
    return { data: payload, status: "ok" };
  } catch (err) {
    return { data: null, status: "error", error: err };
  }
};

const postFunc = async (payload) => {
  return;
};

const getGrades = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/grade-level`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const addNewUser = async (details) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    ...details,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/user`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const postFlashcardButtonStatus = async (
  token,
  chapterOrSnackId,
  response,
  flashcardId
) => {
  const raw = JSON.stringify({
    chapterId: chapterOrSnackId,
    response: response.response,
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/flashcard/track-score/${response.id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const myLibraryFlashcardButtonStatus = async (token, response, flashcardId) => {
  const raw = JSON.stringify({
    response: response,
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/flashcard/track-score/${flashcardId}?library=true`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const forgetPassAPI = async (email) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({
    email,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/auth/forgot-password`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const getResetTokenAPI = async (resetToken) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({ token: resetToken });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const data = await fetch(
    `${baseURL}/auth/validate-forgotpassword`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};
const resetPasswordApi = async (isToken, tokenId, password, confirmPass) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  let raw = JSON.stringify({
    token: isToken,
    id: tokenId,
    password: password,
    c_password: confirmPass,
  });
  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const data = await fetch(`${baseURL}/auth/update-password`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const loginHandler = async (credentials) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const { email, password } = credentials;

  const raw = JSON.stringify({ email, password });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/user/login`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getCurrentUserData = async (recievedToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/user/me`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const uploadUserImage = async (userImage) => {
  let token = localStorage.getItem("auth");
  let URL = `${baseURL}/user/user-image`;
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userImage),
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);

  return data;
};

const updateUserProfile = async (payload) => {
  let token = localStorage.getItem("auth");
  let URL = `${baseURL}/user`;
  const data = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);

  return data;
};

const getPublishedCourses = async (recievedToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/course/user/courses`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getHierarchyWithObjectives = async(recievedToken,courseId)=>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/course/${courseId}?type=syllabus`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
}
const getHierarchyForNotes = async(recievedToken,courseId)=>{
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/course/${courseId}?type=notes`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
}
const getCourseFromDB = async (recievedToken, courseId) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/course/${courseId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getDashboardStatistics = async (recievedToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/user/dasboard-stats`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);

  return data;
};

const getAllTagsFromDB = async (recievedToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/tag`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);

  return data;
};

const fetchFlashcardsFromLibrary = async (token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/my-library/flashcards`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const fetchNotesFromLibrary = async (token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/my-library/notes`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getNotesFromDbLearningResources = async ({ id, type }, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/note/snack-id/${id}?resource=${type}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getChapterNotesFromDb = async (id, recievedToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${recievedToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/note/snack-id/${id}?chapter=true`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);

  return data;
};

const getFlashcards = async (id, type, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let url = `${baseURL}/flashcard/${id}?resource=${type}`;

  const data = await fetch(url, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const addNoteToLibrary = async (payload, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  const { chapterId, tagId, snackId } = payload;

  let raw = {};

  if (chapterId) raw.chapterId = chapterId;
  if (tagId) raw.tagId = tagId;
  if (snackId) raw.snackId = snackId;

  raw = JSON.stringify(raw);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/my-library/move/notes`, requestOptions)
    .then((response) => response)
    .catch((error) => error);
  return data;
};

const addFlashcardToLibrary = async (payload, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = {};

  if (payload.chapterId) raw.chapterId = payload.chapterId;
  if (payload.snackId) raw.snackId = payload.snackId;

  raw = JSON.stringify(raw);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/my-library/move/flashcards`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getFlashcardsFromLibrary = async (token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/my-library/flashcards`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const updateNotesOnLibrary = async (payload, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    body: payload.body,
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/my-library/note/${payload.id}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const restNotesFromDB = async (token, getUnitorChapId, dataType) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/my-library/note/reset/${getUnitorChapId}?resource=${dataType}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const deleteNote = async (noteId, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/my-library/note/${noteId}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const deleteFlashcardStack = async (token, fcStackId) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/my-library/flashcard/${fcStackId}?stack=true`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};
const deleteMyLibraryNotesData = async (token, id, dataType) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };
  const data = await fetch(
    `${baseURL}/my-library/notes/clear/?resource=${dataType}&resourceId=${id}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return data;
};

const createFlashcardStack = async (payload, token) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/my-library/fcstack`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const addHighlightedNotes = async (payload) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/highlight`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const updateHighlightedNote = async (payload) => {
  let token = localStorage.getItem("auth");
  let URL = `${baseURL}/highlight/${payload.id}`;
  const data = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);

  return data;
};

// resource may be chapter,note,snack
const getHighlightedNotes = async (resourceId, resource) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const data = await fetch(
    `${baseURL}/highlight/${resourceId}?resource=${resource}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const addComment = async (payload) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(`${baseURL}/comment`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getComments = async (resourceId, resource, library) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const data = await fetch(
    `${baseURL}/comment/${resourceId}?resource=${resource}&&library=${
      library ? library : false
    }`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const deleteComment = async (commentId, resource) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    `${baseURL}/comment/${commentId}?resource=${resource}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};

const getLearningObjectiveByChapter = async (chapterId) => {
  let token = localStorage.getItem("auth");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  const data = await fetch(`${baseURL}/lo/chapter/${chapterId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => error);
  return data;
};
const api = {
  // Correct format
  // getUser: () => buildFunc(user),
  getLearningObjectiveByChapter: (chapterId) =>
    getLearningObjectiveByChapter(chapterId),
  getUser: (token) => getCurrentUserData(token),
  // getCourses: () => buildFunc(courses),
  getHighlightedNotes: (id, resource) => getHighlightedNotes(id, resource),
  getComments: (id, resource, library) => getComments(id, resource, library),

  getCourses: (token) => getPublishedCourses(token),
  getUserData: () => buildFunc(getUserDataNav),
  // getListData: () => buildFunc(listData),
  getListData: (token, courseId) => getCourseFromDB(token, courseId),
  getDashboardStatisticsSummary: () => buildFunc(dashboardStatistics),
  getCurrentProgress: () => buildFunc(currentProgress),
  // Charts data needs improvement
  getChartsData: () => buildFunc(CourseChart),
  getUserEmail: () => buildFunc(initialDetails),
  getRightBarData: (token) => getAllTagsFromDB(token),
  getAllTags: (token) => getAllTagsFromDB(token),
  getNotesFromDbLearningResources: (id, token) =>
    getNotesFromDbLearningResources(id, token),
  getChapterNotes: (id, token) => getChapterNotesFromDb(id, token),
  // Note: for getSyllabus API, please look at syllabus.json if a course has units and syllabusWithoutUnits.json if the course does not have units. It is located in the mockdata folder and is also commented on line 10
  getSyllabus: (token, courseId) => getCourseFromDB(token, courseId),
  getHierarchyWithObjectives:(token, courseId)=>getHierarchyWithObjectives(token, courseId),
  getHierarchyForNotes  :(token,courseId)=>getHierarchyForNotes(token,courseId),
  getCreateFlashQuestions: () => flashCardQuestions,

  // POST requests
  postTag: (payload) => postFunc(payload),

  // ADDING APIS FROM BACKEND
  // GET
  getGrades: () => getGrades(),
  // POST
  addHighlightedNotes: (payload) => addHighlightedNotes(payload),
  addComment: (payload) => addComment(payload),
  addNewUser: (userDetails) => addNewUser(userDetails),
  forgetPasswordSendEmail: (email) => forgetPassAPI(email),
  getResetPasswordToken: (resetToken) => getResetTokenAPI(resetToken),
  resetPassowrd: (isToken, tokenId, password, confirmPass) =>
    resetPasswordApi(isToken, tokenId, password, confirmPass),
  login: (credentials) => loginHandler(credentials),
  updateHighlightedNote: (payload) => updateHighlightedNote(payload),
  uploadUserImage: (userImage) => uploadUserImage(userImage),
  updateUserProfile: (payload) => updateUserProfile(payload),
  getCurrentUserData: (token) => getCurrentUserData(token),
  getStatistics: (token) => getDashboardStatistics(token),
  getFlashcards: (id, type, token) => getFlashcards(id, type, token),
  addNoteToLibrary: (payload, token) => addNoteToLibrary(payload, token),
  fetchNotesFromLibrary: (token) => fetchNotesFromLibrary(token),
  getFlashcardsFromLibrary: (token) => getFlashcardsFromLibrary(token),
  addFlashcardToLibrary: (payload, token) =>
    addFlashcardToLibrary(payload, token),
  fetchFlashcardsFromLibrary: (token) => fetchFlashcardsFromLibrary(token),
  updateNotesOnLibrary: (payload, token) =>
    updateNotesOnLibrary(payload, token),
  restNotesFromDB: (token, getUnitorChapId, dataType) =>
    restNotesFromDB(token, getUnitorChapId, dataType),
  deleteNote: (noteId, token) => deleteNote(noteId, token),
  createFlashcardStack: (payload, token) =>
    createFlashcardStack(payload, token),
  deleteComment: (noteId, resource) => deleteComment(noteId, resource),
  deleteMyLibraryNotes: (token, id, dataType) =>
    deleteMyLibraryNotesData(token, id, dataType),
  postFlashcardButtonStatus: (token, chapterOrSnackId, response, flashcardId) =>
    postFlashcardButtonStatus(token, chapterOrSnackId, response, flashcardId),
  myLibraryFlashcardButtonStatus: (token, response, flashcard) =>
    myLibraryFlashcardButtonStatus(token, response, flashcard),
  saveTimeStatistics: (payload, token) => saveTimeStatistics(payload, token),
  postLearningObjective: (payload, token) =>
    postLearningObjective(payload, token),
  deleteFlashcardStack: (token, fcStackId) =>
    deleteFlashcardStack(token, fcStackId),
};

export default api;
