import {
  TwitterTimelineEmbed
} from "react-twitter-embed";

export default function Twitter() {
  return (
    <>
      <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-4 text-black">Twitter</h2>
      <div className="space-y-4 bg-white rounded-3xl bg-opacity-50 p-2 max-w-prose mx-auto">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MikuBSC"
          options={{ height: 500 }}
        />
      </div>
    </>
  );
}
