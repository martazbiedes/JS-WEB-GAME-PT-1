let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px' 
document.body.append(greenCharacter)

function addBackground(backgroundImgName, fileSource, backgroundStartBottom, backgroundEndTop){
    //Each block of background image is 100x100px
    let imageWidth = 100
    //Iterate row
    for (let currentRow = backgroundStartBottom; currentRow < backgroundEndTop; currentRow++){
        //Iterate Column
        for (let currentColumn = 0; currentColumn < window.innerWidth; currentColumn += imageWidth){
            //Add Background
            newImage(backgroundImgName, fileSource, `${currentColumn}px`, `${currentRow*imageWidth}px`)
        }
    }
}

//TODO MAYBE? Add biome randomiser, auto calculate layers
//TODO MAYBE? Add sky layers, auto calculate layers

//Set position where ground and sky meet, Default 5 (x100px)
let horizonPosition = 5
//list of backgrounds
let backgroundsList = [
    {
        imageName: 'grass',
        assetLocation: 'assets/grass.png',
        startPositionX: 0,
        endPositionX: horizonPosition
    },
    {
        imageName: 'sky',
        assetLocation: 'assets/sky.png',
        startPositionX: horizonPosition,
        endPositionX: window.innerHeight
    }
]
//Add Backgrounds
for (let currentImage = 0; currentImage < backgroundsList.length; currentImage++){
    addBackground(window[backgroundsList[currentImage].imageName], backgroundsList[currentImage].assetLocation, backgroundsList[currentImage].startPositionX, backgroundsList[currentImage].endPositionX)
}

// Function to add image to page
function newImage(newImgName, fileSource, positionLeft, PositionBottom){
    newImgName = document.createElement('img')
    newImgName.src = fileSource
    newImgName.style.position = 'fixed'
    newImgName.style.left = positionLeft
    newImgName.style.bottom = PositionBottom
    document.body.append(newImgName)
    return newImgName
}

// List of Images on map
let imagesList = [
    {
        imageName: 'greenCharacter',
        assetLocation: 'assets/green-character.gif',
        positionY: '100px',
        PositionX: '100px'
    },
    {
        imageName: 'pineTree',
        assetLocation: 'assets/pine-tree.png',
        positionY: '450px',
        PositionX: '200px'
    },
    {
        imageName: 'tree',
        assetLocation: 'assets/tree.png',
        positionY: '200px',
        PositionX: '300px'
    },
    {
        imageName: 'pillar',
        assetLocation: 'assets/pillar.png',
        positionY: '350px',
        PositionX: '100px'
    },
    {
        imageName: 'crate',
        assetLocation: 'assets/crate.png',
        positionY: '150px',
        PositionX: '200px'
    },
    {
        imageName: 'well',
        assetLocation: 'assets/well.png',
        positionY: '500px',
        PositionX: '425px'
    }
]

//Add Images to map
for (let currentImage = 0; currentImage < imagesList.length; currentImage++){
    newImage(window[imagesList[currentImage].imageName], imagesList[currentImage].assetLocation, imagesList[currentImage].positionY, imagesList[currentImage].PositionX)
}

// Function to add item images to page, dissapears on double click
function newItem(newItemName, fileSource, positionLeft, PositionBottom) {
    newItemName = newImage(newItemName, fileSource, positionLeft, PositionBottom)
    newItemName.addEventListener('dblclick', function(){
        newItemName.remove()
    })
}

// List of Images on map
let itemsList = [
    {
        imageName: 'sword',
        assetLocation: 'assets/sword.png',
        positionY: '500px',
        PositionX: '405px'
    },
    {
        imageName: 'sheild',
        assetLocation: 'assets/sheild.png',
        positionY: '165px',
        PositionX: '185px'
    },
    {
        imageName: 'staff',
        assetLocation: 'assets/staff.png',
        positionY: '600px',
        PositionX: '100px'
    }
]
//Add Images to map
for (let currentImage = 0; currentImage < itemsList.length; currentImage++){
    newItem(window[itemsList[currentImage].itemsName], itemsList[currentImage].assetLocation, itemsList[currentImage].positionY, itemsList[currentImage].PositionX)
}