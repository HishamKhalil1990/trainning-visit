const getTimeFormat = (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

const categoryHead = (category) => {
    return `<tr style='height:.2in'>
    <td width=28 nowrap style='width:21.3pt;border:solid windowtext 1.0pt;
    border-top:none;background:#D6DCE4;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><b><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>no</span></b></p>
    </td>
    <td width=297 nowrap style='width:222.9pt;border-top:none;border-left:solid black 1.0pt;
    border-bottom:solid windowtext 1.0pt;border-right:none;background:#D6DCE4;
    padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><b><span
    lang=AR-SA style='font-size:10.0pt;color:black'>${category}</span></b></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;</span><span lang=AR-JO dir=RTL style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'>&#1575;&#1604;&#1593;&#1604;&#1575;&#1605;&#1577;</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>`
}

const categoryQuestion = (questionDetail) => {
    return`<tr style='height:.2in'>
    <td width=28 nowrap style='width:21.3pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><b><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>${questionDetail.id + 1}</span></b></p>
    </td>
    <td width=297 style='width:222.9pt;border-top:none;border-left:solid windowtext 1.0pt;
    border-bottom:solid windowtext 1.0pt;border-right:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal dir=RTL style='margin-bottom:0in;text-align:right;
    line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>${questionDetail.question}</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;</span><span lang=AR-JO dir=RTL style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'>${questionDetail.score}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>`
}

const categoryTotal = (questionTotal) => {
    return`<tr style='height:.2in'>
    <td width=28 nowrap style='width:21.3pt;border:solid windowtext 1.0pt;
    background:#D6DCE4;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><b><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'></span></b></p>
    </td>
    <td width=297 style='width:222.9pt;border-top:solid windowtext 1.0pt;
    border-left:solid black 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;background:#D6DCE4;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><b><span
    lang=AR-SA style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&#1575;&#1604;&#1605;&#1580;&#1605;&#1608;&#1593;</span></b></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;</span><span lang=AR-JO dir=RTL style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'>${questionTotal}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>`
}

const qustionNote = (note) => {
    return`<tr style='height:.2in'>
    <td width=523 nowrap colspan=4 style='width:392.3pt;border:solid windowtext 1.0pt;
    border-top:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=right dir=LTR style='margin-bottom:0in;text-align:
    right;line-height:normal'><b><span lang=AR-SA dir=RTL style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'>&#1605;&#1604;&#1575;&#1581;&#1592;&#1577;: ${note}</span></b></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>`
}

const categoriesDiv = (categoriesDetails) => {
    let divs = ''
    categoriesDetails.forEach(category => {
        let detail = ""
        detail += categoryHead(category.name)
        category.questions.forEach((question,index) => {
            if(index < category.questions.length){
                detail += categoryQuestion(question)
            }
            if(question.note != '' && question.note != undefined && question.score != 'y'){
                detail += qustionNote(question.note)
            }
        })
        detail += categoryTotal(category.total)
        divs += detail
    })
    return divs
}

const totalScore = (categoriesDetails) => {
    let total = 0
    let maxTotal = 0
    categoriesDetails.forEach((category) => {
        total += category.total
        maxTotal += category.maxTotal
    })
    const score = total*100.00/maxTotal
    return score.toFixed(2)
}


const createHTML = (data) => {
    return `
    <html>
    <head>
    <meta http-equiv=Content-Type content="text/html; charset=windows-1252">
    <meta name=Generator content="Microsoft Word 15 (filtered)">
    <style>
    <!--
    /* Font Definitions */
    @font-face
        {font-family:"Cambria Math";
        panose-1:2 4 5 3 5 4 6 3 2 4;}
    @font-face
        {font-family:Calibri;
        panose-1:2 15 5 2 2 2 4 3 2 4;}
    @font-face
        {font-family:"Calibri Light";
        panose-1:2 15 3 2 2 2 4 3 2 4;}
    /* Style Definitions */
    p.MsoNormal, li.MsoNormal, div.MsoNormal
        {margin-top:0in;
        margin-right:0in;
        margin-bottom:8.0pt;
        margin-left:0in;
        line-height:107%;
        font-size:11.0pt;
        font-family:"Calibri",sans-serif;}
    .MsoChpDefault
        {font-family:"Calibri",sans-serif;}
    .MsoPapDefault
        {margin-bottom:8.0pt;
        line-height:107%;}
    @page WordSection1
        {size:8.5in 11.0in;
        margin:1.0in 1.0in 1.0in 1.0in;}
    div.WordSection1
        {page:WordSection1;}
    -->
    </style>

    </head>

    <body lang=EN-US style='word-wrap:break-word'>

    <div class=WordSection1>

    <div align=right>

    <table class=MsoNormalTable dir=rtl border=0 cellspacing=0 cellpadding=0
    align=right width=523 style='width:392.3pt;border-collapse:collapse;
    margin-left:6.75pt;margin-right:6.75pt'>
    <tr style='height:.2in'>
    <td width=523 nowrap colspan=4 style='width:392.3pt;border:solid windowtext 1.0pt;
    background:#ACB9CA;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><b><span
    lang=AR-SA style='font-size:10.0pt;color:black'>&#1601;&#1585;&#1608;&#1593;
    &#1575;&#1604;&#1585;&#1610;&#1581;&#1575;&#1606; - </span></b><b><span
    dir=LTR style='font-size:10.0pt;color:black'>CHECK List</span></b></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>&#1575;&#1604;&#1578;&#1575;&#1585;&#1610;&#1582;
    - &#1575;&#1604;&#1610;&#1608;&#1605;</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span dir=LTR></span><span style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'><span dir=LTR></span>&nbsp;${new Date(data.date).toISOString().split('T')[0]}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-JO
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>ساعة الدخول</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span dir=LTR></span><span style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'><span dir=LTR></span>${getTimeFormat(new Date(data.time))}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-JO
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>ساعة الخروج</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span dir=LTR></span><span style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'><span dir=LTR></span>${getTimeFormat(new Date())}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>&#1575;&#1604;&#1601;&#1585;&#1593;</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;</span><span lang=AR-JO dir=RTL style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'>${data.branchValue}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>اسم المدرب</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;<span dir=RTL></span><span lang=AR-SA dir=RTL><span
    dir=RTL></span>${data.names.vistor}</span></span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>اسم مدير الوردية</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;<span dir=RTL></span><span lang=AR-SA dir=RTL><span
    dir=RTL></span>${data.names.supervisor}</span></span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>العلامة</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;
    color:black'>&nbsp;<span dir=RTL></span><span lang=AR-SA dir=RTL><span
    dir=RTL></span>${totalScore(data.allCatData)}</span></span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    <tr style='height:22.5pt'>
    <td style='height:22.5pt;border:none' width=0 height=38></td>
    </tr>
    <tr style='height:.2in'>
    <td width=523 nowrap colspan=4 style='width:392.3pt;border:solid windowtext 1.0pt;
    border-top:none;background:#ACB9CA;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><b><span
    lang=AR-SA style='font-size:10.0pt;color:black'>&#1605;&#1593;&#1575;&#1610;&#1610;&#1585;
    &#1575;&#1604;&#1578;&#1602;&#1610;&#1610;&#1605;</span></b></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </tr>
    ${categoriesDiv(data.allCatData)}
    <tr style='height:.2in'>
    <td width=326 nowrap colspan=2 valign=bottom style='width:244.2pt;border:
    solid windowtext 1.0pt;border-top:none;padding:0in 5.4pt 0in 5.4pt;
    height:.2in'>
    <p class=MsoNormal align=center dir=RTL style='margin-bottom:0in;text-align:
    center;line-height:normal;direction:rtl;unicode-bidi:embed'><span lang=AR-SA
    style='font-size:10.0pt;font-family:"Calibri Light",sans-serif;color:black'>ما اكثر شي اعجبك بالفرع</span></p>
    </td>
    <td width=197 nowrap colspan=2 valign=bottom style='width:148.1pt;border-top:
    none;border-left:solid windowtext 1.0pt;border-bottom:solid windowtext 1.0pt;
    border-right:none;padding:0in 5.4pt 0in 5.4pt;height:.2in'>
    <p class=MsoNormal align=center dir=LTR style='margin-bottom:0in;text-align:
    center;line-height:normal'><span dir=LTR></span><span style='font-size:10.0pt;
    font-family:"Calibri Light",sans-serif;color:black'><span dir=LTR></span>&nbsp;${data.favourite == ''? 'لا يوجد' : data.favourite}</span></p>
    </td>
    <td style='height:.2in;border:none' width=0 height=24></td>
    </table>

    </div>

    <p class=MsoNormal>&nbsp;</p>

    </div>

    </body>

    </html>
    `;
}

export {createHTML}