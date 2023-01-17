import React,{ useState } from 'react';
import './GUI.css'
import Toggle from './Toggle';
import Game from './Game';

const Home = () => {
    var [text, setText] = useState("Please enter your name...")
    var [heading, setHead] = useState("Welcome Champion!")
    var [button, setButton] = useState("Submit!")
    var [clicks, setClicks] = useState(0)
    var [hide, setHidden] = useState("text")
    var [box, setBox] = useState("box")
    var [about, setAbout] = useState("about")
    var [title, setTitle] = useState("h1")
    var [buttonTrans, setButtonTrans] = useState("button")
    var [logbox, setLogbox] = useState("logbox")
    var [inventory, setInventory] = useState("inventory")
    var [username, setUsername] = useState("username")
    var [quickattack, setQuickattack] = useState("quickattack")
    var [heavyattack, setHeavyattack] = useState("heavyattack")
    var [togglebox, setToggleBox] = useState("toggle")
    var [chatlog, setChatlog] = useState("chatlog")


    const [champion, setChampion] = useState("")
    const[user, setUser] = useState(champion)

    const handleChange = (event) => {
        setChampion(event.target.value)
    }

    function Progress() {
        if (clicks == 0) {
        setHead('Rules:')
        setText(`Each round you will face an assortment of 4 random enimies, once defeated, you will face the Dragon boss. After every enemy kill you will recive a random upgrade for either your Sword, Bow, Helemet, or Body armor, providing a bonus to either your damage, or defence. Killing the dragon boss drops double upgrades, and a HP potion that will recover 150 life.

        Defeat as many enimies as you can before your health reachs Zero!`)
        setButton("Next")
        setHidden("hidden")
        setUser(champion)
        setClicks(clicks += 1)
        }
        else if (clicks == 1){
            setText(`"Quick attack" will attack the current enemy with a 75% chance to hit, dealing the chosen weapons damage if sucessful.

            "Heavy attack" will attack the current enemy with a 55% chance to hit, dealing 150% of the chosen weapons damage if sucessful.
            
            Attacking the enemy with the weapon thats type corresponds with enemy weakness will deal an aditional 20% damage of the chosen weapons damage.`)
            setClicks(clicks += 1)
        }
        else if (clicks == 2){
            setText(`The "Stats" option allows you to view your characters current name and health, weapons and armor, as well as how many eneimes you have defeated.

            Upon reaching 0 HP, your Name, Enimes slain, and Dragons slain, will be recorded and the game will be exited.
            You can view these scores when you next play by typing "Previous Run".
            
            Good luck and have fun!`)
            setClicks(clicks += 1)
        }
        else if (clicks == 3){
            setBox("box2")
            setAbout("about2")
            setTitle("header")
            setButtonTrans("button2")
            setLogbox("logbox2")
            setInventory("inventory2")
            setUsername("username2")
            setQuickattack("quickattack2")
            setHeavyattack("heavyattack2")
            setToggleBox("toggle2")
            setChatlog("chatlog2")
        }
        
    }

    return(
        <div className={box}>
            <div className={logbox}><p className={chatlog}><Game /></p></div>
            <p className={username}>{user}:</p>
            <div className={inventory}></div>
            <div className={togglebox}><Toggle/></div>
            <button className={quickattack}>Quick Attack</button>
            <button className={heavyattack}>Heavy Attack</button>
            <h1 className={title}>{heading}</h1>
            <p className={about}>
            {text}
            </p>
            <input type={hide} id="champion" name="champion" onChange={handleChange} value={champion} maxlength="12"/>
            <button className={buttonTrans} onClick={Progress}>{button}</button>
        </div>
    )
}

export default Home