function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {

    }
}

var teamA = prompt("Enter team A name")
var teamB = prompt("Enter team B name")
console.log(teamA, " vs ", teamB)
sleepFor(1000)

var overs = +prompt("Enter overs limits")
console.log(overs + ' overs match')
sleepFor(1000)

var toss = Math.floor(Math.random() * 2)
console.log('Toss')
sleepFor(3000)

var tossWinner;
var tossLooser;
var tossWinnerWickets = 0;
var tossLooserWickets = 0;
var tossWinnerRuns = 0;
var tossLooserRuns = 0;

if (toss == 1) {
    tossWinner = teamA;
    tossLooser = teamB
}
else {
    tossWinner = teamB;
    tossLooser = teamA
}

console.log(tossWinner, ' won the toss and choose bat first')
sleepFor(2000)

//first inning
var boolean = false;
for (var i = 0; i < overs; i++) {
    if(boolean){
        break;
    }   
    else{
        for (var j = 1; j < 7; j++) {
            if (tossWinnerWickets == 10) {
                console.log('All player out of team ' + tossWinner)
                boolean = true
                break;
            }
            else {
                var runs = Math.floor(Math.random() * 7)
                if (runs == 1) {
                    console.log('single run')
                    tossWinnerRuns += runs
                }
                else if (runs == 2) {
                    console.log('double run')
                    tossWinnerRuns += runs
                }
                else if (runs == 2) {
                    console.log('Good running!')
                    tossWinnerRuns += runs
                }
                else if (runs == 4) {
                    console.log('Four runs')
                    tossWinnerRuns += runs
                }
                else if (runs == 5) {
                    console.log('missed ball!')
                }
                else if (runs == 6) {
                    console.log('Its a Six!')
                    tossWinnerRuns += runs
                }
                else {
                    console.log('Out!!!')
                    ++tossWinnerWickets
                }
                console.log(tossWinnerRuns + '/' + tossWinnerWickets)
                console.log('ball', i + '.' + j)
                sleepFor(2000)
            }
        }
    } 
    console.log((i + 1) + ' over is complete in score is ' + tossWinnerRuns + '/' + tossWinnerWickets)
    sleepFor(2000)
}

console.log(tossLooser + ' needs ' + (tossWinnerRuns + 1) + ' runs in ' + overs + ' overs')
sleepFor(3000)

console.log('Second Inning Start ==>')
sleepFor(1000)
//second inning
if (tossLooserRuns > tossWinnerRuns) {
    console.log("Parent Break! ===>")
    sleepFor(2000)
}
else {
    var flage = false;
    for (var i = 0; i < overs; i++) {
        if (flage) {
            sleepFor(2000)
            break;
        }
        else {
            for (var j = 1; j < 7; j++) {
                if(flage){
                    break;
                }
                else{
                    if (tossLooserWickets == 10) {
                        flage = true;
                        console.log("All players out of team " + tossLooser)
                        break;
                    }
                    else if (tossLooserRuns > tossWinnerRuns) {
                        flage = true;
                        console.log(tossLooser + ' complete the cheasing in ' + i + '.' + j + " overs.")
                        break;
                    }
                    else {
                        var runs = Math.floor(Math.random() * 7)
                        if (runs == 1) {
                            console.log('single run')
                            tossLooserRuns += runs
                        }
                        else if (runs == 2) {
                            console.log('double run')
                            tossLooserRuns += runs
                        }
                        else if (runs == 2) {
                            console.log('Good running!')
                            tossLooserRuns += runs
                        }
                        else if (runs == 4) {
                            console.log('Four runs')
                            tossLooserRuns += runs
                        }
                        else if (runs == 5) {
                            console.log('missed ball!')
                        }
                        else if (runs == 6) {
                            console.log('Its a Six!')
                            tossLooserRuns += runs
                        }
                        else {
                            console.log('Out!!!')
                            ++tossLooserWickets
                        }
                        console.log(tossLooserRuns + '/' + tossLooserWickets)
                        console.log('ball', i + '.' + j)
                        sleepFor(2000)
                    }
                }
            }
        }
        console.log((i + 1) + ' over is complete in score is ' + tossLooserRuns + '/' + tossLooserWickets)
        sleepFor(2000)
    }
}

if (tossWinnerRuns > tossLooserRuns) {
    console.log("Toss Winner ==> "+ tossWinner + ' won the match by ' + (tossWinnerRuns - tossLooserRuns) + ' run')
}
else if (tossWinnerRuns < tossLooserRuns) {
    console.log("Toss Looser ==> "+ tossLooser + ' won the match by ' + (10 - tossLooserWickets) + ' wickets')
}
else{
    console.log('Match Tie!')
}