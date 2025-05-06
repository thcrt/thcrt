const quote = document.getElementById("quote");

const quotes = [
    
    // Poems
    "style is the answer to everything.",                                                           // Style                                        Charles Bukowski
    "a dangerous thing with style is what i call art.",                                             // Style                                        Charles Bukowski
    "do not go gentle into that good night.",                                                       // Do not go gentle into that good night        Dylan Thomas
    
    // Movies and TV
    "five is right out.",                                                                           // Monty Python and the Holy Grail
    "nobody expects the spanish inquisition!",                                                      // Monty Python's Flying Circus
    "tea. earl gray. hot.",                                                                         // Star Trek
    "there is no try.",                                                                             // Star Wars
    "that's no moon.",                                                                              // Star Wars
    "oh hi mark.",                                                                                  // The Room
    "as you wish.",                                                                                 // The Princess Bride
    "take the cannoli.",                                                                            // The Godfather
    "not great, not terrible.",                                                                     // Chernobyl

    // Games
    "you must construct additional pylons.",                                                        // StarCraft II
    "removed herobrine.",                                                                           // Minecraft
    "everything not saved will be lost.",                                                           // Various Nintendo games
    "i am fond of pigs.",                                                                           // Civilization 6
    "up up down down left right b a start",                                                         // Konami
    "the game was rigged from the start.",                                                           // Fallout: New Vegas
    
    // Books
    "don't panic.",                                                                                 // The Hitchhiker's Guide to the Galaxy         Douglas Adams
    "so long, and thanks for all the fish.",                                                        // The Hitchhiker's Guide to the Galaxy         Douglas Adams
    
    // Music
    "show life the flyest version of you.",                                                         // OK - Cool - Aight                            Shermanology
    "let's dance again, shall we?",                                                                 // Baxter (These are My Friends)                Fred again..
    "everybody has different things, you don't even know!",                                         // Diana (You Don't Even Know)                  Fred again..
    "ahora todo va.",                                                                               // Ahora Todo Va                                Dennis Cruz
    "don't be shocked by the tone of my voice.",                                                    // Weapon of Choice                             Fatboy Slim
    "walk without rhythm. it won't attract the worm.",                                              // Weapon of Choice                             Fatboy Slim
    "tooting the boris.",                                                                           // Who's Got The Bag                            The Streets
    "new dorp, new york.",                                                                          // NEW DORP. NEW YORK                           SBTRKT
    "gargoyles garglin' oil.",                                                                      // NEW DORP. NEW YORK                           SBTRKT
    "people are moving now.",                                                                       // Metronome                                    Manicured Noise
    "barbara streisand.",                                                                           // Barbara Streisand                            Duck Sauce
    "it's this one thing that got me trippin'.",                                                    // 1 Thing                                      Amerie
    "it's this one thing you did.",                                                                 // 1 Thing                                      Amerie
    "meet me at the afterparty.",                                                                   // AfterParty                                   GEE LEE
    "dem can't see mi face, balaclava.",                                                            // Balaclava                                    SHY FX
    "black outfit to match the balaclava.",                                                         // Balaclava                                    SHY FX
    "never yet falter, never yet flop.",                                                            // Make It Bun Dem                              Skrillex
    "you got to pump it up.",                                                                       // Pump It Up                                   Endor
    "the sharif don't like it.",                                                                    // Rock the Casbah                              The Clash
    "they do the sun dance, don'tcha know?",                                                        // Walk Like an Egyptian                        The Bangles
    "pleased to meet you, hope you guessed my name.",                                               // Sympathy for the Devil                       The Rolling Stones
    "it's a gas, gas, gas.",                                                                        // Jumpin' Jack Flash                           The Rolling Stones
    "but where i live, the game to play is compromise solution.",                                   // Street Fighting Man                          The Rolling Stones
    "i could not forsee this thing happening to you.",                                              // Paint It, Black                              The Rolling Stones
    "black as night, black as coal.",                                                               // Paint It, Black                              The Rolling Stones
    "gonna break my rusty cage and run.",                                                           // Rusty Cage                                   Johnny Cash
    "i'm burning diesel, burning dinosaur bones.",                                                  // Rusty Cage                                   Johnny Cash
    "there is a house in new orleans.",                                                             // House of the Rising Sun                      The Animals
    "letting the days go by.",                                                                      // Once in a Lifetime                           Talking Heads
    "and you may ask yourself: how did i get here?",                                                // Once in a Lifetime                           Talking Heads
    "behind the wheel of a large automobile.",                                                      // Once in a Lifetime                           Talking Heads
    "another day older, and deeper in debt.",                                                       // Sixteen Tons                                 Tennessee Ernie Ford
    "gold on the ceiling.",                                                                         // Gold on the Ceiling                          The Black Keys
    "and don'tcha come back no more.",                                                              // Hit the Road Jack                            Ray Charles
    "un-re-route the rivers.",                                                                      // Liquid Spirit                                Gregory Porter
    "the revolution will not be televised.",                                                        // The Revolution Will Not Be Televised         Gil Scott-Heron
    "it's the london to brighton line.",                                                            // The Brighton Line                            The Craze
    "bamboleo.",                                                                                    // Bamboleo                                     Gipsy Kings
    "habla con la luna, habla con la playa.",                                                       // El Pescador                                  Totó La Momposina
    "ámame por siempre, sé mi gran amor.",                                                          // Blue Berries                                 Sem Jacobs
    "una poca de gracia.",                                                                          // La Bamba
    "canta y no llores.",                                                                           // Cielito Lindo
    "cuatro paquetes de sal.",                                                                      // 4 Paquetes De Sal
    "it rains, it pours.",                                                                          // Praise The Lord (Da Shine)                   A$AP Rocky    
    "gotta get down on friday.",                                                                    // Friday                                       Rebecca Black
    "egal wer kommt, egal wer geht.",                                                               // Gewinner                                     Clueso
    "and instead i pour the milk.",                                                                 // Tom's Diner                                  Suzanne Vega
    "so wollt dein sohn doch leben.",                                                               // Kein Problem                                 Apache 207
    "oh, my love, my lover. i belong to you.",                                                      // Я Люблю Тебя                                 Rauf & Faik
    "ich will noch'n bisschen tanzen.",                                                             // Nein, Mann!                                  Laserkraft 3D
    "power to the people that struggle every day.",                                                 // One For The Trouble                          A.D.O.R.
    "back once again for the renegade master.",                                                     // One For The Trouble                          A.D.O.R.
    "you better not run, cause the siren's not coming for you.",                                    // Blue Lights                                  Jorja Smith
    "it's the little things that get me high.",                                                     // Little Things                                Jorja Smith
    "make it funky.",                                                                               // Make It Funky                                James Brown
    "drive that funky soul.",                                                                       // People Get Up and Drive Your Funky Soul      James Brown
    "hunt the hare, and turn her down the rocky road.",                                             // The Rocky Road to Dublin
    "and all the ways to dublin.",                                                                  // The Rocky Road to Dublin
    "come out, ye black and tans.",                                                                 // Come Out Ye Black and Tans                   The Wolfe Tones
    "all on that day.",                                                                             // Sinnerman                                    Nina Simone
    "oh, sinnerman, where you gonna run to?",                                                       // Sinnerman                                    Nina Simone
    "so i ran to the devil, he was waiting.",                                                       // Sinnerman                                    Nina Simone
    "i don't want no scrub.",                                                                       // No Scrubs                                    TLC
    "from africa to japan.",                                                                        // Elevator Man Reprise                         Liam Mockridge
    "she take me money and run venezuela.",                                                         // Matilda                                      Harry Belafonte
    "my barn, my rules.",                                                                           // My Barn My Rules                             horsegiirL
    "magic fingers through my hair.",                                                               // Lovefingers                                  Silver Apples
    
    // Quotations
    "and plummeted sixteen feet through an announcer's table.",                                     // u/shittymorph
    "be water, my friend.",                                                                         // Bruce Lee
    "now watch this drive.",                                                                        // George W Bush
    "there are 15 competing standards.",                                                            // XKCD 927
    "correct horse battery staple.",                                                                // XKCD 936
    "i was crazy once.",                                                                            // Internet copypasta
    "[citation needed]",                                                                            // Wikipedia
    "on the internet, nobody knows you're a dog.",                                                  // The New Yorker
    "habicht hat 2 h!",                                                                             // Max Schradin

    // Misc
    "give me ASCII or give me deaþ!",
    "as seen on tv!",
    "not my circus, not my monkeys.",
    "eat pasta. run fasta.",
    "i use arch btw.",
    "this website works best in %%browser%%.",
    "<script>alert('pwned')</script>",
    "pwned');DROP TABLE quotes;--",
    "real programmers use %%editor%%!",
    
    // Acknowledgements
    "siamo tutti antifascisti.",
    "thanks, %%thanks%%.",
    "hi, %%friend%%!",
    "hey, %%friend%%!",
    "%%friend%% is pretty cool!",
    "sponsored by %%friend%%.",
    ":;",
]

