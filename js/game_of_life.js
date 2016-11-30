
function createTable(){
    current_seconds = 0
    var rows = 20
    var cols = 20
    var $table = $("<table>")
    $("#gameboard").empty()
    $("#gameboard").append($table)
    for(var row = 0; row < rows; row++){
        var $row = $("<tr>")
        $table.append($row)
        for(var col = 0; col < cols; col++){
            var $col = $("<td>")
            $col.addClass("dead")
            $col.click(clickCell)
            $row.append($col)
            $col.attr("id", row + "_" + col)
        }
    }
}


function createLife(){
    table = createTable()
    console.log(table)
}


function rightClick(event){
    $(this).toggleClass("dead")
}


function clickCell(){
    $(this).toggleClass("alive")
    findNeighbors($(this))
}

function haveFun(){
    console.log("Fun")
}


function notFun(){
    console.log("Not fun")

}


function findNeighbors(cell){
    console.log(cell.attr("id").split("_"))
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
    var count = 0
    var neighbors = [$("#" + (x-1) + "_" + (y-1)),
                     $("#" +  x    + "_" + (y-1)),
                     $("#" + (x+1) + "_" + (y-1)),
                     $("#" + (x-1) + "_" +  y),
                     $("#" + (x+1) + "_" +  y),
                     $("#" + (x-1) + "_" + (y+1)),
                     $("#" +  x    + "_" + (y+1)),
                     $("#" + (x+1) + "_" + (y+1))]
    for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i].hasClass("dead alive")){
            count++
        }
    }
    console.log(count)
    if (count >=2) {
        for(var i in neighbors){
            console.log(neighbors[i])
        }
        if (count >3){
            notFun(cell)
        }
        else {
            haveFun(cell)
        }
    }
    // if (count >3) {
    //     for(var i = 0; neighbors.length; i++) {
    //         neighbors[i].rightClick()
    //     }
    // }
    cell.addClass("clicked"+count)
    cell.html(count + "")
}


function gameWon(){
}


function gameLost(){
    clearInterval(clock)
    console.log("You lose")
    $(".bombcell").addClass("redcell")
    $('td').unbind("click").unbind("contextmenu")
}

var clock
var current_seconds = 0
function updateClock(){
    $("#clock").html(current_seconds++)
}
createLife()
$("#cols")
$("#startButton").click(createTable)
