


    var json1 = [

        {"Time Period":"small sedan/hatchback/SUV", "Morning rush hour ":"+$0.02/min", "Mid-day rush hour ":"+$0.018/min", "Afternoon rush hour ":"+$0.02/min", "Day off-rush hour":"+$0.015/min", "Night-off rush hour":"+$0.012/min", "Mid-night ~ early morning":"+$0.005/min"},
        {"Time Period":"mid-size sedan/hatchback/SUV", "Morning rush hour ":"+$0.021/min", "Mid-day rush hour ":"+$0.019/min", "Afternoon rush hour ":"+$0.021/min", "Day off-rush hour":"+$0.016/min", "Night-off rush hour":"+$0.013/min", "Mid-night ~ early morning":"+$0.006/min"},
        {"Time Period":"full-size sedan/hatchback/SUV", "Morning rush hour ":"+$0.022/min", "Mid-day rush hour ":"+$0.02/min", "Afternoon rush hour ":"+$0.022/min", "Day off-rush hour":"+$0.017/min", "Night-off rush hour":"+$0.014/min", "Mid-night ~ early morning":"+$0.007/min"},
        {"Time Period":"van/ mini-van", "Morning rush hour ":"+$0.023/min", "Mid-day rush hour ":"+$0.021/min", "Afternoon rush hour ":"+$0.023/min", "Day off-rush hour":"+$0.018/min", "Night-off rush hour":"+$0.015/min", "Mid-night ~ early morning":"+$0.008/min"},
        {"Time Period":"convertible/roadster/supercar", "Morning rush hour ":"+$0.025/min", "Mid-day rush hour ":"+$0.023/min", "Afternoon rush hour ":"+$0.025/min", "Day off-rush hour":"+$0.020/min", "Night-off rush hour":"+$0.018/min", "Mid-night ~ early morning":"+$0.009/min"},

    ];




    function buildTable(input) {
        var column = [];

        for (var i = 0; i < input.length; i++) {
            for (var k in input[i]) {
                if (column.indexOf(k) === -1) {
                    column.push(k);
                }
            }
        }

        var table = document.createElement("table");

        var row = table.insertRow(-1);

        for (var i = 0; i < column.length; i++) {
            var header = document.createElement("th");
            header.innerHTML = column[i];

            row.appendChild(header);
        }


        for (var i = 0; i < input.length; i++) {


            tableRow = table.insertRow(-1);
            for (var j = 0; j < column.length; j++) {
                var outputRow = tableRow.insertCell(-1);


                outputRow.innerHTML = input[i][column[j]];
            }
        }


        var output = document.getElementById("table");
        output.innerHTML = "";
        output.appendChild(table);
    }

    buildTable(json1)