const replacements = {
    "friend": [
        "mum",
        "soft",
        "patya",
        "mia",
        "gavi",
        "merlin",
        "healyn",
        "max",
        "linus",
        "schratze",
        "jae",
        "rachel",
        "elle",
        "sophia",
        "bhakti",
        "durian",
        "hex",
        "w",
        "tillian",
        "lime",
        "jackdaw",
        "nicole",
        "samir",
        "fops",
        "ersei",
        "sam",
        "phii",
        "lena",
        "mayo",
        "starwall",
        "sid",
        "lesa",
        "finn",
        "katie"
    ],
    "thanks": [
        "mum",
        "4censord",
        "flisk"
    ],
    "editor": [
        "vim",
        "emacs",
        "nano",
        "micro",
        "Codium",
        "ed"
    ],
    "browser": [
        "firefox",
        "internet explorer 9",
        "netpositive",
        "netscape navigator",
        "safari 5.1.7 for windows",
        "the nintendo ds browser"
    ]
}


function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function updateQuote() {
    let newQuote = randomChoice(quotes);
    for (const replacement in replacements) {
        newQuote = newQuote.replaceAll(`%%${replacement}%%`, randomChoice(replacements[replacement]))
    }
    if ((quote.innerText === newQuote) && (quote.innerText.includes("%%"))) {
        newQuote = "wow, that's rare!";
    }
    quote.innerText = newQuote;
}

updateQuote();
quote.addEventListener("click", updateQuote);
