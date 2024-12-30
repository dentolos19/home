"use client";

import LoadingPage from "@/app/(admin)/loading";
import NotFoundPage from "@/app/not-found";
import FormControl from "@/components/ui/form-control";
import { checkLinkExists, deleteLink } from "@/lib/data/links";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().nonempty("A confirmation ID is required."),
});

export default function Page() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  async function onDelete(values: z.infer<typeof formSchema>) {
    if (values.id !== id) {
      form.setError("id", { message: "Confirmation ID does not match the link's ID." });
      return;
    }

    try {
      await deleteLink(id);
      router.push("/admin/links");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check the console for more details.");
    }
  }

  async function onCancel() {
    router.push("/admin/links");
  }

  useEffect(() => {
    setLoading(true);
    checkLinkExists(id)
      .then((exists) => {
        setNotFound(!exists);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (notFound) return <NotFoundPage />;

  return (
    <main className={"grid place-items-center"}>
      <div className={"card w-[400px] bg-base-300"}>
        <form className={"card-body"} onSubmit={form.handleSubmit(onDelete)}>
          <div className={"card-title self-center"}>Delete Link</div>
          <div className={"text-center"}>
            Are you sure you want to delete this link? Please enter the ID of the link to confirm.
          </div>
          <div className={"my-2 text-center"}>
            <span className={"text-lg font-medium"}>{id}</span>
          </div>
          <div>
            <Controller
              control={form.control}
              name={"id"}
              render={({ field, fieldState, formState }) => (
                <FormControl label={"Confirmation ID"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} disabled={formState.isSubmitting} />
                </FormControl>
              )}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-primary btn-sm"} type={"submit"} disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Deleting..." : "Delete"}
            </button>
            <button
              className={"btn btn-outline btn-sm"}
              type={"button"}
              disabled={form.formState.isSubmitting}
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}