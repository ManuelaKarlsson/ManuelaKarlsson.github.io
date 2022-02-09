// text content
const about = Object.freeze({
    "textSwedish":
        "Jag går det sista året på Innovativ Programmering på Linköping Universitet. \
        Tidigare har jag gått tre år på en konstskola. Som person är jag ganska nördig och \
        nyfiken.",
    "textEnglish": "I am a third student of Innovative Programmming at Linköping University. \
        Earlier I have studied three years at an art school. As a person I am quite nerdy and curious.",
});

const programmingProjects = Object.freeze([
    {
        "headerSwedish": "StratEx",
        "headerEnglish": "StratEx",
        "shortDescriptionSwedish": "Skapandet av ett programeringsspråk",
        "shortDescriptionEnglish": "Creation of a programming language",
        "longDescriptionSwedish": "I en av de större kurserna inom Innovativ Programmering skulle vi skapa \
            ett eget programmeringsspråk med hjälp av Ruby. Jag gjorde ett dynamisk otypat interpreterat \
            objektorienterat språk med namnet StratEx (Strategy Execute). StratEx har \
            implementation för funktioner, klasser, rekursion, vanliga datatyper och har även en del \
            specialkommandon. Till språket gjorde jag en tillhörande prototyp till ett spel där man \
            kan skapa trupper och skicka dessa att assistera eller anfalla byar med hjälp av StratEx \
            specialkommandon. Med StratEx kan spelaren även automatisera en strategi i förväg så \
            att spelaren till exempel automatisk anfaller/assisterar en by vid en attack eller \
            andra triggers, eller bestämma en specifik tid en attack/assistans ska landa/skickas iväg. \
            Spelaren har även möjlighet att styra AIs beteende med en stratex-fil.",
        "longDescriptionEnglish": "In one of the larger courses in Innovative Programming we had as task \
            to create our own programming language with the help of Ruby. I made a dynamically untyped \
            interpreted object-oriented language named StratEx (Strategy Execute). StratEx has \
            implementation for functions, classes, recursion, common data types, and has also some \
            special commands. To the language I made an accompanying prototype for a game where you can \
            create troops and send them to assist or attack villages using StratEx's special commands. With \
            StratEx the player can also automate a strategy in advance so that the player, for example, \
            automatically attacks/assists a village in case of an attack or other triggers, or decide \
            a specific time an attack/assistance should land/be sent. The player also has the option to \
            control AI's behavior with a stratex file.",
        "madeByEnglish": "Me",
        "madeBySwedish": "Mig",
        "image": "stratex_01.png",
        "techniques": "Ruby",
        "images": ["stratex_01.png"],
    },
    {
        "headerSwedish": "Transportliggare",
        "headerEnglish": "Transport",
        "shortDescriptionSwedish": "Ett projekt åt ett transportbolag",
        "shortDescriptionEnglish": "A project for a transport company",
        "longDescriptionSwedish": "Ett transportbolag efterfrågade en applikation där transportledare kunde planera \
            körningar och busschaufförer se sina körningar i en kalender. Applikationen skulle även hålla koll på fordon \
            och felanmälningar på dessa och ha en personalsida med kontaktinformation, utbildningar, körkort etc. Jag och \
            fem klasskamrater gjorde en webbapplikation med Svelte, Node och MongoDB. Tre av oss (inklusive mig) fortsatte \
            med projektet över sommaren.",
        "longDescriptionEnglish": "A transport company requested an application where controllers could plan jobs and bus \
            drivers see their jobs in a calendar. The application would also keep track of vehicles and fault reports on \
            these and have a personnel page with contact information, training, driving licenses, etc. I and five classmates \
            made a web application with Svelte, Node and MongoDB. Three of us (including me) continued the project over the \
            summer",
        "madeByEnglish": "Me and five classmates, three of us (including me) continued with the project over the summer",
        "madeBySwedish": "Mig och fem klasskamrater, tre av oss (inkluderat mig) fortsatte med projektet över sommaren",
        "image": "transport_01.png",
        "techniques": "Javascript, Node, Svelte, MongoDB",
        "images": ["transport_01.png"],
    },
    {
        "headerSwedish": "Helvetet",
        "headerEnglish": "Hell",
        "shortDescriptionSwedish": "Ett spelprojekt",
        "shortDescriptionEnglish": "A game project",
        "longDescriptionSwedish": "I en projektkurs gjorde jag och en klasskamrat ett spel i C++ om \
            en olydig programmerare som har hamnat i helvetet. Spelet går ut på att fly helvetet \
            genom att klara sju banor. Målet med en bana är ta sig ut ur banans låsta dörr utan att bli skjuten \
            eller tagen av helvetets invånare. Endast Djävulsankan är dödlig, de andra varelserna kan spelaren \
            bara försöka undvika. ",
        "longDescriptionEnglish": "In a project course, me and a classmate made a game in C++ about a \
            disobedient programmer who has gone to hell. The game is about escaping hell \
            by completing seven level. The goal of a level is to get out of the level's locked door without being \
            shot or taken by the inhabitants of hell. Only Devil Duck is mortal, the other creatures of hell the \
            player can only try to avoid.",
        "madeByEnglish": "Me and a classmate (sprites are made by my classmate)",
        "madeBySwedish": "Mig och en klasskamrat (sprites är gjorda av min klasskamrat)",
        "image": "hell_01.png",
        "techniques": "C++, SFML",
        "images": ["hell_0.png"],
    },
    {
        "headerSwedish": "Inventory Manager",
        "headerEnglish": "Inventory Manager",
        "shortDescriptionSwedish": "Ett projekt åt Syncore Technologies",
        "shortDescriptionEnglish": "A project for Syncore Technologies",
        "longDescriptionSwedish": "Syncore Technologies efterfrågade ett automatiserat system att hålla koll på när \
            komponenters livscykelstatus ändras. Vi gjorde en webbapplikation med React och Node där man kan ladda upp BOMar som en \
            revision till ett projekt. Vid uppladdningen sparas komponenterna i BOMen ner i en sql-databas. Via \
            webbapplikationen kan användaren sedan köra en revision/projekt, körningen letar då upp alla komponenter \
            som revisionen/projektet innehåller och kollar statusen på dessa via api-anrop till Octoparts. Användaren \
            kan även skapa ett schema och välja när ett projekt ska köras automatiskt, \
            göra mejllistor där resultat av körningar skickas etc. ",
        "longDescriptionEnglish": "Syncore Technologies requested an automated system to keep track of when life cycle \
            statuses of components changes. We made a web application with React and Node where you can upload BOMs as a revision to a project.\
            During upload the components in the BOM are saved in a sql database. Via the web application the user can then\
            run a revision/project which will look up all the components the revision/project contains and check their \
            statuses via api requests to Octoparts. The user can also create a schedule and choose when a project should \
            be run automatically, make mailing lists where results of runs are sent etc.",
        "madeByEnglish": "Me and five classmates",
        "madeBySwedish": "Mig och fem klasskamrater",
        "image": "syncore_01.png",
        "techniques": "Typescript, Node, React, MySql",
        "images": ["syncore_01.png", "syncore_02.png"],
    },
    {
        "headerSwedish": "Socialt nätverk",
        "headerEnglish": "Social network",
        "shortDescriptionSwedish": "Ett socialt nätverk",
        "shortDescriptionEnglish": "A social network",
        "longDescriptionSwedish": "I en projektkurs gjorde jag och en klasskamrat ett socialt nätverk med Vue, Node och MongoDB. \
            Användarna kan söka andra användare, skriva/ta bort meddelanden, skicka/ångra vänförfrågningar och acceptera/avvisa \
            dessa. Vi lärde oss om krypteringen av lösenord, autentisering med hjälp av tokens och sanering av data som har \
            skickats till servern. ",
        "longDescriptionEnglish": "In a project course, a classmate and I created a social network with Vue, Node and MongoDB. \
            Users can search for other users, write/delete messages, send/undo friend requests and accept/reject these. We \
            learned about password encryption, tokens authentication and sanitation of data that has been sent to the server.",
        "madeByEnglish": "Me and a classmate",
        "madeBySwedish": "Mig och en klasskamrat",
        "techniques": "Javascript, Node, Vue, MongoDB",
        "image": "social_01.png",
        "images": ["social_01.png"],
    },
    {
        "headerSwedish": "Chatt",
        "headerEnglish": "Chat",
        "shortDescriptionSwedish": "En chatt",
        "shortDescriptionEnglish": "A chat",
        "longDescriptionSwedish": "I en projektkurs gjorde jag och en klasskamrat en chatt i C# med .NET där vi använde \
            designmönstret MVVM. Användaren i chatten kunde skicka chattförfrågningar till en viss ip eller välja att \
            lyssna och vänta på chattförfrågningar, chatta med flera användare samtidigt, skicka bilder eller skakningar \
            och se chatthistorik. Vi lärde oss mer om nätverk, om delegater, events etc. ",
        "longDescriptionEnglish": "In a project course a classmate and I made a chat in C # with .NET where we used the \
            design pattern MVVM. The user of the chat could send chat requests to a specific ip or choose to listen and wait \
            for chat requests, chat with several users at the same time, send pictures or shakes and view chat history. \
            We learned more about networks, delegates, events etc.",
        "madeByEnglish": "Me and a classmate",
        "madeBySwedish": "Mig och en klasskamrat",
        "techniques": "C#, .NET",
        "image": "chat_01.png",
        "images": ["chat_01.png"],
    }
]);

