import React from "react";
import { Button } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link href="/">
      <Button
        pos={"fixed"}
        top={"2rem"}
        left={"48.6%"}
        bg={"sleek_Gray"}
        borderRadius={100}
        width={"2.5rem"}
        height={"2.5rem"}
        zIndex={6}
        _hover={{
          background: "#015249",
          color: "f+eather",
        }}
      >
        <TriangleUpIcon />
      </Button>
    </Link>
  );
};
