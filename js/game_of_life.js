function insertLife(){
    $(this).addClass("alive")
}

function toggleTime(){
    var change = document.getElementById("timeButton");
    if (change.innerHTML == "start"){
        change.innerHTML = "stop";
        }
    else {
        change.innerHTML = "start";
        }
    if(!clock){
        clock = setInterval(lifeDeath, 500)
    }
    else{
        clearInterval(clock)
        clock = 0
    }
}

function examineSurroundings(cell){
    if (!cell.attr("id")){
        return 0
    }
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
    var count = 0
    var surroundings = [$("#" + (x - 1) + "_" + (y - 1)),
                        $("#" + (x + 1) + "_" + (y + 1)),
                        $("#" + (x + 1) + "_" + (y - 1)),
                        $("#" + (x - 1) + "_" + (y + 1)),
                        $("#" + (x - 1) + "_" + y),
                        $("#" + x + "_" + (y - 1)),
                        $("#" + (x + 1) + "_" + y),
                        $("#" + x + "_" + (y + 1)),
                        ]
    for(var i = 0; i < surroundings.length; i ++){
        if (surroundings[i].hasClass("alive")){
            count++
        }
    }
    return count
}

function lifeDeath(){
    var current_table = $("#world")
    var rows = $("#x").val()
    var cols = $("#y").val()
    var $table = $("<table>")
    for (var row = 0; row < rows; row++){
        $row = $("<tr>")
        $table.append($row)
        for (var col = 0; col < cols; col++){
            $col = $("<td>")
            $row.append($col)
            $col.attr("id", row + "_" + col)
            var eco = examineSurroundings($('#' + row + '_' + col))
            $col.click(insertLife)
            if (eco == 3 || (eco == 2 && $('#'+row + "_" + col).hasClass("alive"))){
                $col.addClass("alive")
            }
        }
    }
    $("#gameboard").empty()
    $("#gameboard").append($table)
}

function erase(){
    $("#gameboard").empty()
}

var clock = false
$("#drawBoard").click(lifeDeath)
$("#timeButton").click(toggleTime)
$("#erase").click(erase)
