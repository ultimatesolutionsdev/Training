"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button, Typography } from "@mui/material";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const setFilter = (value) => {
    router.push(`/dashboard?filter=${value}`);
  };

  console.log("filter", filter);

  return (
    <div>
      <Typography>Current Filter: {filter}</Typography>
      <Button onClick={()=>setFilter("active")}>Active</Button>
      <Button onClick={()=>setFilter("achieved")}>Achieved</Button>
    </div>
  );
}
