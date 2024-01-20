import Pusher from "pusher";

const pusher = new Pusher({
appId: "1743715",
key: "0452f93eea33ba05ce77",
secret: "fe072ad33d675d8e2e06",
cluster: "us2",
useTLS: true,
});

export default pusher;