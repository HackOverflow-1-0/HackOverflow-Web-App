import React from 'react'

const Feed = (props) => {
    const { id, caption, media_type, media_url } = props.feed
    let post;
    console.log(props.Feed)

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    src={media_url}
                    type="video/mp4"
                    controls
                    autoPlay
                    loop
                    muted>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    alt={caption}
                />
            );
            break;
        default:
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    alt={caption}
                />
            );
    }

    return (
        <React.Fragment>
            {post}
        </React.Fragment>
    );
}

export default Feed;