const artProjects = Object.freeze([
    {
        "headerSwedish": "Huvudvärk",
        "headerEnglish": "Headache",
        "image": "headache.jpg"
    },
    {
        "headerSwedish": "Svarta ögon",
        "headerEnglish": "Black eyes",
        "image": "dark_eyes.jpg"
    },
    {
        "headerSwedish": "Gammalt självporträtt",
        "headerEnglish": "Old self portrait",
        "image": "old_self_portrait.jpg"
    },
    {
        "headerSwedish": "Herr Grön",
        "headerEnglish": "Mister Green",
        "image": "mister_green.jpg"
    },
    {
        "headerSwedish": "Blått ljus",
        "headerEnglish": "Blue light",
        "image": "blue_light.jpg"
    },
    {
        "headerSwedish": "Klippa",
        "headerEnglish": "Rocks",
        "image": "rocks.jpg"
    },
    {
        "headerSwedish": "Fönster",
        "headerEnglish": "Window",
        "image": "window.jpg"
    },
    {
        "headerSwedish": "Konstnär",
        "headerEnglish": "Artist",
        "image": "artist.jpg"
    },
    {
        "headerSwedish": "Färger",
        "headerEnglish": "Colors",
        "image": "colors.jpg"
    },
    {
        "headerSwedish": "Dam",
        "headerEnglish": "Lady",
        "image": "lady.jpg"
    },
    {
        "headerSwedish": "Modell",
        "headerEnglish": "Model",
        "image": "model.jpg"
    },
    {
        "headerSwedish": "Staty",
        "headerEnglish": "Statue",
        "image": "statue.jpg"
    },
]);

