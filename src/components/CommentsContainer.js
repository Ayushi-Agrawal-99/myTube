import React from "react";

    const CommentsData = [
        {
            name : "Ayushi Agrawal",
            text : "Lorem ipsum dolor sit amet, consectutor audio",
            replies: [
                {
                    name : "Ayushi Agrawal",
                    text : "nice comment",
                    replies : [
                        {
                            name : "Ayushi Agrawal",
                            text : "nice comment",
                            replies : []
                        },
                    ]
                },
                {
                    name : "Ayushi Agrawal",
                    text : "nice comment"
                },
                {
                    name : "Ayushi Agrawal",
                    text : "nice comment"
                },
            ]
        },
        {
            name : "Ayushi Agrawal",
            text : "nice comment",
            replies: []
        },
        {
            name : "Ayushi Agrawal",
            text : "nice comment",
            replies: []
        },
        {
            name : "Ayushi Agrawal",
            text : "nice comment",
            replies: []
        },
        {
            name : "Ayushi Agrawal",
            text : "nice comment",
            replies: []
        },

    ];

    const Comment = ({data}) =>{
        const {name, text, replies} = data;
        return(

            <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-1">
                <img className = "h-[20px] m-2" alt="comment-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCSMkWaF4ReLMfiRu3NXk12zJikhfSx0bSQ&usqp=CAU"></img>
               
                <div className="px-3 text-sm">
                    <p className="font-bold">{name}</p>
                    <p>{text}</p>
                </div>
                
            </div>
        )
        
    };

    const CommentsList = ({comments}) =>{
         // trying to loop in through all the commentslist
        return comments?.map((comment,index) => (
            <div key= {index} >  
                <Comment data={comment} />
                <div className="pl-5 border border-l-black ml-5">
                    <CommentsList comments={comment?.replies} />
                </div>
            </div>
        ));
    };

    const CommentsContainer = () =>{
    return(
        <div className="m-2 p-2"> 
            <h1 className="text-m font-bold">Comments:</h1>
            <CommentsList comments={CommentsData}/>
        </div>
    )
}

export default CommentsContainer;