
import React from 'react';
import { Button } from 'primereact/button';
export default function Homepage() {
    const arr1 = ["בְּרָכוֹת", "שַׁבָּת", "עֵרוּבִין", "פְּסָחִים", "שְׁקָלִים", "יוֹמָא"];
    const arr2= "סֻכָּה	בֵּיצָה	רֹאשׁהַשָּׁנָה	תַּעֲנִית	מְגִלָּה	מוֹעֵדקָטָן".split(" ");
const arr3= "חֲגִיגָה	יְבָמוֹת	כְּתוּבוֹת	נְדָרִים	נָזִיר	גִּיטִין".split(" ");
const arr4 = "קִדּוּשִׁין 	סוֹטָה	בָּבָא קַמָּא	בָּבָא מְצִיעָא	בָּבָא בָּתְרָא	סַנְהֶדְרִין".split(" ");
const arr5 = "מַכּוֹת	שָׁבוּעוֹת	עֵדוּיוֹת	עֲבוֹדָה זָרָה	זְבָחִים	מְנָחוֹת".split(" ");
const arr6="חֻלִּין	בְּכוֹרוֹת	עֲרָכִין	תְּמוּרָה	כְּרִיתוּת	מְעִילָה".split(" ");
const arr7 = "תָּמִיד	מִדּוֹת	נִדָּה".split(" ");

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr1.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div>
            <br></br>
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr2.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div><div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr3.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div><div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr4.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div><div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr5.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div><div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr6.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div><div className="flex flex-wrap justify-content-center gap-3 mb-4">
                {arr7.map((e, i) => (
                    <Button  rounded outlined aria-label="Filter" key={i}>{e}</Button>
                ))}
            </div>
        </div>
    );
}

// export default function Homepage() {
    // const arr =" תָּמִיד מִדּוֹת	נִדָּה"
    //  בְּרָכוֹת	שַׁבָּת	עֵרוּבִין	פְּסָחִים	שְׁקָלִים	יוֹמָא
    // סֻכָּה	בֵּיצָה	רֹאשׁ הַשָּׁנָה	תַּעֲנִית	מְגִלָּה	מוֹעֵד קָטָן
    // חֲגִיגָה	יְבָמוֹת	כְּתוּבוֹת	נְדָרִים	נָזִיר	גִּיטִין
    // קִדּוּשִׁין 	סוֹטָה	בָּבָא קַמָּא	בָּבָא מְצִיעָא	בָּבָא בָּתְרָא	סַנְהֶדְרִין
    // מַכּוֹת	שָׁבוּעוֹת	עֵדוּיוֹת	עֲבוֹדָה זָרָה	זְבָחִים	מְנָחוֹת
    // חֻלִּין	בְּכוֹרוֹת	עֲרָכִין	תְּמוּרָה	כְּרִיתוּת	מְעִילָה
// const arr1="בְּרָכוֹת	שַׁבָּת	עֵרוּבִין	פְּסָחִים	שְׁקָלִים	יוֹמָא".split(" ")
// const arr2= "סֻכָּה	בֵּיצָה	רֹאשׁ הַשָּׁנָה	תַּעֲנִית	מְגִלָּה	מוֹעֵד קָטָן".split(" ")
// const arr3= "חֲגִיגָה	יְבָמוֹת	כְּתוּבוֹת	נְדָרִים	נָזִיר	גִּיטִין"
// const arr4 = "קִדּוּשִׁין 	סוֹטָה	בָּבָא קַמָּא	בָּבָא מְצִיעָא	בָּבָא בָּתְרָא	סַנְהֶדְרִין"
// const arr5 = "מַכּוֹת	שָׁבוּעוֹת	עֵדוּיוֹת	עֲבוֹדָה זָרָה	זְבָחִים	מְנָחוֹת"
// const arr6="חֻלִּין	בְּכוֹרוֹת	עֲרָכִין	תְּמוּרָה	כְּרִיתוּת	מְעִילָה"
// const arr7 = "תָּמִיד	מִדּוֹת	נִדָּה"
// const arr2 = arr1.split(" ")
// arr2.map(e=>console.log(e));
// const showButton=(e)=>{
//     return <p> <Button rounded outlined aria-label="Filter">{e}</Button></p>
   
// }
// arr2
    // return (
    //     <div className="card">
    //         <div className="flex flex-wrap justify-content-center gap-3 mb-4">
    //       {arr1.map((e,i)=><Button>{e}</Button>)}
                {/* <Button rounded outlined aria-label="Filter">בֵּיצָה</Button>&nbsp;
                <Button rounded outlined aria-label="Filter">סֻכָּה</Button>&nbsp;
                <Button rounded outlined aria-label="Filter">יוֹמָא</Button>&nbsp;
                <Button rounded outlined aria-label="info">שְׁקָלִים</Button> &nbsp;
                 <Button rounded outlined aria-label="Filter">שַׁבָּת</Button>&nbsp;
                 <Button rounded outlined aria-label="Filter">כְּתוּבוֹת</Button>&nbsp;
                 <br></br><br></br> */}
//                  {/* {arr2.map(e=>)} */}
//             </div>
           
//         </div>
//     )
// }