// elements
const mainTitleElement = document.getElementById("main-title");
const loadingElement = document.getElementById("loading");
const aboutTitleElement = document.getElementById("about-title");
const aboutTextElement = document.getElementById("about-text");
const programmingTitleElement = document.getElementById("programming-title");
const bigProgrammingCard = document.getElementById("programming");
const artTitleElement = document.getElementById("art-title");
const bigArtCard = document.getElementById("art");
const modal = document.getElementById("myModal");
const modalContentWrapper = document.getElementById("modal-content-wrapper");
const closeButton = document.getElementById("close");
const languageSelection = document.getElementById("language");
let artContent; 
let programmingContent; 
let oldFocus = document.activeElement;

// enum
const ModalMode = Object.freeze({
    NONE: 0,
    PROGRAMMING: 1,
    ART: 2
});

// translations
const mainTitle = Object.freeze({Swedish: "Manuelas Portfolio", English: "Manuela's Portfolio"});
const titleProgramming = Object.freeze({Swedish: "Programmering",  English: "Programming"});
const titleArt = Object.freeze({Swedish: "Konst",  English: "Art"});
const titleAbout = Object.freeze({Swedish: "Om mig",  English: "About me"});
const techniques = Object.freeze({Swedish: "Tekniker",  English: "Techniques"});
const madeBy = Object.freeze({Swedish: "Gjord av",  English: "Made by"});

// settings
const artFolder = "./art_images/";
const programmingFolder = "./programming_images/";

// state
let currentLanguage = "Swedish";
let currentModalMode = ModalMode.NONE;
let projectIndex = 0

