

import React from 'react'; 
import { Card } from 'primereact/card';


export default function ChoosePage() {
    const textFilePath = './File/b.docx';
    return (
        
        <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                <File src={textFilePath} />
                </p>
            </Card>
        </div>
    )
}
        