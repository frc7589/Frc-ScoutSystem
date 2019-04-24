function make_bar(arr ,target, side, matchtype, direction, ID, name, text){

    var num1_1 = Number(0), num1_2 = Number(0), num2_1 = Number(0), num2_2 = Number(0), num3_1 = Number(0), num3_2 = Number(0)

    if(target == 'cs'){
        for(i = 0 ; i < arr.length ; i++){
            if(arr[i][7] == target){
                if(arr[i][11] == matchtype){
                    if(arr[i][12] == 't'){
                        if(arr[i][8] == 'l'){
                            num1_2 += Number(arr[i][13])
                        }
                        if(arr[i][8] == 'm'){
                            num2_2 += Number(arr[i][13])
                        }
                        if(arr[i][8] == 'r'){
                            num3_2 += Number(arr[i][13])
                        }
                    }
                    else if(arr[i][12] == 's'){
                        if(arr[i][8] == 'l'){
                            num1_1 += Number(arr[i][13])
                        }
                        if(arr[i][8] == 'm'){
                            num2_1 += Number(arr[i][13])
                        }
                        if(arr[i][8] == 'r'){
                            num3_1 += Number(arr[i][13])
                        }
                    }
                }
            }
        }

        num1_2 -= num1_1
        num2_2 -= num2_1
        num3_2 -= num3_1


        new Chart(document.getElementById(ID),{
            type: 'bar',
            data: {
                labels: ['left','middle','right'],
                datasets: [{
                    label: name+'fail',
                    backgroundColor: window.chartColors.red,
                    data: [
                        num1_2,
                        num2_2,
                        num3_2
                    ]
                },{
                    label: name+'success',
                    backgroundColor: window.chartColors.blue,
                    data: [
                        num1_1,
                        num2_1,
                        num3_1
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                        text: text
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks:{
                            beginatzero:true,
                        }
                    }]
                }
            }
        })
    }
    else if(target == 'rk'){
        for(i = 0 ; i < arr.length ; i++){
            if(arr[i][7] == target){
                if(arr[i][8] ==  side){
                    if(arr[i][11] == matchtype){
                        if(matchtype == 'p'){
                            if(arr[i][9] == direction){
                                if(arr[i][12] == 't'){
                                    if(arr[i][10] == '1'){
                                        num1_2 += Number(arr[i][13])
                                    }
                                    if(arr[i][10] == '2'){
                                        num2_2 += Number(arr[i][13])
                                    }   
                                    if(arr[i][10] == '3'){
                                        num3_2 += Number(arr[i][13])
                                    }
                                }
                                else if(arr[i][12] == 's'){
                                    if(arr[i][10] == '1'){
                                        num1_1 += Number(arr[i][13])
                                    }
                                    if(arr[i][10] == '2'){
                                        num2_1 += Number(arr[i][13])
                                    }
                                    if(arr[i][10] == '3'){
                                        num3_1 += Number(arr[i][13])
                                    }
                                }
                            }
                        }
                        else if(matchtype == 'c'){
                            if(arr[i][12] == 't'){
                                if(arr[i][10] == '1'){
                                    num1_2 += Number(arr[i][13])
                                }
                                if(arr[i][10] == '2'){
                                    num2_2 += Number(arr[i][13])
                                }
                                if(arr[i][10] == '3'){
                                    num3_2 += Number(arr[i][13])
                                }
                            }
                            else if(arr[i][12] == 's'){
                                if(arr[i][10] == '1'){
                                    num1_1 += Number(arr[i][13])
                                }
                                if(arr[i][10] == '2'){
                                    num2_1 += Number(arr[i][13])
                                }
                                if(arr[i][10] == '3'){
                                    num3_1 += Number(arr[i][13])
                                }
                            }
                        }
                    }
                }
            }
        }

        num1_2 -= num1_1
        num2_2 -= num2_1
        num3_2 -= num3_1

        new Chart(document.getElementById(ID),{
            type: 'bar',
            data: {
                labels: ['lv1','lv2','lv3'],
                datasets: [{
                    label: name+'fail',
                    backgroundColor: window.chartColors.red,
                    data: [
                        num1_2,
                        num2_2,
                        num3_2
                    ]
                },{
                    label: name+'success',
                    backgroundColor: window.chartColors.blue,
                    data: [
                        num1_1,
                        num2_1,
                        num3_1
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                        text: text
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks:{
                            beginatzero:true,
                        }
                    }]
                }
            }
        })
    }


}


