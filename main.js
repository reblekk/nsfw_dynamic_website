//const axios = require('axios')








getUser();
async function getUser() {
    let __image, __detect;
    let __storage = [
        "/r/realgirls",
        "/r/2busty2hide",
        "/r/milf",
        "/r/theratio",
        "/r/SexyTummies",
        "/r/fitgirls",
        "/r/legalteens",
        "/r/collegesluts",
        "/r/adorableporn",
        "/r/legalteensXXX",
        "/r/gonewild18",
        "/r/18_19",
        "/r/just18",
        "/r/PornStarletHQ",
        "/r/fauxbait",
        "/r/barelylegalteens",
        "/r/milf",
        "/r/gonewild30plus",
        "/r/realmoms",
        "/r/agedbeauty",
        "/r/maturemilf",
        "/r/nsfw",
        "/r/nsfw2",
        "/r/bonermaterial",
        "/r/nsfw411",
        "/r/iWantToFuckHer",
        "/r/exxxtras",
        "/r/distension",
        "/r/bimbofetish",
        "/r/christiangirls",
        "/r/dirtygaming",
        "/r/sexybutnotporn",
        "/r/femalepov",
        "/r/omgbeckylookathiscock",
        "/r/sexygirls",
        "/r/breedingmaterial",
        "/r/canthold",
        "/r/toocuteforporn",
        "/r/justhotwomen",
        "/r/stripgirls",
        "/r/uncommonposes",
        "/r/gifsofremoval",
        "/r/truefmk",
        "/r/nudes",
        "/r/slut",
        "/r/homemadexxx",
        "/r/dirtypenpals",
        "/r/FestivalSluts",
        "/r/CollegeAmateurs",
        "/r/amateurcumsluts",
        "/r/nsfw_amateurs",
        "/r/funwithfriends",
        "/r/randomsexiness",
        "/r/amateurporn",
        "/r/normalnudes",
        "/r/irlgirls",
        "/r/verifiedamateurs",
        "/r/NSFWverifiedamateurs",
        "/r/GoneWild",
        "/r/PetiteGoneWild",
        "/r/gonewildstories",
        "/r/GoneWildTube",
        "/r/treesgonewild",
        "/r/gonewildaudio",
        "/r/GWNerdy",
        "/r/gonemild",
        "/r/altgonewild",
        "/r/gifsgonewild",
        "/r/analgw",
        "/r/gonewildsmiles",
        "/r/onstageGW",
        "/r/RepressedGoneWild",
        "/r/bdsmgw",
        "/r/UnderwearGW",
        "/r/LabiaGW",
        "/r/TributeMe",
        "/r/WeddingsGoneWild",
        "/r/assholegonewild",
        "/r/leggingsgonewild",
        "/r/dykesgonewild",
        "/r/goneerotic",
        "/r/gonwild",
        "/r/ratemynudebody",
        "/r/gonewild30plus",
        "/r/gonewild18",
        "/r/onmww",
        "/r/40plusgonewild",
        "/r/gonewildcurvy",
        "/r/GoneWildplus",
        "/r/BigBoobsGW",
        "/r/bigboobsgonewild",
        "/r/mycleavage",

        //ass related
        "/r/ass",
        "/r/asstastic",
        "/r/facedownassup",
        "/r/assinthong",
        "/r/bigasses",
        "/r/buttplug",
        "/r/TheUnderbun",
        "/r/booty",
        "/r/pawg",
        "/r/paag",
        "/r/cutelittlebutts",
        "/r/hipcleavage",
        "/r/frogbutt",
        "/r/HungryButts",
        "/r/lovetowatchyouleave",
        "/r/celebritybutts",
        "/r/cosplaybutts",
        "/r/whooties",
        "/r/booty_queens",
        "/r/twerking",

        '/r/boobies',
        '/r/TittyDrop',
        '/r/boltedontits',
        '/r/boobbounce',
        '/r/boobs',
        '/r/downblouse',
        '/r/homegrowntits',
        '/r/cleavage',
        '/r/breastenvy',
        '/r/youtubetitties',
        '/r/torpedotits',
        '/r/thehangingboobs',
        '/r/page3glamour',
        '/r/fortyfivefiftyfive',
        '/r/tits',
        '/r/amazingtits',
        '/r/titstouchingtits',

        '/r/BustyPetite',
        '/r/hugeboobs',
        '/r/stacked',
        '/r/burstingout',
        '/r/BigBoobsGW',
        '/r/bigboobsgonewild',
        '/r/2busty2hide',
        '/r/bigtiddygothgf',
        '/r/engorgedveinybreasts',
        '/r/bigtitsinbikinis',
        '/r/biggerthanherhead',

        '/r/pussy',
        '/r/rearpussy',
        '/r/innie',
        '/r/simps',
        '/r/pelfie',
        '/r/LabiaGW',
        '/r/godpussy',
        '/r/presenting',
        '/r/cameltoe',
        '/r/hairypussy',
        '/r/pantiestotheside',
        '/r/breakingtheseal',


        '/r/curvy',
        '/r/gonewildplus',
        '/r/thick',
        '/r/juicyasians',
        '/r/voluptuous',
        '/r/biggerthanyouthought',
        '/r/jigglefuck',
        '/r/chubby',
        '/r/SlimThick',
        '/r/massivetitsnass',
        '/r/thicker',
        '/r/thickthighs',
        '/r/tightsqueeze',
        '/r/casualjiggles',
        '/r/bbw',
        '/r/gonewildchubby',
        '/r/amazingcurves',

        '/r/fitgirls',
        '/r/fitnakedgirls',

        '/r/celebnsfw',
        '/r/WatchItForThePlot',
        '/r/nsfwcelebarchive',
        '/r/celebritypussy',
        '/r/oldschoolcoolNSFW',
        '/r/extramile',
        '/r/jerkofftocelebs',
        '/r/celebritybutts',
        '/r/onoffcelebs',
        '/r/celebswithbigtits',
        '/r/youtubersgonewild',

        '/r/cumsluts',
        '/r/GirlsFinishingTheJob',
        '/r/cumfetish',
        '/r/amateurcumsluts',
        '/r/cumcoveredfucking',
        '/r/cumhaters',
        '/r/thickloads',
        '/r/before_after_cumsluts',
        '/r/pulsatingcumshots',
        '/r/impressedbycum',

        '/r/creampies',
        '/r/throatpies',
        '/r/FacialFun',
        '/r/cumonclothes',
        '/r/oralcreampie',
        '/r/creampie',

        '/r/AsianHotties',
        '/r/AsiansGoneWild',
        '/r/realasians',
        '/r/AsianNSFW',
        '/r/nextdoorasians',
        '/r/asianporn',
        '/r/bustyasians',
        '/r/paag',

        '/r/ginger',
        '/r/redheads',

        '/r/palegirls',
        '/r/pawg',
        '/r/snowwhites',
        '/r/whooties',

        '/r/twingirls',
        '/r/groupofnudegirls',
        '/r/Ifyouhadtopickone',

        '/r/lesbians',
        '/r/StraightGirlsPlaying',
        '/r/girlskissing',
        '/r/mmgirls',
        '/r/dykesgonewild',
        '/r/justfriendshavingfun',

        '/r/holdthemoan',
        '/r/O_faces',
        '/r/jilling',
        '/r/gettingherselfoff',
        '/r/quiver',
        '/r/GirlsHumpingThings',
        '/r/forcedorgasms',
        '/r/mmgirls',
        '/r/ruinedorgasms',
        '/r/realahegao',

        '/r/suctiondildos',
        '/r/baddragon',

        '/r/grool',
        '/r/squirting',

        '/r/OnOff',
        '/r/nsfwoutfits',
        '/r/girlswithglasses',
        '/r/collared',
        '/r/seethru',
        '/r/sweatermeat',
        '/r/cfnm',
        '/r/nsfwfashion',
        '/r/leotards',
        '/r/whyevenwearanything',
        '/r/shinyporn',
        '/r/gothsluts',

        '/r/bikinis',
        '/r/bikinibridge',
        '/r/bigtitsinbikinis',

        '/r/nsfwcosplay',
        '/r/nsfwcostumes',
        '/r/girlsinschooluniforms',

        '/r/WtSSTaDaMiT',
        '/r/tightdresses',
        '/r/upskirt',
        '/r/SchoolgirlSkirts',

        '/r/stockings',
        '/r/thighhighs',
        '/r/leggingsgonewild',

        // Pants/Shorts
        '/r/tightshorts',
        '/r/tight_shorts',

        '/r/girlsinyogapants',
        '/r/yogapants',

        // Underwear
        '/r/lingerie',
        '/r/pantiestotheside',

        // Thongs
        '/r/assinthong',
        '/r/AssholeBehindThong',

        '/r/realsexyselfies',
        '/r/nude_selfie',

        '/r/Hotchickswithtattoos',
        '/r/sexyfrex',
        '/r/tanlines',
        '/r/oilporn',
        '/r/ComplexionExcellence',

        '/r/moundofvenus',
        '/r/pussymound',

        '/r/SexyTummies',
        '/r/theratio',
    ]

    __storage = __storage.sort(() => Math.random() - 0.5);
    __starting_point = Math.floor(Math.random() * __storage.length);
    console.log(__storage.length)
    for (j = __starting_point; j < __storage.length; j++) {
        let __subreddit = __storage[j]
        try {
            const response = await axios.get('https://www.reddit.com' + __subreddit + '/hot.json');
            __detect = response.data.data.children.length
            console.log(__detect)


            for (i = 0; i < __detect; i++) {
                __image = response.data.data.children[i].data.url



                if (__image.includes("jpg" || "jpeg" || "png" || "gif")) {
                    var div = document.createElement('div');
                    document.getElementById("div").appendChild(div);

                    var img = document.createElement('img');
                    img.src = __image
                    img.className = "img-fluid img-thumbnail rounded"
                    img.style = "width:100%"
                    div.appendChild(img);


                }

            }
        } catch (error) {
            console.error(error);
        }
    }
    for (j = __starting_point - 1; j >= 0; j--) {
        let __subreddit = __storage[j]
        try {
            const response = await axios.get('https://www.reddit.com' + __subreddit + '/hot.json');
            __detect = response.data.data.children.length
            console.log(__detect)


            for (i = 0; i < __detect; i++) {
                __image = response.data.data.children[i].data.url



                if (__image.includes("jpg" || "jpeg" || "png" || "gif")) {
                    var div = document.createElement('div');
                    document.getElementById("div").appendChild(div);

                    var img = document.createElement('img');
                    img.src = __image
                    img.className = "img-fluid img-thumbnail rounded"
                    img.style = "width:100%"
                    div.appendChild(img);
                }

            }
        } catch (error) {
            console.error(error);
        }
    }

}