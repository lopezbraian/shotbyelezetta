import React from "react";

export default function useGetPath(location) {
  const { pathname } = location;
  const elementsPathName = pathname.split("/");

  let active;
  if (elementsPathName[1] !== "") {
    active = elementsPathName[1];
  } else {
    active = "home";
  }

  return active;
}