function make_line(arr, target, ID){
    var Data = []
    var qualArr = [],QF = [],semiArr = [],finalArr = []
    var Data1 = [], Data2 = [], Data3 = [], Data4 = []
    var Labels = []

    function makeData(a,k, matchtype){
        for(i = 0; i < a.length ; i++){
            for(j = 0 ; j < arr.length ; j++){
                if(arr[j][1] == matchtype){
                    if(arr[j][2] == a[i]){
                        Data.push(Number(arr[j][k]))
                        break
                    }
                }
            }
        }
    }

    function doubleData(a, matchtype,obj){
        for(i = 0; i < a.length ; i++){
            k = Number(0)
            for(j = 0 ; j < arr.length ; j++){
                if(arr[j][1] == matchtype){
                    if(arr[j][2] == a[i]){
                        if(arr[j][11] == obj){
                            if(arr[j][12] == 't'){
                                Data1.push(arr[j][13])
                                k++
                            }
                            if(arr[j][12] == 's'){
                                Data2.push(arr[j][13])
                                k++
                            }
                        }
                    }
                }
                if(k == 2){
                    break
                }
            }
        }
    }

    function scoreData(a, matchtype){
        for(i = 0 ; i < a.length ; i++){
            var k = Number(0)
            for(j = 0 ; j < arr.length ; j++){
                if(arr[j][1] == matchtype){
                    if(arr[j][2] == a[i]){
                        if(arr[j][12] == 's'){
                            if(arr[j][11] == 'p'){
                                Data1.push(arr[j][13])
                                Data3.push(arr[j][5])
                                k++
                            }
                            else if(arr[j][11] == 'c'){
                                Data2.push(arr[j][13])
                                Data4.push(arr[j][6])
                                k++
                            }
                        }
                    }
                }
                if(k == 2)break
            }
        }
    }

    function get_game(matchtype ){
        var set =  new Set()
        for(i = 0 ; i <arr.length ; i++){
            if(arr[i][1] == matchtype){
                if(!set.has(arr[i][2])){
                    set.add(arr[i][2])
                }
            }
        }
        var Arr = Array.from(set)
        Arr.sort()
        return Arr
    }
    
    qualArr = get_game('qualify')
    QF = get_game('quarter')
    semiArr = get_game( 'semifinal')
    finalArr = get_game('final')

    //checking who's the target to show on the line 
    if(target == 'startLevel'){
        makeData(qualArr,5,'qualify')
        makeData(QF,5,'quarter')
        makeData(semiArr,5,'semifinal')
        makeData(finalArr,5,'final')
        
        for(i = 0 ; i < qualArr.length ; i++){
            qualArr[i] = 'qual'+qualArr[i]
        }
        for(i = 0 ; i < QF.length ; i++){
            QF[i] = 'quar'+QF[i]
        }
        for(i = 0 ; i < semiArr.length ; i++){
            semiArr[i] = 'semi'+semiArr[i]
        }
        for(i = 0 ; i < finalArr.length ; i++){
            finalArr[i] = 'final'+finalArr[i]
        }

        
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        var config = {
            type: 'line',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'level',
                    data: Data,
                    fill: false,
                    borderColor:'rgb(75,192,192)',
                    lineTension:0,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'started levels'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        }
        new Chart(document.getElementById(ID),config)
    }

    else if(target == 'endLevel'){
        makeData(qualArr,6,'qualify')
        makeData(QF,6,'quarter')
        makeData(semiArr,6,'semifinal')
        makeData(finalArr,6,'final')
        
        for(i = 0 ; i < qualArr.length ; i++){
            qualArr[i] = 'qual'+qualArr[i]
        }
        for(i = 0 ; i < QF.length ; i++){
            QF[i] = 'quar'+QF[i]
        }
        for(i = 0 ; i < semiArr.length ; i++){
            semiArr[i] = 'semi'+semiArr[i]
        }
        for(i = 0 ; i < finalArr.length ; i++){
            finalArr[i] = 'final'+finalArr[i]
        }

        var Labels = []
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        var config = {
            type: 'line',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'level',
                    data: Data,
                    fill: false,
                    borderColor:'rgb(75,192,192)',
                    lineTension:0,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'ended levels'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        }
        new Chart(document.getElementById(ID),config)
    }
    else if(target == 'panel'){
        doubleData(qualArr,'qualify','p')
        doubleData(QF,'quarter','p')
        doubleData(semiArr,'semifinal','p')
        doubleData(finalArr,'final','p')

        for(i = 0 ; i < qualArr.length ; i++){
            qualArr[i] = 'qual'+qualArr[i]
        }
        for(i = 0 ; i < QF.length ; i++){
            QF[i] = 'quar'+QF[i]
        }
        for(i = 0 ; i < semiArr.length ; i++){
            semiArr[i] = 'semi'+semiArr[i]
        }
        for(i = 0 ; i < finalArr.length ; i++){
            finalArr[i] = 'final'+finalArr[i]
        }

        var Labels = []
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        var config = {
            type: 'line',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'try',
                    data: Data1,
                    fill: false,
                    borderColor:'rgb(75,192,192)',
                    lineTension:0,
                },{
                    label: 'success',
                    data: Data2,
                    fill: false,
                    borderColor:'rgb(75,100,192)',
                    lineTension:0,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'panel'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        }

        new Chart(document.getElementById(ID),config)
    }
    else if(target == 'cargo'){
        doubleData(qualArr,'qualify','c')
        doubleData(QF,'quarter','c')
        doubleData(semiArr,'semifinal','c')
        doubleData(finalArr,'final','c')

        for(i = 0 ; i < qualArr.length ; i++){
            qualArr[i] = 'qual'+qualArr[i]
        }
        for(i = 0 ; i < QF.length ; i++){
            QF[i] = 'quar'+QF[i]
        }
        for(i = 0 ; i < semiArr.length ; i++){
            semiArr[i] = 'semi'+semiArr[i]
        }
        for(i = 0 ; i < finalArr.length ; i++){
            finalArr[i] = 'final'+finalArr[i]
        }

        var Labels = []
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        var config = {
            type: 'line',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'try',
                    data: Data1,
                    fill: false,
                    borderColor:'rgb(75,192,192)',
                    lineTension:0,
                },{
                    label: 'success',
                    data: Data2,
                    fill: false,
                    borderColor:'rgb(75,100,192)',
                    lineTension:0,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'cargo'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        }

        new Chart(document.getElementById(ID),config)
    }
    else if(target == 'score'){
        scoreData(qualArr,'qualify')
        scoreData(QF,'quarter')
        scoreData(semiArr,'semifinal')
        scoreData(finalArr,'final')

        for(i = 0 ; i < qualArr.length ; i++){
            qualArr[i] = 'qual'+qualArr[i]
        }
        for(i = 0 ; i < QF.length ; i++){
            QF[i] = 'quar'+QF[i]
        }
        for(i = 0 ; i < semiArr.length ; i++){
            semiArr[i] = 'semi'+semiArr[i]
        }
        for(i = 0 ; i < finalArr.length ; i++){
            finalArr[i] = 'final'+finalArr[i]
        }


        var Labels = []
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        

        for(i = 0 ; i < Labels.length ; i++){
            if(Data4[i] == 3)Data4[i] = 4
            Data[i] = Number(Data1[i])*2+Number(Data2[i])*3 + Number(Data3[i])*3+Number(Data4[i])*3
        }

        var Labels = []
        Labels = Labels.concat(qualArr)
        Labels = Labels.concat(QF)
        Labels = Labels.concat(semiArr)
        Labels = Labels.concat(finalArr)

        var config = {
            type: 'line',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'score',
                    data: Data,
                    fill: false,
                    borderColor:'rgb(75,192,192)',
                    lineTension:0,
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'score'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 10    ,
                        },
                    }]
                }
            }
        }

        new Chart(document.getElementById(ID),config)
    }
}