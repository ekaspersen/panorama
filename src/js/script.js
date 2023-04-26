import "../input.css";

const animateButton = document.getElementById("animate-button");
const overlay = document.getElementById("overlay");
const messageBox = document.getElementById("messageBox");
const closeButton = document.getElementById("close-button");
const body = document.body;

animateButton.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    messageBox.classList.remove("hidden");
    body.style.height = "100vh";
    body.classList.add("overflow-hidden");
});

closeButton.addEventListener("click", () => {
    overlay.classList.add("hidden");
    messageBox.classList.add("hidden");
    body.style.height = "";
    body.classList.remove("overflow-hidden");
});

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    messageBox.classList.add("hidden");
    body.style.height = "";
    body.classList.remove("overflow-hidden");
});

const navigation = document.getElementById("navigation");
const omOss = document.getElementById("omOss");
const meny = document.getElementById("meny");
const infoModalCtAp = document.getElementById("infoModalCtAp");
const infoModalCtAh2 = document.getElementById("infoModalCtAh2");
const messageBoxContent = document.getElementById("messageBoxContent");
const kontakt = document.getElementById("kontakt");
const languagePrompt = document.getElementById("languagePrompt");
languagePrompt.addEventListener("click", () => {
    if (languagePrompt.innerHTML === "ENG") {
        languagePrompt.innerHTML = "NOR";
        infoModalCtAp.innerHTML = "From April 1st to Mai 31th";
        infoModalCtAh2.innerHTML = "2 hours Free parking when you dine with us";
        animateButton.innerHTML = "More information";
        messageBoxContent.innerHTML = `
                <div class=" bg-primary_clr-dark bg-opacity-40 flex flex-col gap-4 p-8 sm:rounded-2xl">
                    <p class="text-primary_clr-light font-semibold text-xl">Free parking when you dine with us</p>
                    <p class="text-primary_clr-light">Panorama Restaurant &amp; -bar offers 2 hours of free parking
                        between 16.00 - 24.00 in April and May.</p>
                    <p class="text-primary_clr-light"><span class="font-semibold">The offer is valid</span> for those
                        who park at Sørenga parking garage and dine at our restaurant.</p>
                    <p class="text-primary_clr-light"><span class="font-semibold">To get free parking</span>, simply
                        register with a tablet at our restaurant upon arrival.</p>
                </div>
        `;
        navigation.innerHTML = `
            <div
                class="w-full sm:flex-wrap sm:mx-auto my-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-l">
                <a href="#meny"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    menu
                </a>

                <a href="https://book.easytablebooking.com/book/?id=8d940&lang=auto" target="_blank"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    booking
                </a>
                <a href="#omOss"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    about us
                </a>
                <a href="#kontakt"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    contact
                </a>
            </div>
        `;
        omOss.innerHTML = `
        <div
                class="w-fit mx-auto sm:mr-0 p-5 sm:p-10 sm:pr-20 my-auto place-items-center z-50 bg-primary_clr-dark bg-opacity-70 text-primary_clr-light">
                <div class="flex flex-col max-w-[326px] gap-4">
                    <h2 class="text text-[42px]">More about us ...</h2>
                    <p class="">
                        Panorama restaurant is perfectly located at Sørenga, a beatiful view made of Barcode, Langkaia
                        and
                        Oslofjorden. We serve grill and seafood with flavors from the Mediterranean.
                    </p>
                    <p>
                        The restaurant has an exotic feel with palm trees, flames and a sea view that give a delightful
                        sense of vacation.
                    </p>
                    <p>
                        The decor is delicate and the atmosphere is warm. Here you can sit back and enjoy tasty food and
                        fantastic views.
                    </p>
                    <a href="https://book.easytablebooking.com/book/?id=8d940&lang=auto" target="_blank"
                        class="flex justify-center w-40 py-2 mt-4 uppercase border sm:hover:rounded-2xl transition-all"
                        style="border-color: white; color: white">Book table now</a>

                </div>
            </div>
        `;
        meny.innerHTML = `
        <h2 class="mx-2 sm:mx-5 mb-10 pt-20 font-bold text-4xl sm:text-5xl text-secondary-default">
                Menu
            </h2>
            <p class="mx-2 sm:mx-5  text-secondary-default font-semibold opacity-80">Allergens are listed at bottom.</p>
            <div class="flex flex-wrap text-secondary-default">

                <details id="starters"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Starters
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Oysters
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    3 pcs served with citron, shallots and vinegar.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergen: 14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Ceviche
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Halibut, mango, chili, coriander, lime and pomegranate.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergen: 1,2,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Scallops
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Mashed potatoes and celery with chili lobster sauce.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergen: 1,2,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Salmon Gremolada
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Homemade marinated salmon and gremolada.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergen: 1,3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    200<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Sauted argentinian scampi
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Argentinian scampi, garlic, persille and white wine.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    189<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Sauteed mussels in tomato
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Mussels, garlic, parsley, cherry tomato and frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    230<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Carpaccio
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Beef fillet, oilve oil, pinenuts, microgreens and cherry tomato confit.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    199<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    8. Vitelo Tonnato
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Roast beef served with tuna mayonnaise and capers.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,,3,4
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    9. Caprese
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Marinated fresh tomato, fresh borrata, basilikum, olive oil and olives.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    Antipasto Misto
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">2 eller 4 personer</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Truffle salami, spianata calabrese, serrano, mortadella, parmiggano, pecorino,
                                    manchego and gorgonzola.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    449/749<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>

                <details id="grill" open
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Grill
                    </summary>
                    <p class="font-semibold mb-5 opacity-60">(ALL MAIN COURSES ARE SERVED WITH SAUTÉED VEGETABLES AND
                        SAUCE)</p>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Duck teppanyaki
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Orange sauce, carrot purèe and micro greens.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    400<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Lamb carré
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Truffle and potatoe purée <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                   
                                </p>
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    420<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Beef tenderloin
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Roasted potatoes, seasonal veggies and micro greens. Choose between mushroom or red
                                    wine sauce.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    450<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Mix grill platter
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">Recommended for 2</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Half duck, half lamb carre, half beef tenderloin, chorizo and chorizo sauce.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    890<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Panorama burger
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Homemade beef burger, cheddar cheese, salad, cucumber and tomato. Served with Captain
                                    Morgan dressing, onion rings and frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,3,7,9,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Surf & turf
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Beef tenderloin tagliata, shrimps, frites, saral mix, truffle mayo and aioli.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,2,4,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    499<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Chicken Saltimbocca
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Chicken Breast wrapped in serrano ham and salvia.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    320<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    8. Côte de Boeuf
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Spanish beef, potato puree, roasted roman salad and red wine sauce. 
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 6,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    550<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    9. Solsikke Risotto
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">(Vegetar)</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Sunflower seeds, tomato, basil, feta cheese and mint.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    310<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
                <details id="Seafood"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Seafood
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Dorada
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Grilled fish with lemon butter sauce and mix salad.
                                </p>
                                <p class="text-xs opacity-60">
Allergy: 4,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    399<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Half lobster with season veggies
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Seasons veggies, parsley, micro greens and lobster sauce.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    455<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Wild Halibut
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Potatoe purée, caviar, micro greens and white wine sauce.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 4,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    469<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Wild Seafood Platter
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    One lobster, two crayfish, four king prawns and mussels.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    1600<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
              <details id="pasta"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Pasta
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. SEAFOOD LINGUINE
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Squid ink linguine with seafood mix, tomato sauce, garlic, parsley and wine.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,2,3,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    300<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. SEAFOOD RISOTTO
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Seafood mix, rice, garlic and wine.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    310<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Pasta Pollo
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Cream pesto, green beans and chicken.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Risotto 4 cheeses
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Pecorino, gorgonzola, parmiggiano and manchego.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Agnolotto ai porcini
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Ravioli with porcini and cheese, truffle oil and parmesan.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Antipasto misto
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Truffel salami, spianata calabrese, serrano, mortadella, parmigiano, pecorino, manchego and gorgonzola.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Sunflower Rissoto<span class="text-sm sm:text-base"> (Vegetarian)</span>
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Sunflower seeds, tomato, basil, feta cheese and mint.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </details>
                <details id="soups"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Soups
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Fish Soup
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Salmon and shrimp, celery root, sellery, carrot, garlic and maizena.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    189<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Mushroom Soup
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Mix mushroom and cream.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    169<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                    </details>

                <details id="barneMeny"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Children's Menu
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Spaghetti Bolognese
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Beef mince in tomato sauce and topped with parmesan.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. BURGER 100g
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Beef meat, cheese, dressing and frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Sausage w/pommes frites
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Grill sausage with pommes frites. Mayonnaise or ketchup.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>


                    </div>
                </details>

                <details id="salads"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Salads
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Season Salad
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Fresh vegetables
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    159<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Octopus Salad
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Octopus, citron, parsley, garlic, olive oil, celery and carrots.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Caesar Salad With Beef
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salad, cherry tomato, cucumber, crouton and Caesar dressing.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,3,4,6,10,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Caesar Salad With Chicken
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salad, bacon, cherry tomato, cucumber, crouton and Caesar dressing.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,3,4,6,10,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">

                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,4,6,10,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Caesar Salad With Shrimps
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salad, cherry tomato, cocumber and citronette.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Chevre salat
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Caremelized chevre with beetroot, soya beans, pomegranate, cherry tomato, walnuts
                                    and honey.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 6,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                </details>
                <details id="dessert"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Dessert
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. French Chocolate Truffon
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Cream, dark chocolate, meringue and ganache on top.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,2,3,4,7,8,12,13
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Chocolate Fondant with Ice Cream
                                </h3>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    149<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Cheesecake w/ passionfruit glaze
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Cream, cheese, vanilla and citron served with fresh berries.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergy: 1,2,3,6,7,9,10
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Panacota with raspberry sauce
                                </h3>
                                <p class="text-xs opacity-60">
                                    Allergy: 3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>

                </details>
                <details id="snacks" open
                    class="sm:w-md w-full bg-primary_clr rounded-lg gap-5 py-4 pl-[10px] lg:max-w-[473px] mx-2 sm:mx-5 my-4  sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default w-fit px-2 pb-1 select-none cursor-pointer">
                        Snacks
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 lg:max-w-[473px]">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col px-5 gap-2">
                                <div class="flex justify-between">
                                    <p class="font-bold capitalize text-lg sm:text-xl relative left-[-20px]">
                                        Marinated Olives
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        79<span class="text-xs">kr</span>
                                    </p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="font-bold capitalize text-lg sm:text-xl relative left-[-20px]">
                                        Nachos & Guacamole
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        139<span class="text-xs">kr</span>
                                    </p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="font-bold capitalize text-lg sm:text-xl relative left-[-20px]">
                                        Pickled parmesan in chili oil
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        159<span class="text-xs">kr</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                </details>
            </div>

            <P class="max-w-[442px] sm:w-md w-full text-primary_clr-light gap-5 pl-[10px] mx-2 sm:mx-5 my-4 sm:my-5">
                <span class="font-bold text-secondary-default">ALLERGENS:</span>
                <br>
                1. Cereals containing gluten, 2. Crustaceans, 3.Egg, 4. Fish, 6. Soya beans, 7. Milk,
                8. Nuts, 9.Celery, 10. Mustard, 11. Sesame seeds,12. Sulphur Dioxide, 13. Lupin 14. Molluscs
            </P>
        `;
        kontakt.innerHTML = `
        <div class="flex-col flex w-full lg:border-b lg:border-primary_clr-light">
            <h3 class="text-primary_clr-light text-2xl lg:text-4xl text-center">
                Panorama Restaurant
            </h3>
            <a id="adress" target="_blank"
                href="https://www.google.com/maps/place/Panorama+Restaurant/@59.9017113,10.7201153,13z/data=!4m9!1m2!2m1!1spanorama+s%C3%B8renga!3m5!1s0x46416f591d689f67:0xf70091e7114a007d!8m2!3d59.9032902!4d10.7543291!15sChFwYW5vcmFtYSBzw7hyZW5nYZIBCnJlc3RhdXJhbnTgAQA"
                class="relative text-secondary-default text-lg opacity-70 mt-[-2px] width-fit mx-auto pb-5">
                Sørengkaia 69, 0194 Oslo
                <img class="absolute top-1 right-[-30px] h-5" src="./img/svg/pin.svg" alt="pinpoint" />
            </a>

        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1 max-w"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl">Contact Us:</h4>
            <p class="text-secondary-default text-lg opacity-50 pl-2">
                +47 413 26 663
            </p>
            <p class="text-secondary-default text-lg opacity-50 pl-2 pt-[2px]">
                post@panoramarestaurant.no
            </p>
        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl">Opening Hours:</h4>
            <p class="text-secondary-default text-lg opacity-50 pl-2">
                Food serving: Man- Søn 11.00 - 21.30
            </p>
            <p class="text-secondary-default text-lg opacity-50 pl-2 pt-[2px]">
                Bar &amp; Lounge: Man- Søn 11.00 - 00.30
            </p>

        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl lg:text-right">
                Social Media:
            </h4>
            <div class="flex gap-2 mt-1 lg:justify-end px-2">
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fpanoramasorenga%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR0o1Rjx1uZclldwzDseYobXAqNW0rxPSupUMsURCz0j19KanN5VqiILuic&h=AT2z_SFL9iOIncHFT9vur45kCms1wJ3DMiO6YQw6q3qYMn3mqqrS_fXV6aJcDpSPtT9OVjqnUYQKCtklhwIA-lgcdcScmIQsdqIhza8SEibs7qETMLdxv-XpIdPk4I20c7JxaQ"
                    target="_blank" rel="noopener noreferrer">
                    <img class="max-h-[30px]" src="./img/svg/instagram-2016-logo-svgrepo-com.svg"
                        alt="Instagram Logo" />
                </a>
                <a href="https://www.facebook.com/panoramarestaurantoslo" target="_blank">
                    <img class="max-h-[30px]" src="./img/svg/facebook-social-media-svgrepo-com.png"
                        alt="FaceBook Logo" />
                </a>
            </div>
        </div>
        `;
    } else {
        languagePrompt.innerHTML = "ENG";
        infoModalCtAp.innerHTML = "From April 1st to Mai 31th";
        infoModalCtAh2.innerHTML = "2 hours Free parking when you dine with us";
        animateButton.innerHTML = "More information";
        messageBoxContent.innerHTML = `
                <div class=" bg-primary_clr-dark bg-opacity-40 flex flex-col gap-4 p-8 sm:rounded-2xl">
                    <p class="text-primary_clr-light font-semibold text-xl">Free parking when you dine with us</p>
                    <p class="text-primary_clr-light">Panorama Restaurant &amp; -bar offers 2 hours of free parking
                        between 16.00 - 24.00 in April and May.</p>
                    <p class="text-primary_clr-light"><span class="font-semibold">The offer is valid</span> for those
                        who park at Sørenga parking garage and dine at our restaurant.</p>
                    <p class="text-primary_clr-light"><span class="font-semibold">To get free parking</span>, simply
                        register with a tablet at our restaurant upon arrival.</p>
                </div>
        `;
        navigation.innerHTML = `
            <div
                class="w-full sm:flex-wrap sm:mx-auto my-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-l">
                <a href="#meny"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    meny
                </a>

                <a href="https://panoramarestaurant.superbexperience.com/?fbclid=IwAR2gFCHfmfO04JmzInQnjtlCJRGBYs9PzCDt7tTJZAi_1GDU8yptoCQaFTA" target="_blank"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white;">
                    booking
                </a>
                <a href="#omOss"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    om oss
                </a>
                <a href="#kontakt"
                    class="flex justify-center py-2 w-36 uppercase border sm:hover:rounded-2xl transition-all"
                    style="border-color: white; color: white">
                    kontakt
                </a>
            </div>
            `;
        omOss.innerHTML = `
            <div
                class="w-fit mx-auto sm:mr-0 p-5 sm:p-10 sm:pr-20 my-auto place-items-center z-50 bg-primary_clr-dark bg-opacity-70 text-primary_clr-light">
                <div class="flex flex-col max-w-[326px] gap-4">
                    <h2 class="text text-[42px]">Mer om oss ...</h2>
                    <p class="">
                        Panorama restaurant ligger perfekt til på Sørenga, med utsikt til både Barcode, Langkaia og
                        Oslofjorden. Vi serverer grill- og sjømat med smaker fra Middelhavet.
                    </p>
                    <p>
                        Restauranten har et eksotisk preg med palmer, flammer og havutsikt som gir en deilig følelse av
                        ferie.
                    </p>
                    <p>
                        Innredningen er delikat og atmosfæren er varm. Her kan du sette deg tilbake og nyte smakfull mat
                        og fantastisk utsikt.
                    </p>

                    <a href="https://book.easytablebooking.com/book/?id=8d940&lang=auto" target="_blank"
                        class="flex justify-center w-40 py-2 mt-4 uppercase border sm:hover:rounded-2xl transition-all"
                        style="border-color: white; color: white">
                        Book bord nå
                    </a>
                </div>
            </div>
            `;
        meny.innerHTML = `
            <h2 class="mx-2 sm:mx-5 mb-10 pt-20 font-bold text-4xl sm:text-5xl text-secondary-default">
                Meny
            </h2>
            <p class="mx-2 sm:mx-5  text-secondary-default font-semibold opacity-80">Allergener står under menyen.</p>
            <div class="flex flex-wrap text-secondary-default">
                
                <details id="starters"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Forretter
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Østers
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Tre stykk servert med sitron, sjalottløk og eddik.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Ceviche
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Kveite, mango, chilli, lime og granateple.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Kamskjell
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Potetmos og selleri med chilli hummersaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Laks Gremolada
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Hjemmelaget marinert laks og gremolada.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    200<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Stekt Argentinsk Scampi
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Argentinsk scampi, hvitløk, persille og hvitvin.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    189<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Sauterte Blåskjell i Tomat
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Blåskjell, hvitløk, persille, cherrytomat og frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    230<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Carpaccio
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Oksefilet, olivenolje, pinjekjerner, mikrogrønt og cherrytomatconfit.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    199<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    8. Vitelo Tonnato
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Roastbiff servert med tunfiskmajones og kapers.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,,3,4
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    9. Caprese
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Marinert fersk tomat, fersk borrata, basilikum, olivenolje og oliven.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    179<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    Antipasto Misto
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">2 eller 4 personer</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Trøffelsalami, spianata calabrese, serrano, mortadella, parmigiano, pecorino, manchego og gorgonzola.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    449/749<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </details>
                
                <details id="grill" open
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Grill
                    </summary>
                    <p class="font-semibold mb-5 opacity-60">(ALLE HOVEDRETTENE SERVERES MED SAUTERTE GRØNNSAKER OG SAUS)</p>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. And teppanyaki
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Appelsinsaus, gulrotpuré og mikrogrønt.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    400<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Lamb carre’
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Trøffel, potetpuré, mikrogrønt og rødvinsaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    420<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Okse indrefilet
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Stekte poteter, sesongens grønnsaker og mikrogrønt. Velg mellom Sopp og peppersaus eller Rødvinsaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    450<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Grillmix tallerken
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">Anbefalt for 2</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Halv and, halv lammecarre, halv indrefilet av okse og salsiccia.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    890<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Panoramas burger
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Hjemmelaget biffburger, cheddarost, salat, agurk og tomat. Serveres med Captain Morgan dressing, løkringer og frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7,9,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Surf & turf
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Tagliata av ytrefilet av okse, reker, frites, saralblanding, trøffelmayo og aioli.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,4,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    499<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Kylling Saltimbocca
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Kyllingbryst pakket inn i serranoskinke og salvia.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    320<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    8. Côte de Boeuf
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Spansk biff med potetpuré og stekt romersk salat. Serveres med rødvinsaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 6,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    550<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    9. Solsikke Risotto
                                </h3>
                                <p class="text-sm sm:text-base font-bold max-w-xs sm:max-w-md">(Vegetar)</p>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Solsikkekjerner, tomat, basilikum, fetaost og mynte.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    310<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
                <details id="Seafood"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Sjømat
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Dorada
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Grillet fisk med sitronsmørsaus og bland salat.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 4,7,9
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    399<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Halv hummer med sesongens grønnsaker.
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Dill, bland mikrogrønt, sesongens grønnsaker og hummersaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    455<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Kveite
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Potetpuré, kaviar, mikrogrønt og hvitvinsaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 4,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    469<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Sjømat Tallerken
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    En hummer, to sjøkreps, fire kongereker og blåskjell.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    1600<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
                <details id="pasta"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Pasta
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Sjømat linguine
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Blekksprutblekk linguine med sjømatblanding, tomatsaus, hvitløk, persille og vin
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,3,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    300<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Sjømat risotto
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Sjømatblanding, ris, hvitløk og vin.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    310<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Pasta pollo
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Krempesto, grønne, bønner og kylling.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Risotto 4 oster
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Pecorino, gorgonzola, parmigiano og manchego.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Agnolotto ai porcini
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Ravioli med porcini og ost, trøffelolje og parmesan.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Antipasto misto
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Truffel salami, spianata calabrese, serrano, mortadella, parmigiano, pecorino, manchego og gorgonzola.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    7. Sunflower Rissoto<span class="text-sm sm:text-base"> (Vegetarian)</span>
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Ravioli med porcini og ost, trøffelolje og parmesan.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    279<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        

                    </div>
                </details>
                <details id="soups"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Supper
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Fiskesuppe
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Laks, reker, blåskjell, sellerirot, selleri, gulrot, hvitløk og maizena.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,7,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    189<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Soppsuppe
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Blandet sopp og fløte.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    169<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                    </details>
                <details id="barneMeny"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Barnemeny
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Spaghetti bolognese
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Oksekjøttdeig i tomatsaus, toppet med parmesan.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Burger 100g
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Biffkjøtt, ost, dressing og frites.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Pølser med pommes frites
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Grillede pølser med pommes frites. Velg mellom majones eller ketchup.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    99<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
                <details id="salads"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Salater
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Sesong salat
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Ferske grønnsaker
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    159<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Blekksprut Salat
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Blekksprut, sitron, persille, hvitløk, olivenolje, selleri og gulrøtter.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3. Cæsarsalat med biff
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salat, cherrytomat, agurk, krutong og cæsardressing.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,4,6,10,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Cæsarsalat med kylling
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salat, bacon cherrytomat, agurk, krutong og cæsardressing.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,4,6,10,12
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    5. Cæsarsalat med reker
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Romano salat, cherrytomat, agurk og citronette.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 2,4,14
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    209<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    6. Chevre salat
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Karamellisert chevre med rødbeter, soyabønner, granateple, cherrytomat, valnøtter og honning.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 6,7,8
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    229<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        
                </details>
                <details id="dessert"
                    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer">
                        Dessert
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 max-w-full">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    1. Fransk sjokoladetruffon
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Krem, mørk sjokolade, toppet med marengs og ganache.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,3,4,7,8,12,13
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    2. Sjokoladefondant med is
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Sjokoladekake med myk kjerne og is
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    149<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    3.Ostekake med Pasjonsfruktglasur
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Krem, ost, vanilje og sitron servert med friske bær.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 1,2,3,6,7,9,10
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col pl-5 gap-2">
                                <h3 class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                    4. Panna Cotta med bringebærsaus
                                </h3>
                                <p class="text-sm sm:text-base max-w-xs sm:max-w-md">
                                    Italiensk dessert av fløte og vanilje med bringebærsaus.
                                </p>
                                <p class="text-xs opacity-60">
                                    Allergi: 3,7
                                </p>
                                <p class="text-sm sm:text-base opacity-90">
                                    129<span class="text-xs">kr</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </details>
                <details id="snacks" open
                    class="sm:w-md w-full bg-primary_clr rounded-lg gap-5 py-4 pl-[10px] lg:max-w-[473px] mx-2 sm:mx-5 my-4  sm:my-5">
                    <summary
                        class="font-bold text-3xl text-secondary-default w-fit px-2 pb-1 select-none cursor-pointer">
                        Snacks
                    </summary>
                    <div class="mr-2 flex-style-menu gap-4 lg:max-w-[473px]">
                        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
                            <div class="flex flex-col px-5 gap-2">
                                <div class="flex justify-between">
                                    <p class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                        Marinerte Oliven
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        79<span class="text-xs">kr</span>
                                    </p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                        Nachos & Guacamole
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        139<span class="text-xs">kr</span>
                                    </p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="font-bold text-lg sm:text-xl relative left-[-20px]">
                                        Syltet parmesan i chilliolje
                                    </p>
                                    <p class="text-sm sm:text-base opacity-90">
                                        159<span class="text-xs">kr</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                </details>
            </div>

            <P class="max-w-[442px] sm:w-md w-full text-primary_clr-light gap-5 pl-[10px] mx-2 sm:mx-5 my-4 sm:my-5">
                <span class="font-bold text-secondary-default">ALLERGENER:</span>
                <br>
                1. Korn som inneholder gluten, 2. Krepsdyr, 3. Egg, 4. Fisk, 6. Soyabønner, 7. Melk,
                8. Nøtter, 9. Selleri, 10. Sennep, 11. Sesamfrø, 12. Svoveldioksid, 13. Lupin 14. Bløtdyr
            </P>
            `;
        kontakt.innerHTML = `
            <div class="flex-col flex w-full lg:border-b lg:border-primary_clr-light">
            <h3 class="text-primary_clr-light text-2xl lg:text-4xl text-center">
                Panorama Restaurant
            </h3>
            <a id="adress" target="_blank"
                href="https://www.google.com/maps/place/Panorama+Restaurant/@59.9017113,10.7201153,13z/data=!4m9!1m2!2m1!1spanorama+s%C3%B8renga!3m5!1s0x46416f591d689f67:0xf70091e7114a007d!8m2!3d59.9032902!4d10.7543291!15sChFwYW5vcmFtYSBzw7hyZW5nYZIBCnJlc3RhdXJhbnTgAQA"
                class="relative text-secondary-default text-lg opacity-70 mt-[-2px] width-fit mx-auto pb-5">
                Sørengkaia 69, 0194 Oslo
                <img class="absolute top-1 right-[-30px] h-5" src="./img/svg/pin.svg" alt="pinpoint" />
            </a>

        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1 max-w"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl">Kontakt Oss:</h4>
            <p class="text-secondary-default text-lg opacity-50 pl-2">
                +47 413 26 663
            </p>
            <p class="text-secondary-default text-lg opacity-50 pl-2 pt-[2px]">
                post@panoramarestaurant.no
            </p>
        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl">Åpningstider:</h4>
            <p class="text-secondary-default text-lg opacity-50 pl-2">
                Matservering: Man- Søn 11.00 - 21.30
            </p>
            <p class="text-secondary-default text-lg opacity-50 pl-2 pt-[2px]">
                Bar &amp; Lounge: Man- Søn 11.00 - 00.30
            </p>

        </div>
        <div class="w-full h-px lg:hidden bg-primary_clr-light mt-1"></div>
        <div class="flex-col flex-1 flex max-w-xs py-5">
            <h4 class="text-primary_clr-light text-xl lg:text-right">
                Sosiale Medier:
            </h4>
            <div class="flex gap-2 mt-1 lg:justify-end px-2">
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fpanoramasorenga%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR0o1Rjx1uZclldwzDseYobXAqNW0rxPSupUMsURCz0j19KanN5VqiILuic&h=AT2z_SFL9iOIncHFT9vur45kCms1wJ3DMiO6YQw6q3qYMn3mqqrS_fXV6aJcDpSPtT9OVjqnUYQKCtklhwIA-lgcdcScmIQsdqIhza8SEibs7qETMLdxv-XpIdPk4I20c7JxaQ"
                    target="_blank" rel="noopener noreferrer">
                    <img class="max-h-[30px]" src="./img/svg/instagram-2016-logo-svgrepo-com.svg"
                        alt="Instagram Logo" />
                </a>
                <a href="https://www.facebook.com/panoramarestaurantoslo" target="_blank">
                    <img class="max-h-[30px]" src="./img/svg/facebook-social-media-svgrepo-com.png"
                        alt="FaceBook Logo" />
                </a>
            </div>
        </div>
            `;
    }
});
