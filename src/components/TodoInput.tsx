import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  todo: z.string().min(1, {
    message: "Todo item cannot be empty.",
  }),
});

export function TodoInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.todo);
    // For now, just clear the input after submission.
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel className="sr-only">Todo Item</FormLabel>
              <FormControl>
                <Input placeholder="What needs to be done?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  );
}
