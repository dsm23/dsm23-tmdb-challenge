import { FunctionComponent } from "react";
import { Media } from "../api";
import { clamp } from "../utils";
import Star from "./star";

type Props = {
  media: Media;
};

const Card: FunctionComponent<Props> = ({ media }) => (
  <div className="elevation flex divide-x divide-gray-200 rounded-lg bg-white shadow p-5 space-x-4">
    <div className="flex-shrink-0">
      {media?.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w200${media.poster_path}`} />
      )}
    </div>
    <div className="w-full pl-4 flex flex-col">
      <div className="text-2xl font-semibold">{media?.name}</div>
      <div className="text-sm mt-3">{media?.overview}</div>
      <dl className="ml-auto mt-auto flex items-end flex-col">
        <dt>rating:</dt>
        <dd>{media?.vote_average} / 10</dd>
        <dd className="flex">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((_, index) => (
            <div key={index} className="grid super-grid">
              <div
                className="star-clip-path bg-yellow-500 px-0.5"
                style={{
                  width: `${clamp(
                    (media.vote_average - index * 2) * 50,
                    0,
                    100
                  )}%`,
                }}
              />
              <Star />
            </div>
          ))}
        </dd>
      </dl>
    </div>
  </div>
);

export default Card;
