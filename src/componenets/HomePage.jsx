
import React , { useState } from 'react';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import WordViewer from './WordViewer';
export default function Homepage() {
    const arr1 = ["בְּרָכוֹת", "שַׁבָּת", "עֵרוּבִין", "פְּסָחִים", "שְׁקָלִים", "יוֹמָא"];
    const arr2 = ["סֻכָּה", "ביצה", "רֹאשׁ", "הַשָּׁנָה", "תַּעֲנִית", "מְגִלָּה", "מוֹעֵד", "קָטָן"];
    const arr3 = ["חֲגִיגָה", "יְבָמוֹת", "כְּתוּבוֹת", "נְדָרִים", "נָזִיר", "גִּיטִין"];
    const arr4 = ["קִדּוּשִׁין", "סוֹטָה", "בָּבָא", "קַמָּא", "בָּבָא", "מְצִיעָא", "בָּבָא", "בָּתְרָא", "סַנְהֶדְרִין"];
    const arr5 = ["מַכּוֹת", "שָׁבוּעוֹת", "עֵדוּיוֹת", "עֲבוֹדָה", "זָרָה", "זְבָחִים", "מְנָחוֹת"];
    const arr6 = ["חֻלִּין", "בְּכוֹרוֹת", "עֲרָכִין", "תְּמוּרָה", "כְּרִיתוּת", "מְעִילָה"];
    const arr7 = ["תָּמִיד", "מִדּוֹת", "נִדָּה"];
    const allArrs = arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7); 
    const [selectedParameters, setSelectedParameters] = useState(null);

    // 
    
    
    const [selectedGmara,setSelectedGmara]= useState(null);
    const handle = (parameters) => {
        setSelectedParameters(parameters);
    }

    const renderArrays = (arrays) => {
        return arrays.map((arr, index) => (
            <div key={index} className="card">
                <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                    {arr.map((e, i) => (
                        <Button rounded outlined aria-label="Filter" onClick={()=>handle(e)} key={i}>{e}</Button>
                    ))}
                </div>
                <br />
                
            </div>
        ));
    }

    return (
        <div>
             <div className="card flex justify-content-center">
            <MultiSelect value={selectedGmara} onChange={(e) => {console.log(e.value);  setSelectedGmara(e.value)}} options={allArrs} 
                filter placeholder="בחר מסכת " maxSelectedLabels={1} className="w-full md:w-20rem" />
        </div>
            {renderArrays([arr1, arr2, arr3, arr4, arr5, arr6, arr7])}
        {selectedParameters && <WordViewer src={selectedParameters} />}

        </div>
    );
}