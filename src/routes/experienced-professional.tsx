import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/experienced-professional")({
  loader: () => {
    throw redirect({
      to: "/journey/experienced",
      statusCode: 301,
    });
  },
});
