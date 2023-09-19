import React, { useState } from "react";
import Tabs from "./../Tabs/Tabs";
import Stack from "./../Stack/Stack";
import Button from "../Button/ButtonComp";
import Question from "./Question";
import Answer from "./Answer";
import Tag from "./Tag";
import { useEffect } from "react";

const TabContainer = (props) => (
  <div style={{ overflowY: "auto", height: "250px" }}>{props.element}</div>
);

const Content = ({
  tags,
  sideEffects,
  selectedTag,
  question,
  getQuestionHandler,
  getAnswerHandler,
  getTagHandler,
}) => {
  const [showSaveButton, setShowSaveButton] = useState({
    frontTag: false,
    backTag: false,
    selectedTag: false,
  });

  return (
    <Stack sx={{ height: "100%" }}>
      <Stack sx={{ flexGrow: 1, marginBottom: "-20px" }}>
        {question ? (
          <Tabs
            style={{ margin: "0px" }}
            tabs={[
              {
                id: 0,
                value: "front",
                label: "Front",

                component: (
                  <TabContainer
                    element={
                      <Question
                        question={question.question}
                        getQuestionHandler={(e) => {
                          setShowSaveButton({
                            ...showSaveButton,
                            frontTag: true,
                          });
                          question.question = e;
                          getQuestionHandler(question);
                        }}
                      />
                    }
                  />
                ),
              },
              {
                id: 1,
                value: "back",
                label: "Back",
                component: (
                  <TabContainer
                    element={
                      <Answer
                        answer={question.answer}
                        getAnswerHandler={(e) => {
                          setShowSaveButton({
                            ...showSaveButton,
                            backTag: true,
                          });
                          question.answer = e;
                          getAnswerHandler(question);
                        }}
                      />
                    }
                  />
                ),
              },
              {
                id: 2,
                value: "tag",
                label: "Tag",
                component: (
                  <TabContainer
                    element={
                      <Tag
                        tags={tags}
                        selectedTag={selectedTag}
                        getTagHandler={(e) => {
                          setShowSaveButton({
                            ...showSaveButton,
                            selectedTag: true,
                          });
                          question.tagId = e;
                          getTagHandler(question);
                        }}
                      />
                    }
                  />
                ),
              },
            ]}
          />
        ) : null}
      </Stack>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="text"
          styleOverrides={{
            background: "#fff",
            color: "#ADB4C5",
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={
            showSaveButton.frontTag &&
            showSaveButton.backTag &&
            showSaveButton.selectedTag
              ? false
              : true
          }
          onClick={sideEffects}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Content;
