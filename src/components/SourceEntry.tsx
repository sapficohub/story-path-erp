import { useEffect } from "react";

import {
  captureSourceEntry,
  type SourceKey,
} from "@/lib/referral";

type Props = {
  source: SourceKey;
};

export default function SourceEntry({
  source,
}: Props) {
  useEffect(() => {
    captureSourceEntry(source);

    window.location.replace("/");
  }, [source]);

  return null;
}