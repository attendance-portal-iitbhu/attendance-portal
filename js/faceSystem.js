$(document).ready(function(){
                
    async function face(){
        
        const MODEL_URL = '/models'

        await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
        await faceapi.loadFaceLandmarkModel(MODEL_URL)
        await faceapi.loadFaceRecognitionModel(MODEL_URL)
        await faceapi.loadFaceExpressionModel(MODEL_URL)

        const img= document.getElementById('originalImg')
        let faceDescriptions = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors().withFaceExpressions()
        const canvas = $('#reflay').get(0)
        faceapi.matchDimensions(canvas, img)

        faceDescriptions = faceapi.resizeResults(faceDescriptions, img)
        faceapi.draw.drawDetections(canvas, faceDescriptions)
//        faceapi.draw.drawFaceLandmarks(canvas, faceDescriptions)
//        faceapi.draw.drawFaceExpressions(canvas, faceDescriptions)

//, 'Kaushik.jpg', 'Kushagra.jpg', 'Ananya', 'AshutoshSingh',  ,'AyushDubey' ,'BaniSingh','Banoth', 'Harshit', 'Kaushik', 'gautam'
// , 'Sejal', 'Saumya', 'Shrivats', 'Suparna', 'Suchita', 'Srajan', 'Suchita', , 'Suparna'
//         const labels = ['monika','khushboo', 'Kareena', 'Aarya', 'AaryaSuhas', 'Abhinav', 'AbhishekKumarSingh','Adarsh', 'Aditi', 'Advait', 'Amit',
//         'Aniket', 'AnkitKumar', 'Aruprakash','Aryan', 'AryanGupta', 'AryanSrivastava', 'Aryman', 'Bharat', 'chandler', 'Chandu', 'Dev', 'Divyanth',
//         'Lisha', 'Mudavath', 'Nikhil', 'Nunavath','Priyansh', 'Rachaprolu', 'Rajdeep', 'Rajitha', 'RajPrakash', 'Ritika', 'Rupsona', 'Samridhdi', 'Sandipam',
//         'Sanskar', 'Sarthak', 'Sejal', 'ShantanuSingh', 'Shivam', 'Shweta','Srajan','Tejavath', 'Vansh','Vikas','Vinod', 'Vishal', 'Vishvender', 'Vivek', 'YuvrajJagdhane']

//         const  labels = ['22144019', '22145022',  '22145051',  '22145082', '22144020',   '22145023',   '22145052',  '22145083', '22144021',
//          '22145024',     '22145054',  '22145085', '22144024',     '22145055',
//           '22145086', '22144025',  '22145027',   '22145056',  '22145087', '22144026',   '22145028',   '22145057',  '22145088', '22144027',
//            '22145029',   '22145058',  '22145089', '20221231', '22144028',   '22145030',   '22145059',  '22145090', '21071002',  '22144029',
//             '22145031',  '22145060',  '22145092', '21071008',  '22144030',   '22145032',   '22145061',  '22145093', '21071506',  '22145001',
//              '22145033',   '22145062',  '22145094', '22144002',  '22145002',   '22145034',   '22145063',  '22145095', '22144003',  '22145004',
//               '22145035',   '22145064',  '22145096', '22144004', '22145005',   '22145036',   '22145065',  '22145097', '22144005',  '22145006',
//                 '22145037',   '22145066',  '22145098', '22144006',  '22145007',   '22145038',  '22145067',  '22145099', '22144007', '22145008',
//                 '22145039',   '22145068',  '22145100', '22144007',  '22145010',   '22145040',   '22145069',  '22145101', '22144008', '22145011',
//                  '22145041',   '22145072',  '22145102', '22144009',  '22145012',  '22145042',   '22145073',  '22145104', '22144010',  '22145013',
//                   '22145043',   '22145074',  '22145105', '22144011',  '22145014',   '22145044',   '22145075',  '22145106', '22144012',  '22145015',
//                    '22145045',   '22145076',  '22145107', '22144013',  '22145016',   '22145046',   '22145077',  '22145108', '22144014',  '22145017',
//                       '22145047',   '22145078',  '22145109', '22144015',  '22145018',   '22145048',   '22145079',  '22145110', '22144016',  '22145019',
//                        '22145049',   '22145080',  '22145111',
// '22145053', '22144022', '22145084',     '22145025','22145026', ]
        //rosaline maam
//      const  labels =    ['20065118', '20065004', '20065126', '20065068', '20065104', '20064036', '20065087', '20065090', '20065029', '20065132', '20064023',
//                          '20065038', '20065027', '20065016', '20065090', '20065132', '20065090', '20065134', '20065090', '20064009', '20065054', '20065025',
//                          '20065080', '20064023', '20065128', '20065023', '20065076', '20064007', '20065004', '20065130', '20065071', '20064031', '20064026', 
//                          '20065018', '20065003', '20065078', '20065115', '20065030', '20065042', '20064001', '20065051', '20065014', '20065077', '20065046',
//                          '20065085', '20065107', '20065065', '20065097', '20065084', '20065044', '20065135', '20064008', '20065137','20065024', '20065085',
//                          '20064013', '20065096', '20065059', '20065140', '20065073', '20065014','20065137','20065073', '20065065', '20064018', '20065065',
//                          '20065073', '20065133', '20064011', '20064003', '20065028', '20065085', '20065137', '20065140', '20065028', '20065014', '20065015',
//                          '20065028','20065022', '20065076', '20065005']
     //devdas sir
    const  labels =  [ '22135043','22135050','22134029','22135126','22135138','22134016','22135041','22135028','22135118','22135107','22135034','22135010','22134019',
     '22135139','22135143','22135026','22135068','22135145','22135067','22135127','22135032','22135088','22135075','22135022','22135137','22134013',
     '22135127','22135014','22135036','22135014','22135109','22135077','22135060','22135076','22135104','22135146','22135052','22135033','22134021',
     '22134006','22134003','22135122','22135027','22135122','22135121','22134004','22134003','22135070','22135004','22134006','22135023','22135120',
     '22135123','22135044','22135111','22135012','22135097','22135061','22135091','22135022','22135091','22135073','22135124','22135113','22135022',
     '22134015','22135101,'22134026', 22135129','22135027','22135106','22134005','22135025','22135042','22135025','22135014','22135133','22135087','22135038','22135140',
'22135140','22095133','22135098','22135027','22134017','22134025','22134012','22135053','22135031','22135102','22135038','22135080','22135038',
'22135080','22134031','22134005','22135023','22135017','22135017','22135074','22135019','22135054','22135083','22135047','22135063','22135031',
'22135075','22135098','22135128','22135130','22134007','22134009','22134010','22134025','22135040','22135033','22134008','22135001','22135015',
'22134018','22135011','22134027','22135030','22135123','22135101','22135031','22135064','22135131','22135135','22135023','22135114','22135112',
'22135059','22135119','22134014','22135140','22135057','22135056','22134016','22135035','22135024','22135049','22135058','22134015','22135074',
]
    
    //rajeev sir
    
//    const  labels =  ['21135148','21135078','21135035','21135117','21134030','21135153','21135030',
// '21135015','21135127','21134008','21134010','21135146','21134031','21135125','21135069','21135020','21135094','21135076','21135087','21135074',
// '21135042','21135087','21135147','21135074','21135061','21135002','21135096','21134032','21135014','21134023','21134009','21134007','21135138',
// '21135144','21135163','21135118','21135162','21135071','21135028','21135089','21135067','21135083','21135082','21135141','21135052','21135008'
// ]

        
        const labeledFaceDescriptors = await Promise.all(
            labels.map(async label => {

                const imgUrl = `images/${label}.jpg`
                const img = await faceapi.fetchImage(imgUrl)

                const faceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

                if (!faceDescription) {
                throw new Error(`no faces detected for ${label}`)
                }

                const faceDescriptors = [faceDescription.descriptor]
                return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
            })
        );

        const threshold = 0.6
        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, threshold)
        const table = document.getElementById("testBody");
        const results = faceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor))
        j=100;
        results.forEach((bestMatch, i) => {
            const box = faceDescriptions[i].detection.box
            const text = i.toString()+" "+bestMatch.toString()

            let row = table.insertRow();
            let date = row.insertCell(0);
            date.innerHTML = i.toString();
            let name = row.insertCell(1);
            name.innerHTML = bestMatch.toString();
            save = row.insertCell(2);
//            save.innerHTML = "<td><input type='button' id="edit" value='Edit' onclick=""></td>";
            edit = row.insertCell(3);
//            edit.innerHTML = "<td><input type='button' id="ok" value='OK' onclick=""></td>";
    // document.body.appendChild(save);
    // document.body.appendChild(edit);
//            document.write(text)
            const drawBox = new faceapi.draw.DrawBox(box, { label: text })
            drawBox.draw(canvas)
        })

    }
    
    face()
})
