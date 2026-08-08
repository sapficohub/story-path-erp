import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/fresher-journey")({
  loader: () => {
    throw redirect({
      to: "/journey/fresher",
      search: true,
      statusCode: 301,
    });
  },
});
