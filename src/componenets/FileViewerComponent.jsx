// FileViewerComponent.js
import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';


const FileViewerComponent = () => {
  // לדוגמא, אפשרויות קובץ לדוגמא
  const [docs, setDocs] = useState([
    { uri:process.env.PUBLIC_URL + '/Files/b.docx' }
    // { uri: require('./path/to/your/wordfile2.docx') }
  ]);

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        config={{ header: { disableFileName: false, retainURLParams: false } }}
      />
    </div>
  );
};

export default FileViewerComponent;
