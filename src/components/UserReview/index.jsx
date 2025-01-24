"use client";

import { Avatar, Blockquote, Rating } from "flowbite-react";

export function UserReview({ rating, review, customerName }) {
  return (
    <figure className="max-w-screen-md">
      <div className="mb-4 flex items-center">
        <Rating size="md">
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
      </div>
      <Blockquote>
        <p className="font-semibold text-gray-900 dark:text-white">
          "{review}"
        </p>
      </Blockquote>
      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar
          rounded
          size="xs"
          //   img="/images/people/profile-picture-3.jpg"
          alt="profile picture"
        />
        <div className="flex items-center">
          <cite className="pr-3 font-medium text-gray-900 dark:text-white">
            {customerName}
          </cite>
        </div>
      </figcaption>
    </figure>
  );
}
