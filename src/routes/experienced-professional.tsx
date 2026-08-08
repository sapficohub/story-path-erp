import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/experienced-professional")({
  loader: () => {
    throw redirect({
      to: "/journey/experienced",
      search: true,
      statusCode: 301,
    });
  },
});
