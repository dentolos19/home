"use client";

import FormControl from "@/components/ui/form-control";
import { createLink } from "@/lib/data/links";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  id: z.string().nonempty(),
  url: z.string().url().nonempty(),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

  async function onAdd(values: z.infer<typeof formSchema>) {
    try {
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
      <div className={"card bg-base-300"}>
        <form className={"card-body"} onSubmit={form.handleSubmit(onAdd)}>
          <div className={"card-title self-center"}>Add Link</div>
          <div>
            <Controller
              control={form.control}
              name={"id"}
              render={({ field, fieldState }) => (
                <FormControl label={"ID"} errorLabel={fieldState.error?.message}>
                  <input {...field} className={"input"} />
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
              {form.formState.isSubmitting ? "Adding..." : "Add"}
            </button>
            <button className={"btn btn-outline btn-sm"} disabled={form.formState.isSubmitting} onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}