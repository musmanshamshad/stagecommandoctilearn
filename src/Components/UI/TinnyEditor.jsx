import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import useHtmlReturn from "./TextEditor/QuillEditor/hooks/useHtmlReturn";
import { tinnyMceConst } from "../../config/constants";
import { IoIosSend } from "react-icons/io";
import "./tinnyMCE.css";

export default function TinnyEditor({
  getContent,
  maxWidth,
  width,
  defaultContent,
  includeSendBtn,
  edit,
  getLengthOfContent,
}) {
  const { handleGetReturn } = useHtmlReturn();
  const editorRef = useRef(null);
  const onClick = () => {
    const temp = handleGetReturn(editorRef.current.getContent());
    if (temp) {
      getContent(temp);
      editorRef.current.setContent("");
    }
  };
  const imagePicker = (cb, value, meta) => {
    var input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        var id = "blobid" + new Date().getTime();
        var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
        var base64 = reader.result.split(",")[1];
        var blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };

    input.click();
  };
  return (
    <div className="container">
      <div style={{ width, maxWidth, height: "100%", position: "relative" }}>
        <Editor
          apiKey={tinnyMceConst.tinnyMceApiKey}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={defaultContent}
          onEditorChange={(value) =>
            !includeSendBtn && getContent(handleGetReturn(value))
          }
          init={{
            width: "100%",
            height: "100%",
            menubar: true,
            images_file_types: tinnyMceConst.imgType,
            block_unsupported_drop: false,
            file_picker_types: tinnyMceConst.filePikerType,
            automatic_uploads: false,
            plugins: tinnyMceConst.plugins,
            toolbar: tinnyMceConst.toolBar,
            content_style: tinnyMceConst.contentDefaultStyle,
            file_picker_callback: imagePicker,
            images_dataimg_filter: function (img) {
              return !img.hasAttribute("internal-blob");
            },
          }}
        />
        <button
          // disabled={includeSendBtn}
          ref={editorRef}
          className={
            edit ? "edit-quill-send-btn btnStyle" : "quill-send-btn btnStyle"
          }
          onClick={onClick}
        >
          <IoIosSend color={"rgb(224,21,162)"} />
        </button>
      </div>
    </div>
  );
}

TinnyEditor.defaultProps = {
  width: "100%",
  maxWidth: "100%",
  getContent: (e) => {
    return;
  },
  includeSendBtn: true,
  isContentEmpty: (e) => {
    return;
  },
  getLengthOfContent: (e) => {
    return;
  },
  getSnapshot: (e) => {
    return;
  },
};
