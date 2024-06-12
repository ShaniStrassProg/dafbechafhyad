import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth';

const WordViewer= ({src}) => {
  console.log(src);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/files/${src}.docx`);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        setContent(result.value);
      } catch (error) {
        console.error('Error fetching or converting file:', error);
      }
    };

    fetchFile();
  }, []);

  return (
    <div>
      <div dir="rtl" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WordViewer;
