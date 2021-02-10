import Image from 'next/image';
import allPostsDataGet from '../../utils/allPostsDataGet'
function WorksSlide(){
    const backwardWords = "<<";
    const fowardWords = ">>";
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
    setInterval(function randomImage(){
        const RenderedImageElement = document.getElementById("RenderedImage");
        const ImageCount = allImages.length;
        RenderedImageElement.src = allImages[Math.floor(Math.random() * ImageCount)];
    }, 4000);
    return(
        <>
        <div className="flex justify-center items-center object-contain">
            <button onClick={previousPicture} className="relative lg:-right-10 -right-7 px-1 z-10 lg:px-3 h-20 lg:h-52 bg-trueGray-900 bg-opacity-25 text-fuchsia-300 hover:text-gray-900 hover:bg-fuchsia-300 hover:bg-opacity-50 duration-500">{backwardWords}</button>
            <img id="RenderedImage" src={allImages[currentPicture]}/>
            <button onClick={nextPicture} className="relative lg:right-10 right-7 px-1 z-10 lg:px-3 h-20 lg:h-52 bg-trueGray-900 bg-opacity-25 text-fuchsia-300 hover:text-gray-900 hover:bg-fuchsia-300 hover:bg-opacity-50 duration-500">{fowardWords}</button>
        </div>
        </>
    );
}
// export async function getServerSideProps() {
//     const res = allImages[currentPicture]
// }
export default WorksSlide;
