import React from "react";
import capitalize from "../../../../../../helpers/capitalize";
import RightBarAccordian from "../../../../../UI/RightBarAccordian/RightBarAccordian";
import AccordionContent from "./AccordionContent";
import ErrorBoundary from "./../../../../../../Errors/ErrorBoundary";

const RenderAccordionData = ({ getNotes, deleteSingleNote, content }) => {
  const [controller, setController] = React.useState([]);
  const buildAccordionController = () => {
    let temp = content.map((each) => ({
      title: capitalize(each.tagName),
      content: (
        <AccordionContent
          getNotes={getNotes}
          {...each}
          deleteSingleNote={deleteSingleNote}
        />
      ),
    }));
    setController(temp);
  };
  React.useEffect(() => {
    buildAccordionController();
  }, []);

  return (
    <div>
      <ErrorBoundary>
        {controller.length > 0 ? (
          <RightBarAccordian controller={controller} />
        ) : null}
      </ErrorBoundary>
    </div>
  );
};

export default RenderAccordionData;
