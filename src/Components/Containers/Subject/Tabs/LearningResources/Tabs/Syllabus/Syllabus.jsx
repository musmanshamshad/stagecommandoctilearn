import React from "react";
import BreadCrumb from "../../../../BreadCrumb";
import Header from "../../../../Headers/LearningResources/Syllabus/Syllabus";
import { useReactToPrint } from "react-to-print";
import SyllabusAccordions from "./SyllabusAccordions";
const Syllabus = () => {
  const componentRef = React.createRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <React.Fragment>
      <BreadCrumb />
      <Header pageRef={componentRef} handlePrint={handlePrint} />
      <SyllabusAccordions ref={componentRef} />
    </React.Fragment>
  );
};

export default Syllabus;
