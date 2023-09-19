import React from "react";
import List from "../../../UI/List/List";
import api from "../../../../Services";
import IconBar from "./../../../UI/List/IconBar";
import Loader from "./../../../UI/Loader/Loader";
import ErrorMessage from "../../../UI/ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./../../../../Errors/ErrorBoundary";
import { useSelector, useDispatch } from "react-redux";
import { learningResourcesNotesListControllerActions } from "../../../../redux/reducers/learningResourcesNotesListController";
import { courseActions } from "../../../../redux/reducers/course";

const LeftSide = ({
  onListClick,
  selectedFromList,
  getList,
  getCourseInfo,
  getMenuStats,
  hierarchyData,
}) => {
  const dispatch = useDispatch();
  const open = useSelector(
    (state) => state.learningResourcesNotesListController.value
  );

  const [structure, setStructure] = React.useState([]);
  const [isListDataLoading, setIsListDataLoading] = React.useState(false);
  const [listDataErr, setListDataErr] = React.useState(false);
  const [initLoad, setInitLoad] = React.useState({});
  const { id: courseId } = useParams();
  const toggleOpen = (val) =>
    dispatch(learningResourcesNotesListControllerActions.setValue(val));
  const getMenufromDB = async (token) => {
    let temp = await api.getListData(token, courseId);
    return temp;
  };

  const makeList = (el) => {
    // getCourseInfo(el);
    // setInitLoad(el);

    if (el.isUnitsAvailable) {
      let units = el.data;
      units.sort((a, b) => {
        return a.id - b.id;
      });
      const unitsData = units.map((unit) => {
        const unitIds = unit.id;
        // setSelectedUnitId(unitIds)
        const unitName = unit.title;

        const filteredChapter = unit.chapters.filter(
          (fil) => fil.unitId === unitIds
        );

        filteredChapter.sort((a, b) => {
          return a.id - b.id;
        });

        return {
          type: "unit",
          layer: 1,
          name: unitName,
          label: unitName,

          id: unitIds,
          icon: <IconBar />,
          childrenElements:
            filteredChapter.length === 0
              ? null
              : [
                  ...filteredChapter.map((chItem) => {
                    const chapterIds = chItem.id;
                    const chapterName = chItem.title;
                    const snakData = [...chItem.snacks];

                    snakData.sort((a, b) => {
                      return a.id - b.id;
                    });
                    const filteredSnack = snakData.filter(
                      (item) => item.chapterId === chapterIds
                    );
                    if (chItem.snacks) {
                      return {
                        type: "chapter",
                        layer: 2,
                        name: chapterName,
                        id: chapterIds,
                        label: chapterName,
                        icon: <IconBar />,
                        childrenElements:
                          filteredSnack.length === 0
                            ? null
                            : [
                                ...filteredSnack.map(
                                  (snackItem, snackIndex) => {
                                    const snackName = snackItem.title;
                                    const snackId = snackItem.id;
                                    return {
                                      type: "snack",
                                      layer: 3,
                                      name: snackName,
                                      id: snackId,
                                      icon: <IconBar />,
                                      label: snackName,
                                    };
                                  }
                                ),
                              ],
                      };
                    } else {
                      return {
                        type: "chapter",
                        layer: 2,
                        name: chapterName,
                        id: chapterIds,
                        label: chapterName,
                      };
                    }
                  }),
                ],
        };
      });
      setStructure(unitsData);
      setIsListDataLoading(false);
    } else {
      el.data[0].chapters.sort((a, b) => {
        return a.id - b.id;
      });
      const chaptersData = el.data[0].chapters.map((chItem, index) => {
        const chapterIds = chItem.id;
        const chapterName = chItem.title;
        const _snakData = [...chItem.snacks];

        _snakData.sort((a, b) => {
          return a.id - b.id;
        });
        const filteredSnackwithoutUnit = _snakData.filter(
          (item) => item.chapterId === chapterIds
        );
        if (chItem.snacks) {
          return {
            type: "chapter",
            layer: 1,
            name: chapterName,
            id: chapterIds,
            icon: <IconBar />,
            label: chapterName,
            childrenElements:
              filteredSnackwithoutUnit.length === 0
                ? null
                : [
                    ...filteredSnackwithoutUnit.map((snackItem, snackIndex) => {
                      const snackName = snackItem.title;
                      const snackId = snackItem.id;
                      return {
                        type: "snack",
                        layer: 2,
                        id: snackId,
                        name: snackName,
                        icon: <IconBar />,
                        label: snackName,
                      };
                    }),
                  ],
          };
        } else {
          return {
            type: "chapter",
            layer: 1,
            name: chapterName,
            id: chapterIds,
            label: chapterName,
          };
        }
      });
      // setListItems(chaptersData);
      setStructure(chaptersData);
      setIsListDataLoading(false);
    }
  };

  const getListData = async () => {
    let token = localStorage.getItem("auth");
    getMenufromDB(token)
      .then((el) => {
        if (el.error) {
          return;
        }
        makeList({ data: el });
        dispatch(courseActions.addCourse(el));
      })
      .catch((error) => console.error(error));
  };

  React.useEffect(() => {
    setIsListDataLoading(true);
    // getListData();
  }, []);

  React.useEffect(() => {
    if (hierarchyData) {
      makeList(hierarchyData);
    }
  }, [hierarchyData]);
  React.useEffect(() => {
    if (getMenuStats === true) {
      setIsListDataLoading(true);
      getListData();
    }
  }, [getMenuStats]);

  return (
    <>
      <ErrorBoundary>
        {isListDataLoading ? (
          <Loader />
        ) : (
          <>
            {listDataErr ? (
              <ErrorMessage style={{ padding: "2rem 0.4rem" }}>
                Error, unable to retrieve data
              </ErrorMessage>
            ) : (
              <List
                open={open}
                setOpen={toggleOpen}
                selection={selectedFromList}
                listSkeleton={structure}
                onItemClick={(e) => onListClick(e, initLoad)}
              />
            )}
          </>
        )}
      </ErrorBoundary>
    </>
  );
};

export default LeftSide;

LeftSide.defaultProps = {
  getList: (e) => {
    return;
  },
  getCourseInfo: (e) => {
    return;
  },
};
