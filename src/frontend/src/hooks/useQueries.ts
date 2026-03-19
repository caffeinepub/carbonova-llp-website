import { useMutation } from "@tanstack/react-query";
import { Subject } from "../backend";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      organization: string;
      subject: Subject;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContact(
        data.name,
        data.organization,
        data.subject,
        data.message,
      );
    },
  });
}

export { Subject };
