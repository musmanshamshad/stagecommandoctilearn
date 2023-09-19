const constants = {
  dashboard: {
    greeting: "Hello",
    heroText: "You're doing great this week. Keep it up!",
    sectionHeadings: ["Statistics", "My Courses", "Continue To Learn"],
    statistics: {
      coursesCompleted: "Courses Completed",
      progress: "Courses in Progress",
      selectdate: "Select Range",
      daysToPresentInChart: 14,
    },
  },
  enterEmailMessage: "Enter the email address associated with your account.",
  Forgot: "Forgot",
  Password: "Password",
  BackTo: "Back to",
  SignIn: " Sign In",
  Submit: " Submit",
  SignUp: " Sign Up",
  WelcomeBack: "Welcome back",
  SignInTo: "Sign in to ",
  YourAccount: "your account",
  ForgotPassword: "Forgot Password?",
  SignInNow: " Sign in now",
  SignInGoogle: "Or sign in with google",
  DoNotHaveAccount: "Don’t have an account?",
  SavePassword: "Save Password",
  selectDate: "select date",
  Resetyour: "Reset your",
  Previous: "Previous",
  NextStep: " Next Step",
  SignUpto: "Sign up to",
  AlreadyHaveAccount: "Already have an account",
  HighlightText: "Highlight Text",
  CommentText: "Comment Text",
  Download: "Download Syllabus",
  Print: "Print out Syllabus",
  courses: "Courses",
  ExpandAllUnits: "Expand all units",
  CollapseAllUnits: "Collapse all units",
  learningResources: {
    syllabus: {
      highlightTooltip: "Mark text to highlight",
      commentTooltip: "Mark text to Comment",
      printTooltip: "Print Out Syllabus",
      downloadTooltip: "Download Syllabus",
      syllabus: "Syllabus",
    },
  },
  timeInterval: [
    "This week",
    "This month",
    "Previous week",
    "Previous month",
    "Last three months",
  ],
  profession: ["Teacher", "Student"],
};
export const tinnyMceConst ={
  tinnyMceApiKey:'26azjdd4giibo4udrnfbfdxaw17rfz06aytkko3iqyi8zf0j',
  imgType:'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp',
  filePikerType:'file image media',
  plugins:'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
  toolBar: 'undo redo | formatselect | fullpage' +
  'bold italic backcolor | alignleft aligncenter | ' + '| fontfamily fontsize blocks |' +
  'alignright alignjustify | bullist numlist outdent indent | ' +
  'removeformat | help | image ',
  contentDefaultStyle:'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
}
export const DISABLE_UPLOAD_IMAGES_FROM_ALL_INSTANCES = true;
export const SHOW_USER_ACTIVITY_HISTORY_CHART = false;
export default constants;
