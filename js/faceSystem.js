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

        const  labels = ['22144019', '22145022',  '22145051',  '22145082', '22144020',   '22145023',   '22145052',  '22145083', '22144021',
         '22145024',     '22145054',  '22145085', '22144024',     '22145055',
          '22145086', '22144025',  '22145027',   '22145056',  '22145087', '22144026',   '22145028',   '22145057',  '22145088', '22144027',
           '22145029',   '22145058',  '22145089', '20221231', '22144028',   '22145030',   '22145059',  '22145090', '21071002',  '22144029',
            '22145031',  '22145060',  '22145092', '21071008',  '22144030',   '22145032',   '22145061',  '22145093', '21071506',  '22145001',
             '22145033',   '22145062',  '22145094', '22144002',  '22145002',   '22145034',   '22145063',  '22145095', '22144003',  '22145004',
              '22145035',   '22145064',  '22145096', '22144004', '22145005',   '22145036',   '22145065',  '22145097', '22144005',  '22145006',
                '22145037',   '22145066',  '22145098', '22144006',  '22145007',   '22145038',  '22145067',  '22145099', '22144007', '22145008',
                '22145039',   '22145068',  '22145100', '22144007',  '22145010',   '22145040',   '22145069',  '22145101', '22144008', '22145011',
                 '22145041',   '22145072',  '22145102', '22144009',  '22145012',  '22145042',   '22145073',  '22145104', '22144010',  '22145013',
                  '22145043',   '22145074',  '22145105', '22144011',  '22145014',   '22145044',   '22145075',  '22145106', '22144012',  '22145015',
                   '22145045',   '22145076',  '22145107', '22144013',  '22145016',   '22145046',   '22145077',  '22145108', '22144014',  '22145017',
                      '22145047',   '22145078',  '22145109', '22144015',  '22145018',   '22145048',   '22145079',  '22145110', '22144016',  '22145019',
                       '22145049',   '22145080',  '22145111',
'22145053', '22144022', '22145084',     '22145025','22145026', ]        
        
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
