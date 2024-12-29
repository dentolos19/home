"use client";

import LoadingPage from "@/app/(admin)/loading";
import NotFoundPage from "@/app/not-found";
import FormControl from "@/components/ui/form-control";
import { deleteLink, getLink, updateLink } from "@/lib/data/links";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().nonempty(),
  url: z.string().url("A valid URL is required").nonempty("A URL is required."),
  clicks: z.number().int().nonnegative(),
});

export default function Page() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  async function onSave(values: z.infer<typeof formSchema>) {
    try {
      await updateLink(values.id, values.url);
      router.push("/admin/links");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check the console for more details.");
    }
  }

  async function onDelete() {
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
    getLink(id)
      .then((data) => {
        form.reset({
          id: data.id,
          url: data.url,
          clicks: data.clicks,
        });
      })
      .catch(() => {
        setNotFound(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (notFound) return <NotFoundPage />;

  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <form className={"card-body"} onSubmit={form.handleSubmit(onSave)}>
          <div className={"card-title self-center"}>Add Link</div>
          <div>
            <Controller
              control={form.control}
              name={"id"}
              render={({ field, fieldState }) => (
                <FormControl label={"ID"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} disabled />
                </FormControl>
              )}
            />
            <Controller
              control={form.control}
              name={"url"}
              render={({ field, fieldState }) => (
                <FormControl label={"URL"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} />
                </FormControl>
              )}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-primary btn-sm"} type={"submit"} disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </button>
            <button
              className={"btn btn-error btn-sm"}
              type={"button"}
              disabled={form.formState.isSubmitting}
              onClick={form.handleSubmit(onDelete)}
            >
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