import React from "react";
import Accordian from "./../../../../../../UI/Accordian/PrimaryAccordion/PrimaryAccordion";
import { useSelector, useDispatch } from "react-redux";
import { subjectActions } from "./../../../../../../../redux/reducers/subject";
import PrimarySyllabus from "./PrimarySyllabus";
import api from "../../../../../../../Services";
import Loader from "./../../../../../../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../../../../../../Errors/ErrorBoundary";
import { learningObjectivesCompletedActions } from "../../../../../../../redux/reducers/learningObjectivesCompleted";
import isEmptyObj from "./../../../../../../../helpers/objectIsEmpty";
import { courseActions } from "../../../../../../../redux/reducers/course";
import { useSnackbar } from "notistack";
import { SyllabusContext } from "../../../../../../../contexts";
export const generateCompletedLabel = (value, total) => `${value}/${total}`;

const SyllabusAccordions = React.forwardRef((props, ref) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const courseHasUnits = useSelector((state) => state.course?.haveUnits);
  const [loadingSyllabus, setLoadingSyllabus] = React.useState(false);
  const allExpanded = useSelector((state) => state.subject.expandAccordian);
  const [accordionController, setAccordionController] = React.useState([]);
  const { id: courseId } = useParams();
  const [courseDetails, setCourseDetails] = React.useState({});
  const [objectives, setObjectives] = React.useState(null);
  const learningObjectivesCompletedStatus = useSelector(
    (state) => state.learningObjectivesCompleted.learningObjectivesCompleted
  );
  const getLearningObjectivesformDB = async (token) => {
    let temp = await api.getSyllabus(token, courseId);
    return temp;
  };
  const apiCall = async () => {
    let token = localStorage.getItem("auth");
    //api call for fetching whole course data
    getLearningObjectivesformDB(token)
      .then((el) => {
        if (el.error) {
          return;
        }
        // updating in redux state
        dispatch(courseActions.addCourse(el.data));
        if (el.data?.learningObjectives.length === 0) {
          setLoadingSyllabus(false);
          return enqueueSnackbar("Learning objectives not found!", {
            variant: "error",
          });
        }
        setCourseDetails(el);
      })
      .catch((error) => console.error(error));
  };

  const getCompeletedStatusFromBackend = (arr) => {
    if (!Array.isArray(arr)) {
      console.error("Invalid parameter provided, Detail provided below");
      throw Error("Parameter must be an array");
    }
    const isCompleted = arr.map(({ id, chapterId, userLearningObjective }) => {
      const payload = {
        id,
        chapterId,
      };
      if (userLearningObjective) {
        payload.checked = true;
      }
      if (!userLearningObjective) {
        payload.checked = false;
      }
      return payload;
    });
    return isCompleted;
  };

  const generateCompletedArr = (arr) => {
    if (arr.length === 0) {
      return false;
    }
    const completedLearningObjectives = getCompeletedStatusFromBackend(arr);

    dispatch(
      learningObjectivesCompletedActions.updateLearningObjectives(
        completedLearningObjectives
      )
    );
    return true;
  };
  const generateAccordionData = (resp) => {
    setObjectives(resp);

    const { data, isUnitsAvailable } = resp;
    if (isUnitsAvailable) {
      let withUnitHeirarchy = data.map((unit, index) => {
        const tempObj = {
          heading: unit.title,
          id: unit.id,
          description: `${unit.chapters.length} Chapters`,
          content: (
            <PrimarySyllabus
              key={index}
              chapters={unit.chapters}
              hasUnits={isUnitsAvailable}
              refreshObjectives={fetchHierarchyWithObjectives}
            />
          ),
        };
        return tempObj;
      });
      setAccordionController(withUnitHeirarchy);
      setLoadingSyllabus(false);
    } else {
      const chapters = data[0].chapters;
      const withChapterHierarchy = chapters.map((chapter, index) => {
        const completedObjectives = chapter.learningObjectives.filter(
          (el) => el.UserLearningObjectives
        )?.length;
        let tempObj = {
          heading: chapter.title,
          id: chapter.id,
          description: generateCompletedLabel(
            completedObjectives,
            chapter.learningObjectives.length
          ),
          content: (
            <>
              <PrimarySyllabus
                key={index}
                hasUnits={isUnitsAvailable}
                chapters={chapter.learningObjectives}
                refreshObjectives={fetchHierarchyWithObjectives}
              />
            </>
          ),
        };

        return tempObj;
      });
      setAccordionController(withChapterHierarchy);
      setLoadingSyllabus(false);
    }
  };
  const fetchHierarchyWithObjectives = async () => {
    let token = localStorage.getItem("auth");
    let response = await api.getHierarchyWithObjectives(token, courseId);
    generateAccordionData(response);
  };
  // React.useEffect(() => {
  //   if (!isEmptyObj(courseDetails)) {
  //     //for setting unit chap heirarchy
  //     unitsStatus(courseDetails);
  //     fetchHierarchyWithObjectives();
  //   }
  // }, [courseDetails]);
  React.useEffect(() => {
    fetchHierarchyWithObjectives();
  }, []);

  const unitsStatus = (el) => {
    const checkedValues = 4;
    const { data: course } = el;
    const generatedLearningObjCompleted = generateCompletedArr(
      el.data.learningObjectives
    );
    if (generatedLearningObjCompleted) {
      if (course.haveUnits) {
        let unitData = course.units.map((each, index) => {
          let chaptersData = course.chapters;
          let allLearningObjectives = course.learningObjectives;

          const filterdChapers = chaptersData.filter(
            (ch) => ch.unitId === each.id
          );

          const filterdChaperId = filterdChapers.map((item) => {
            const filteredLearningObjectives = allLearningObjectives.filter(
              (lo) => lo.chapterId === item.id
            );

            filteredLearningObjectives.sort((a, b) => {
              return a.id - b.id;
            });
            return { ...item, learningObjectives: filteredLearningObjectives };
          });

          return {
            heading: each.title,
            id: each.id,
            description: `${filterdChapers.length} chapters`,
            content: (
              <PrimarySyllabus
                key={index}
                chapters={filterdChaperId}
                hasUnits={course.haveUnits}
              />
            ),
          };
        });
        unitData?.sort((a, b) => {
          return a.id - b.id;
        });
        setAccordionController(unitData);
        setLoadingSyllabus(false);
      } else {
        let chaptersData = course.chapters.map((each, index) => {
          let allLearningObjectives = course.learningObjectives;
          const filteredLearningObjectives = allLearningObjectives.filter(
            (lo) => lo.chapterId === each.id
          );

          return {
            heading: each.title,
            id: each.id,
            description: generateCompletedLabel(
              checkedValues,
              filteredLearningObjectives.length
            ),
            content: (
              <>
                <PrimarySyllabus
                  key={index}
                  hasUnits={course.haveUnits}
                  chapters={filteredLearningObjectives}
                />
              </>
            ),
          };
        });
        chaptersData?.sort((a, b) => {
          return a.id - b.id;
        });
        setAccordionController(chaptersData);
        setLoadingSyllabus(false);
      }
    }
  };

  // React.useEffect(() => {
  //   //fetching all course data
  //   setLoadingSyllabus(true);
  //   apiCall();
  // }, []);

  const updateCountForLearningObjCompletion = (
    controllerArr,
    referenceArray,
    hasUnits
  ) => {
    for (let i in controllerArr) {
      const { id } = controllerArr[i];
      if (!hasUnits) {
        const filteredRefArr = referenceArray.filter(
          (eachObj) => eachObj.chapterId === id
        );
        const completedVals = filteredRefArr.filter(
          (each) => each.checked
        )?.length;
        const toChange = controllerArr[i].description.split("/");
        toChange[0] = completedVals;
        const joined = toChange.join("/");
        controllerArr[i].description = joined;
      }
    }

    return controllerArr;
  };

  React.useEffect(() => {
    let temp = [...accordionController];
    const controllerUpdated = updateCountForLearningObjCompletion(
      temp,
      learningObjectivesCompletedStatus,
      courseHasUnits
    );
    controllerUpdated?.sort((a, b) => {
      return a.id - b.id;
    });
    setAccordionController(controllerUpdated);
  }, [learningObjectivesCompletedStatus]);

  accordionController?.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <SyllabusContext.Provider
      value={{ heirarchy: objectives, generateAccordionData }}
    >
      <ErrorBoundary>
        <div id="syllabus-accordions" ref={ref}>
          {loadingSyllabus ? (
            <Loader />
          ) : (
            accordionController.length > 0 && (
              <Accordian
                expandAll={allExpanded}
                controller={accordionController}
                toggleExpandAllOff={(e) =>
                  dispatch(subjectActions.stopExpandAccordion())
                }
              />
            )
          )}
        </div>
      </ErrorBoundary>
    </SyllabusContext.Provider>
  );
});

export default SyllabusAccordions;
