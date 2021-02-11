import ContentFieldTitle from './_ContentFieldTitle'
import MyPostsLinkContent from './_MyPostsLinkContent'
export default function ContentField(){
    return(
        <div className="flex flex-col justify-start bg-gray-800 rounded">
            <ContentFieldTitle title="Web log" />
            <ul className="mx-6 mb-8 mt-2">
                <MyPostsLinkContent />
            </ul>
        </div>
    )
};