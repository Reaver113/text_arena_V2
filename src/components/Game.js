import React,{ useState } from 'react';


const Game = () => {
    var [currentLog, setCurrentLog] = useState("Current Log")
    var [log2, setLog2] = useState("Log2")
    var [log3, setLog3] = useState("Log3")
    var [log4, setLog4] = useState("Log4")
    var [log5, setLog5] = useState("Log5")
    var [log6, setLog6] = useState("Log6")
    var [log7, setLog7] = useState("Log7")
    var [finalLog, setFinalLog] = useState("Final On Screen Log")

    function LogShift(newLog) {
        setFinalLog(log7)
        setLog7(log6)
        setLog6(log5)
        setLog5(log4)
        setLog4(log3)
        setLog3(log2)
        setLog2(currentLog)
        setCurrentLog(newLog)
    }

    return(
        <div>
        <p>{finalLog}</p>
        <p>{log7}</p>
        <p>{log6}</p>
        <p>{log5}</p>
        <p>{log4}</p>
        <p>{log3}</p>
        <p>{log2}</p>
        <p>{currentLog}</p>
        </div>
    )
}

export default Game