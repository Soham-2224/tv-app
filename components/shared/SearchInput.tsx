"use client"

import { usePathname, useRouter } from "next/navigation"

// --zod--
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

// --components--
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    input: z.string().min(2).max(50)
})

function SearchInput() {
    const router = useRouter()
    const pathname = usePathname()

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: ""
        }
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        form.reset()
        router.push(`${pathname.includes("movies") ? "movies" : "tv"}/search/${values.input}`)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
            >
                <FormField
                    control={form.control}
                    name="input"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl className="w-full">
                                <Input
                                    placeholder="Search..."
                                    className=" w-full"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default SearchInput
