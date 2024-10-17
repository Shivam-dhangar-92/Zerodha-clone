import { model } from "mongoose";
import WatchlistSchema from "../schema/WatchlistSchema";

const WatchlistModel=model("watchlist",WatchlistSchema);

export default WatchlistModel;