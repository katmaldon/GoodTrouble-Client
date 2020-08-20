import React from 'react';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class TwitterContainer extends React.Component {

    render() {
        return (
            <div className="btc">
                <div className="media_title"><h2>Twitter Digest</h2></div>

                <div className="twitter_container">
                    <div className="timeline">
                        <TwitterFollowButton
                            screenName={'Blklivesmatter'}
                        />
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="Blklivesmatter"
                            options={{ height: 200 }, { width: 300 }}
                        /></div>
                    <div className="timeline">
                        <TwitterFollowButton
                            screenName={'ACLU'}
                        />
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="ACLU"
                            options={{ height: 200 }, { width: 300 }}

                        /></div>
                    <div className="timeline">
                        <TwitterFollowButton
                            screenName={'CivilRights'}
                        />
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="CivilRights"
                            options={{ height: 200 }, { width: 300 }}
                        /></div>
                    <div className="timeline">
                        <TwitterFollowButton
                            screenName={'NYTimes'}
                        />
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="NYTimes"
                            options={{ height: 200 }, { width: 300 }}
                        /></div>
                    {/* <a class="twitter-timeline" data-width="500" data-height="300" data-theme="dark" href="https://twitter.com/Blklivesmatter?ref_src=twsrc%5Etfw">Tweets by Blklivesmatter</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
                </div>
            </div>
        );
    };
};

export default TwitterContainer;
