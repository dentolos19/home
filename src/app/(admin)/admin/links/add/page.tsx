"use client";

import FormControl from "@/components/form-control";
import { checkLinkExists, createLink } from "@/lib/data/links";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().nonempty("An ID is required."),
  url: z.string().url("A valid URL is required").nonempty("A URL is required."),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

  async function onAdd(values: z.infer<typeof formSchema>) {
    try {
      const exists = await checkLinkExists(values.id);
      if (exists) {
        form.setError("id", { message: "A link with this ID already exists." });
        return;
      }
      await createLink(values.id, values.url);
      router.push("/admin/links");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check the console for more details.");
    }
  }

  async function onCancel() {
    router.push("/admin/links");
  }

  return (
    <main className={"grid place-items-center"}>
      <div className={"card w-[350px] bg-base-300"}>
        <form className={"card-body"} onSubmit={form.handleSubmit(onAdd)}>
          <div className={"card-title self-center"}>Add Link</div>
          <div>
            <Controller
              control={form.control}
              name={"id"}
              render={({ field, fieldState, formState }) => (
                <FormControl label={"ID"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} disabled={formState.isSubmitting} />
                </FormControl>
              )}
            />
            <Controller
              control={form.control}
              name={"url"}
              render={({ field, fieldState, formState }) => (
                <FormControl label={"URL"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} disabled={formState.isSubmitting} />
                </FormControl>
              )}
            />
          </div>
          <div className={"card-actions justify-end"}>
            <button className={"btn btn-primary btn-sm"} type={"submit"} disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Adding..." : "Add"}
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