// import React, { useEffect, useState } from 'react';
// import mammoth from 'mammoth';

// const WordViewer= ({src}) => {
//   console.log(src);
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     const fetchFile = async () => {
//       try {
//         const response = await fetch(`${process.env.PUBLIC_URL}/files/${src}.docx`);
//         const arrayBuffer = await response.arrayBuffer();
//         const result = await mammoth.convertToHtml({ arrayBuffer });
//         setContent(result.value);
//       } catch (error) {
//         console.error('Error fetching or converting file:', error);
//       }
//     };

//     fetchFile();
//   }, []);

//   return (
//     <div>
//       <div dir="rtl" dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
// };

// export default WordViewer;
import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const WordViewer = ({ src }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/files/${src}.docx`);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });

        console.log(result.value); // הצגת התוכן המומר בקונסולה

        setContent(result.value);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (src) {
      fetchFile();
    }
  }, [src]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div
        dir="rtl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <style>
        {`
          strong {
            color: red;
          }
          h1, h2, h3, h4, h5, h6 {
            border: 1px solid black;
            padding: 5px;
            margin-bottom: 10px;
          }
          h1 {
            color: blue;
            font-size: 2em;
          }
          h2 {
            color: green;
            font-size: 1.75em;
          }
          h3 {
            color: orange;
            font-size: 1.5em;
          }
          h4 {
            color: purple;
            font-size: 1.25em;
          }
          h5 {
            color: brown;
            font-size: 1em;
          }
          h6 {
            color: grey;
            font-size: 0.75em;
          }
        `}
      </style>
    </div>
  );
};

export default WordViewer;
