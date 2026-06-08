"use client";

import { useEffect, useState } from "react";
import { Discord } from "@/components/ui/brand-icons";

type Lanyard = {
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities?: { type: number; name: string; state?: string; details?: string }[];
};

type LanyardResponse = {
  success?: boolean;
  data?: Lanyard;
};

type DiscordPresenceProps = {
  href: string;
  userId: string;
};

const STATUS: Record<Lanyard["discord_status"], { label: string; color: string }> = {
  online: { label: "Online", color: "oklch(0.7 0.17 150)" },
  idle: { label: "Idle", color: "oklch(0.78 0.15 80)" },
  dnd: { label: "Do not disturb", color: "oklch(0.62 0.2 25)" },
  offline: { label: "Offline", color: "oklch(0.75 0.01 230)" },
};

export function DiscordPresence({ href, userId }: DiscordPresenceProps) {
  const [data, setData] = useState<Lanyard | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`, {
          cache: "no-store",
        });
        const json = (await res.json()) as LanyardResponse;

        if (!alive) return;

        if (json.success && json.data) {
          setData(json.data);
          setFailed(false);
        } else {
          setFailed(true);
        }
      } catch {
        if (alive) setFailed(true);
      }
    }

    load();
    const id = window.setInterval(load, 60_000);

    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [userId]);

  const activity = data?.activities?.find((item) => item.type !== 4);
  const custom = data?.activities?.find((item) => item.type === 4);
  const status = data ? STATUS[data.discord_status] : null;

  const detail = activity
    ? `${activity.name}${activity.state ? ` - ${activity.state}` : ""}`
    : custom?.state || (data ? "On Discord" : "");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5 transition-colors hover:border-border-strong hover:bg-bg"
    >
      <span className="text-[oklch(0.5_0.13_265)]">
        <Discord />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="flex items-center gap-1.5 text-[0.82rem] font-medium text-ink">
          {status && (
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: status.color }}
              aria-hidden="true"
            />
          )}
          {failed || !status ? "Find me on Discord" : status.label}
        </span>
        <span className="mono max-w-[16rem] truncate text-[0.74rem] text-muted">
          {failed ? "@acethekawaii" : detail || "\u00a0"}
        </span>
      </span>
    </a>
  );
}
