import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi, this page is where you should find an issue with non-ASCII character after login.</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Non-ASCII character issue",
  meta: [
    {
      name: "description",
      content: "Non-ASCII character issue description",
    },
  ],
};