// functions
function insertProgrammingProjects() {
    programmingContent = document.createElement("div");
    programmingContent.id = "programming-content";

    for (let i = 0; i < programmingProjects.length; ++i) {
        const button = document.createElement("button");
        button.classList.add("card-button");

        const tag = document.createElement("div");
        tag.classList.add("programming-card");
        const imagePath = programmingFolder + getSmallImageName(programmingProjects[i].image);
        addHeaderAndImageToTag(tag, programmingProjects[i][`header${currentLanguage}`], imagePath);

        const description = document.createElement("p");
        description.classList.add("max-width");
        description.textContent = programmingProjects[i][`shortDescription${currentLanguage}`];
        tag.appendChild(description);
        
        button.appendChild(tag);
        button.onclick = function () {
            if(currentModalMode === ModalMode.NONE){
                setModalProgramming(programmingProjects[i], i);
                return false;
            }
        };

        programmingContent.appendChild(button);
    }
    bigProgrammingCard.appendChild(programmingContent);
}

function getSmallImageName(image){
    const imageNameArray = image.split(".");
    return `${imageNameArray[0]}_small.${imageNameArray[1]}`;
}

function insertArtProjects() {
    artContent = document.createElement("div");
    artContent.id = "programming-content";

    for (let i = 0; i < artProjects.length; ++i) {
        const button = document.createElement("button");
        button.classList.add("card-button", "art-card-button");
        
        const tag = document.createElement("div");
        tag.classList.add("art-card");

        const imagePath = artFolder + getSmallImageName(artProjects[i].image);
        addHeaderAndImageToTag(tag, artProjects[i][`header${currentLanguage}`], imagePath);

        button.appendChild(tag);
        button.onclick = function () {
            if(currentModalMode === ModalMode.NONE){
                setModalArt(artProjects[i], i);
            }
        };
        
        artContent.appendChild(button);
    }
    bigArtCard.appendChild(artContent);
}

function addHeaderAndImageToTag(tag, text, imagePath) {
    const header = document.createElement("h3");
    const headerText = document.createTextNode(text);
    header.classList.add("max-width");
    header.appendChild(headerText);
    tag.appendChild(header);

    const img = document.createElement("img");
    img.src = imagePath;
    img.classList.add("max-width");
    tag.appendChild(img);
}

function addBigHeaderAndImageToContent(tag, text, imagePath, isBorderedImage = false) {
    return new Promise(resolve => {
        const windowWidth = window.innerWidth;
        const imageWidthNumber = windowWidth < 500 ? windowWidth - 64: Math.round(windowWidth * 0.75);
        const imageWidth = `${windowWidth < 500 ? windowWidth - 64: Math.round(windowWidth * 0.75)}px`;   
        const header = document.createElement("h2");
        header.id = "modal-header";
        header.classList.add("modal-resize");
        const headerText = document.createTextNode(text);
        header.appendChild(headerText);
        header.style.maxWidth = imageWidth;
        tag.appendChild(header);

        const img = document.createElement("img");
        img.src = imagePath;
        img.classList.add("modal-resize");

        img.onload = function () {
            if(windowWidth < 500){
                const scaleFactor = imageWidthNumber / img.naturalWidth;
                const imageHeightNumber = Math.round(scaleFactor * img.naturalHeight);
                img.style.width = imageWidth;
                img.style.height = `${imageHeightNumber}px`;
            } else{  
                img.style.maxWidth = imageWidth;
            }
            tag.style.maxWidth = img.naturalWidth > imageWidthNumber ? imageWidth : `${img.naturalWidth}px`;
            if (isBorderedImage) {
                img.classList.add("border");
            }
            resolve();
        }
        tag.appendChild(img);
    });
}

async function setSize() {
    const windowWidth = window.innerWidth;
    const emptySpace = Math.round((windowWidth / 10) * 1.4);
    const bigCardWidth = `${Math.round((windowWidth - emptySpace) / 2)}px`;
    bigProgrammingCard.style.maxWidth = bigCardWidth;
    bigArtCard.style.maxWidth = bigCardWidth;

    if(currentModalMode !== ModalMode.NONE){
        const oldContent = document.getElementById("unique");

        switch(currentModalMode){
            case ModalMode.ART:
                modalContentWrapper.replaceChild(await createModalArtContent(artProjects[projectIndex]), oldContent);
                break;
            case ModalMode.PROGRAMMING:
                modalContentWrapper.replaceChild(await createModalProgrammingContent(programmingProjects[projectIndex]), oldContent);
                break;
            default:
                break;
        }
    }
}

