(function() {
    const agents = [
        {
            id: 1,
            name: "Sabine Callas",
            profession: "Scientist",
            img: "viper.webp",
            img_second: "viper_logo.webp",
            text: "Viper is a VALORANT agent who deals with poison and acid, burning down and suffocating her enemies. She uses fuel to activate her powerful abilities to melt passing targets and block vision.",
            underline: "bg-green-700",
            circle: "bg-green-700",
            small_circle: "bg-green-800",
        },
        {
            id: 2,
            name: "Alexander Novikov",
            profession: "Hunter",
            img: "sova.png",
            img_second: "sova_logo.png",
            text: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
            underline: "bg-blue-700",
            circle: "bg-blue-700",
            small_circle: "bg-blue-800",
        },
        {
            id: 3,
            name: "Amir El Amari",
            profession: "Spy",
            img: "cypher.webp",
            img_second: "cypher_logo.png",
            text: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
            underline: "bg-brown-700",
            circle: "bg-brown-700",
            small_circle: "bg-brown-800",
        },
        {
            id: 4,
            name: "Hazal Eyletmez",
            profession: "Spy",
            img: "fade.webp",
            img_second: "fade_logo.png",
            text: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
            underline: "bg-gray-700",
            circle: "bg-gray-700",
            small_circle: "bg-gray-800",
        },
        {
            id: 5,
            name: "Zyanya Mondragon",
            profession: "Killer",
            img: "reyna.webp",
            img_second: "reyna_logo.png",
            text: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
            underline: "bg-purple-700",
            circle: "bg-purple-700",
            small_circle: "bg-purple-800",
        },
    ];

    // selecting items
    let agent_img = document.getElementById("agentimgID");
    let agent_logo = document.getElementById("agentlogoID");
    let name = document.getElementById("nameID");
    let profession = document.getElementById("professionID");
    let description = document.getElementById("textID");
    let prevBtn = document.getElementById("svg1");
    let nextBtn = document.getElementById("svg2");
    let randomBtn = document.getElementById("randomBtnID");
    let underline = document.getElementById("underlineID");
    let circle = document.getElementById("circleID");
    let small_circle = document.getElementById("smallcircleID");
    // i need funciton that removes all calsses of bg-..
    // because the circle colors are not overriding



    function removePrev(item, agents_color) {
        item.classList.remove("[*]")
    }

    // setting starting item
    let id = 0;

    // load first agent
    window.addEventListener("DOMContentLoaded", function() {
        const item = agents[id];

        agent_img.src = item.img;
        agent_logo.src = item.img_second;
        name.textContent = item.name;
        profession.textContent = item.profession;
        description.textContent = item.text;
        underline.style.backgroundColor = item.underline;
        circle.classList.add(item.circle);
        small_circle.classList.add(item.small_circle);
    })



    function showAgent(id) {
        const item = agents[id];

        agent_img.src = item.img;
        agent_logo.src = item.img_second;
        name.textContent = item.name;
        profession.textContent = item.profession;
        description.textContent = item.text;
        underline.classList.remove()
        underline.classList.add(item.underline)
        circle.classList.add(item.circle);
        small_circle.classList.add(item.small_circle);

    }

    prevBtn.addEventListener("click", function() {
        id--;
        if (id < 0) {id = agents.length - 1;}
        showAgent(id);
    })

    nextBtn.addEventListener("click", function() {
        id++;
        if (id > agents.length - 1) {id = 0;}
        showAgent(id);
    })

    randomBtn.addEventListener("click", function() {
        id = Math.floor(Math.random() * agents.length);
        showAgent(id);
    })

})();
