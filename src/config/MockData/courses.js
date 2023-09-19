import * as courseImages from "./../../assets/images/courses";
const courses = [
  {
    title: "Physics",
    name: "physics",
    highlights: [
      { value: 6, type: "units" },
      { value: 28, type: "chapters" },
      { value: 56, type: "snacks" },
    ],
    progress: "10%",
    img: courseImages.physics,
  },
  {
    title: "Biology",
    name: "biology",
    highlights: [
      { value: 6, type: "units" },
      { value: 28, type: "chapters" },
      { value: 56, type: "snacks" },
    ],
    progress: "10%",
    img: courseImages.biology,
  },
  {
    title: "Math",
    name: "math",
    highlights: [
      { value: 6, type: "units" },
      { value: 28, type: "chapters" },
      { value: 56, type: "snacks" },
    ],
    progress: "80%",
    img: courseImages.math,
  },
  {
    title: "Chemistry",
    name: "chemistry",
    highlights: [
      { value: 6, type: "units" },
      { value: 28, type: "chapters" },
      { value: 56, type: "snacks" },
    ],
    progress: "80%",
    img: courseImages.chemistry,
  },
];

export default courses;
