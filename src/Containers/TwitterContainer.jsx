import React from 'react';

// import TweetEmbed from 'react-tweet-embed';


class TwitterContainer extends React.Component {

    render() {
        return (
            <div>
            <a class="twitter-timeline" data-width="500" data-height="300" data-theme="dark" href="https://twitter.com/Blklivesmatter?ref_src=twsrc%5Etfw">Tweets by Blklivesmatter</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        );
    };
};

export default TwitterContainer;
