
//PART ONE

//variable to change the color of the text
var blue = false;
function changeColor() {
    blue = !blue;
    console.log(blue)
    if(blue == true){
        document.getElementById('helloWorld').style.color = "yellow";
    }else{
        document.getElementById('helloWorld').style.color = "blue";
    }
}


//PART TWO
function checkConflicts(calander_data){

    var calander_data = [
        {"name": "Interview at The Portal",
            "date": "Feb 23, 2017",
            "start_time": {
                "number": "3:30",
                "ampm": "PM"
            },
            "end_time": {
                "number": "4",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Dinner with John",
            "date": "Feb 24, 2017",
            "start_time": {
                "number": "5",
                "ampm": "PM"
            },
            "end_time": {
                "number": "5:30",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Conference",
            "date": "Feb 24, 2017",
            "start_time": {
                "number": "11",
                "ampm": "AM"
            },
            "end_time": {
                "number": "5:30",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Lunch with Cindy",
            "date": "Feb 25, 2017",
            "start_time": {
                "number": "12",
                "ampm": "PM"
            },
            "end_time": {
                "number": "1",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Disneyland",
            "date": "Feb 25, 2017",
            "start_time": {
                "number": "8",
                "ampm": "AM"
            },
            "end_time": {
                "number": "11",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Test Event 2",
            "date": "Feb 23, 2017",
            "start_time": {
                "number": "1",
                "ampm": "PM"
            },
            "end_time": {
                "number": "3",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Test Event 3",
            "date": "Feb 28, 2017",
            "start_time": {
                "number": "11",
                "ampm": "AM"
            },
            "end_time": {
                "number": "5:30",
                "ampm": "PM"
            },
            "conflict": false
        },
        {"name": "Test Event 4",
            "date": "Mar 2, 2017",
            "start_time": {
                "number": "1",
                "ampm": "PM"
            },
            "end_time": {
                "number": "7",
                "ampm": "PM"
            },
            "conflict": false
        }
    ];
    //algorithm starts
    var compare_date = '';
    var temp_start = 0;
    var temp_end = 0;
    var temp_start_event = 0;
    var temp_end_event = 0;
    var counter = 0;
    var conflictsArray = [];
    for(var i = 0; i < calander_data.length; i++){
        if(i == 0){
            compare_date = calander_data[i];
        }else{
            // check if the dates are the same
            if(compare_date.date == calander_data[i].date){
                if(compare_date.start_time.ampm == "PM"){
                    temp_start = parseInt(compare_date.start_time.number) + 12;
                }else{
                    temp_start = parseInt(compare_date.start_time.number);
                }
                if(compare_date.end_time.ampm == "PM"){
                    temp_end = parseInt(compare_date.end_time.number) + 12;
                }else{
                    temp_end = parseInt(compare_date.end_time.number);
                }
                if(calander_data[i].start_time.ampm == "PM"){
                    temp_start_event = parseInt(calander_data[i].start_time.number) + 12;
                }else{
                    temp_start_event = parseInt(calander_data[i].start_time.number);
                }
                if(calander_data[i].end_time.ampm == "PM"){
                    temp_end_event = parseInt(calander_data[i].end_time.number) + 12;
                }else{
                    temp_end_event = parseInt(calander_data[i].end_time.number);
                }
                // check if the times overlap
                if(temp_start <= temp_end_event && temp_end >= temp_start_event){
                    console.log("Conflict")
                    console.log(compare_date)
                    console.log(calander_data[i])
                    compare_date.conflict = true;
                    calander_data[i].conflict = true;
                    compare_date = calander_data[i];
                }else{
                    compare_date = calander_data[i];
                }
            }else{

            }
        }
    }
    // calander_data.forEach(function (event) {
    //     console.log(event.name)
    //     if (compare_date == ''){
    //         compare_date = event;
    //     }else{
    //         console.log(compare_date)
    //         if (compare_date.date == event.date){
    //             console.log("same date")
    //             //if dates are same check if the time is AM or PM and adjust the time accordingly... (HAVENT DEALT WITH :30 YET)
    //             if(compare_date.start_time.ampm == "PM"){
    //                 temp_start = parseInt(compare_date.start_time.number) + 12;
    //             }else{
    //                 temp_start = parseInt(compare_date.start_time.number);
    //             }
    //             if(compare_date.end_time.ampm == "PM"){
    //                 temp_end = parseInt(compare_date.end_time.number) + 12;
    //             }else{
    //                 temp_end = parseInt(compare_date.end_time.number);
    //             }
    //             if(event.start_time.ampm == "PM"){
    //                 temp_start_event = parseInt(event.start_time.number) + 12;
    //             }else{
    //                 temp_start_event = parseInt(event.start_time.number);
    //             }
    //             if(event.end_time.ampm == "PM"){
    //                 temp_end_event = parseInt(event.end_time.number) + 12;
    //             }else{
    //                 temp_end_event = parseInt(event.end_time.number);
    //             }
    //
    //             console.log(temp_start, temp_end);
    //             console.log(temp_start_event, temp_end_event);
    //             if(temp_start <= temp_end_event && temp_end >= temp_start_event){
    //                 console.log("Conflict")
    //                 compare_date.conflict = true;
    //                 conflictsArray.push(compare_date);
    //             }else{
    //                 compare_date = event;
    //             }
    //             console.log(conflictsArray)
    //
    //         }else{
    //             compare_date = event;
    //         }
    //     }
    // })
};

