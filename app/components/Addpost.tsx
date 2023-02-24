"use client";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  return (
    <form>
      <div>
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="Title"
          value={title}
          placeholder = "What's on your mind???"
        ></textarea>
      </div>
    </form>
  );
}
