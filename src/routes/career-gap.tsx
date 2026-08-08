import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/career-gap")({
  loader: () => {
    throw redirect({
      to: "/journey/career-gap",
      search: true,
      statusCode: 301,
    });
  },
});
