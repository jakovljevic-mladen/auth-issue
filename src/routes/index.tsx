import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useSignIn, useSession, useSignOut } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useSession();
  const signIn = useSignIn();
  const signOut = useSignOut();

  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <button onClick$={() => {
        if (session.value) {
          signOut.submit({});
        } else {
          signIn.submit({ providerId: 'github', redirectTo: encodeURI('/završi-profil') });
        }
      }}>{session.value ? 'Sing out' : 'Sign in with GitHub'}</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
