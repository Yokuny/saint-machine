import allPostsDataGet from '../../utils/allPostsDataGet'
function WorksSlide(){
    const backwardLetter = "≺";
    const fowardLetter = "≻";
    const randonLetter = "⟲";
    let currentPicture = 0;
    const allPostsData = allPostsDataGet();
    const imagesPacks = allPostsData.map(function(FullPost){
        const eachImagePack = [];
        FullPost.map(function(thePost){
            eachImagePack.push(thePost.imgSrc);
        });
        return eachImagePack;
    });
    const imageLinks = imagesPacks.map(function(imagesPack){
        const eachImageLinkAndSize = [];
        imagesPack.map(function(imagePack){
            imagePack.map(function(eachImageAndSize){
                eachImageLinkAndSize.push(eachImageAndSize[0]);
            })
        })
        return eachImageLinkAndSize;
    });
    const allImages = [];
    for(var a=0; a<imageLinks.length; a++){
        const image = imageLinks[a];
        for(var b=0; b<image.length; b++){
            allImages.push(image[b]);
        }
    }
    function randomImage() {
        const RenderedImageElement = document.getElementById("RenderedImage");
        const ImageCount = allImages.length;
        currentPicture = Math.floor(Math.random() * ImageCount);
        RenderedImageElement.src = allImages[currentPicture];
    }
    function previousPicture() {
        if(currentPicture == 0){
            currentPicture = allImages.length-1;
        }else{
            currentPicture--;
        }
        const RenderedImageElement = document.getElementById("RenderedImage");
        RenderedImageElement.src = allImages[currentPicture];
    }
    function nextPicture() {        
        if(currentPicture == allImages.length-1){
            currentPicture = 0;
        }else{
            currentPicture++;
        }
        const RenderedImageElement = document.getElementById("RenderedImage");
        RenderedImageElement.src = allImages[currentPicture];
    }
    return(
        <>
        <div className="flex justify-center items-center object-contain overflow-hidden">
            <button onClick={previousPicture} className="relative lg:-right-10 -right-7 px-2 z-20 md:px-3 h-20 md:h-52 font-bold bg-trueGray-900 bg-opacity-25 text-lightBlue-400 hover:text-gray-900 hover:bg-fuchsia-300 hover:bg-opacity-50 duration-500">{backwardLetter}</button>
            <img id="RenderedImage" src={allImages[currentPicture]}/>
            <div>
                <button onClick={randomImage} className="relative lg:right-10 right-7 px-2 z-20 md:px-3 h-6 md:h-16 font-bold bg-trueGray-900 bg-opacity-25  text-lightBlue-400 hover:text-gray-900 hover:bg-fuchsia-300 hover:bg-opacity-50 duration-500">{randonLetter}</button>
                <button onClick={nextPicture} className="relative lg:right-10 right-7 px-2 z-20 md:px-3 h-14 md:h-36 font-bold bg-trueGray-900 bg-opacity-25 text-lightBlue-400 hover:text-gray-900 hover:bg-fuchsia-300 hover:bg-opacity-50 duration-500">{fowardLetter}</button>
            </div>
        </div>
        </>
    );
}
export default WorksSlide;