function changeLanguage() {
    setBigHeadersAndAbout();
    
    for (let i = 0; i < programmingContent.children.length; ++i) {
        const programmingProjectTitle = programmingContent.children[i].children[0].children[0];
        programmingProjectTitle.innerHTML = programmingProjects[i][`header${currentLanguage}`];

        const programmingProjectShortDescription = programmingContent.children[i].children[0].children[2];
        programmingProjectShortDescription.innerHTML = programmingProjects[i][`shortDescription${currentLanguage}`];
    }
    
    for (let i = 0; i < artContent.children.length; ++i) {
        const artProjectTitle = artContent.children[i].children[0].children[0];
        artProjectTitle.innerHTML = artProjects[i][`header${currentLanguage}`];
    }
}

function insertLabelAndText(element, label, text){
    const wrapper = document.createElement("p");
    wrapper.classList.add("flex");
    insertBoldLabel(wrapper, `${label}: `);
    const textContainer = document.createElement("p");
    textContainer.classList.add("no-margin");
    textContainer.textContent = text;
    wrapper.appendChild(textContainer);
    element.appendChild(wrapper);
}

function setBigHeadersAndAbout(){
    mainTitleElement.textContent = mainTitle[currentLanguage];
    aboutTitleElement.textContent = titleAbout[currentLanguage];
    aboutTextElement.textContent = about[`text${currentLanguage}`];
    programmingTitleElement.textContent = titleProgramming[currentLanguage];
    artTitleElement.textContent = titleArt[currentLanguage];
}

async function createModalProgrammingContent(project){
    const content = document.createElement("div");
    content.id = "unique";
    await addBigHeaderAndImageToContent(content, project[`header${currentLanguage}`], programmingFolder + project.image, true);

    insertLabelAndText(content, techniques[currentLanguage], project.techniques);
    insertLabelAndText(content, madeBy[currentLanguage], project[`madeBy${currentLanguage}`]);

    const pLongDescription = document.createElement("p");
    pLongDescription.textContent = project[`longDescription${currentLanguage}`];
    pLongDescription.classList.add("long-description");
    content.appendChild(pLongDescription);

    return content;
}

async function setModalProgramming(project, index) {
    oldFocus = document.activeElement;
    modalContentWrapper.appendChild(await createModalProgrammingContent(project));
    projectIndex = index;
    currentModalMode = ModalMode.PROGRAMMING;
    modal.style.display = "block";
}

async function createModalArtContent(project){
    const content = document.createElement("div");
    content.id = "unique";
    await addBigHeaderAndImageToContent(content, project[`header${currentLanguage}`], artFolder + project.image);
    return content;
}

async function setModalArt(project, index) {
    oldFocus = document.activeElement;
    modalContentWrapper.appendChild(await createModalArtContent(project));
    projectIndex = index;
    currentModalMode = ModalMode.ART;
    modal.style.display = "block";
}

function insertBoldLabel(element, labelText) {
    const boldLabel = document.createElement("span");
    boldLabel.classList.add("label");
    boldLabel.textContent = labelText;
    element.appendChild(boldLabel);
}

function closeModal(){
    modal.style.display = "none";
    const modalContent = document.getElementById('unique');
    modalContent.remove();
    projectIndex = 0;
    currentModalMode = ModalMode.NONE;
    oldFocus.focus();
}

// events
closeButton.onclick = function () {
    closeModal();
}

document.onkeydown = function (event) {
    if(event.key == "Tab" && currentModalMode !== ModalMode.NONE){
        closeButton.focus();
        return false;
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

window.addEventListener('resize', setSize);

languageSelection.addEventListener("change", function () {
    if (languageSelection.value !== currentLanguage) {

        if( programmingContent === undefined || artContent !== undefined){
            setTimeout(500);
        }

        currentLanguage = languageSelection.value;
        changeLanguage();
    }
});

// initialization
setSize();
setBigHeadersAndAbout();
insertProgrammingProjects();
insertArtProjects();