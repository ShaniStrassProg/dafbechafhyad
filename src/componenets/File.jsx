// import React, { useState } from 'react';
// import Document from "../Files/b.docx"
// const File = () => {
//     const [fileContent, setFileContent] = useState('');


//     const handleFileChosen = (file) => {
//         // const reader = new FileReader();

//         // reader.onload = (event) => {
//         //     const content = event.target.result;
//         //     setFileContent(content);
//         //     console.log(event.target.result);
//         // };

//         // reader.readAsText(file, 'UTF-8');
//         // const documentObject = { uri: URL.createObjectURL(blob), type: 'doc' };
//         // setFileContent([documentObject]);
//     };

//     return (
//         <div>
//             <input type="file" onChange={(e) => handleFileChosen(e.target.files[0])} />
//             {/* <div dangerouslySetInnerHTML={{ __html: fileContent }} /> */}
//             {/* {fileContent &&  <div dangerouslySetInnerHTML={{ __html: fileContent }} />} */}
//             {/* {fileContent &&  <iframe src={fileContent} width="600" height="800" ></iframe>} */}
//             {/* {fileContent &&  <} */}
//             {/* {fileContent && <pre>{fileContent}</pre>} */}
//         </div>
//     );
// };

// export default File;
