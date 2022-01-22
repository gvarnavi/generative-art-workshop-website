import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gvarnavi/wallpaper-groups-interactive";

function WallpaperGroupsInteractive() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/@gvarnavi/wallpaper-groups-interactive">Interactive Wallpaper Groups by Georgios Varnavides</a></p>
    </>
  );
}

export default WallpaperGroupsInteractive;
