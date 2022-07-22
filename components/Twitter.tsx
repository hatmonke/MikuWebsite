import {
  TwitterTimelineEmbed
} from "react-twitter-embed";

export default function Twitter() {
  return (
    <>
      <h2 className="text-3xl sm:text-6xl mb-4 text-center pb-8 text-white">Twitter</h2>
      <div className="space-y-4 bg-black rounded-3xl bg-opacity-50 p-12 max-w-prose mx-auto">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="MikuBSC"
          options={{ height: 600 }}
        />
      </div>
    </>
  );
}
