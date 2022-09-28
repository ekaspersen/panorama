`<details
    class="sm:w-md w-full gap-5 pl-[10px] border-l-4 border-secondary-default  mx-2 sm:mx-5 my-4 sm:my-5"
>
    <summary
        class="font-bold text-3xl text-secondary-default mb-5 border-b-4 w-fit px-2 pb-1 border-secondary-default select-none cursor-pointer"
    >
        <h2>Forretter</h2>
    </summary>    
</details>`;
const forretterID = document.getElementById("#forretter");
console.log("se her bitch", forretterID);
const forretterArray = [
    {
        id: 1,
        name: "Elg Carpaccio",
        Description:
            "Urter granateple ruccula Pepperrotkrem pinjekjerne rødvin dressing",
        allergy: "melk",
        price: 179,
    },
    {
        id: 2,
        name: "Elg Carpacio",
        Description:
            "Urter granateple ruccula Pepperrotkrem pinjekjerne rødvin dressing",
        allergy: "melk",
        price: 179,
    },
    {
        id: 3,
        name: "Elg Carccio",
        Description:
            "Urter granateple ruccula Pepperrotkrem pinjekjerne rødvin dressing",
        allergy: "melk",
        price: 179,
    },
    {
        id: 4,
        name: "Elg Carpacio",
        description:
            "Urter granateple ruccula Pepperrotkrem pinjekjerne rødvin dressing",
        allergy: "melk",
        price: 179,
    },
];

for (let i = 0; i < forretterArray.length; i++) {
    const foodName = forretterArray[i].name;
    const foodDescription = forretterArray[i].description;
    const foodPrice = forretterArray[i].allergy;
    const foodAllergy = forretterArray[i].price;
    console.log(`   <div 
        class="mr-1 flex-style-menu gap-4 max-w-full"
    >
        <div class="p-[10px] pr-1 bg-primary_clr rounded-lg">
            <div class="flex flex-col pl-5 gap-2">
                <h3
                    class="font-bold text-lg sm:text-xl relative left-[-20px]"
                >
                    ${foodName}
                </h3>
                <p
                    class="text-sm sm:text-base max-w-xs sm:max-w-md"
                >
                    ${foodDescription}
                </p>
                <p class="text-xs opacity-60">
                    (allergener, ${foodAllergy})
                </p>
                <p class="text-sm sm:text-base opacity-90">
                    ${foodPrice}<span class="text-xs">kr</span>
                </p>
            </div>
        </div>
    </div> `);
}
