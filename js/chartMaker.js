function make_bar(arr ,target, side, mission, direction, ID, name, text){

    var num1_1 = Number(0), num1_2 = Number(0), num2_1 = Number(0), num2_2 = Number(0), num3_1 = Number(0), num3_2 = Number(0)

    if(target == 'cs'){
        for(i = 0 ; i < arr.length ; i++){
            if(arr[i][7] == target){
                if(arr[i][11] == mission){
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
                    if(arr[i][11] == mission){
                        if(mission == 'p'){
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
                        else if(mission == 'c'){
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