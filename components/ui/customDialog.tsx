import React from "react"
import Image from "next/image"

// -- shadcn --
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

// -- utils
import { cn } from "@/lib/utils"

// -- icons
import { ExpandIcon } from "lucide-react"

/**
 * CustomDialog component for creating customizable dialogs.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {ReactNode} props.children - The trigger element that opens the dialog.
 * @param {string} [props.triggerClassNames=""] - Additional CSS classes for the trigger element.
 * @param {string} [props.contentClassNames=""] - Additional CSS classes for the dialog content.
 * @param {Object} [props.img] - Image configuration for the dialog.
 * @param {string} [props.img.src=""] - Source URL of the image.
 * @param {string} [props.img.alt=""] - Alt text for the image.
 * @param {string} [props.imgAspectRatio] - Aspect ratio for the image in the format "width:height".
 * @param {string} [props.title] - Title for the dialog.
 * @param {string} props.desc Description for the dialog.
 * @param {ReactNode} [props.footer] - Additional content to be placed in the dialog footer.
 * @param {ReactNode} [props.dialogContent] - Additional JSX content to be placed in the dialog.
 * @param {boolean} [props.asChild]
 * @returns {JSX.Element} - The rendered CustomDialog component.
 */

type Props = {
    children: React.ReactNode
    triggerClassNames?: string
    contentClassNames?: string
    img?: {
        src: string
        alt: string
    }
    imgAspectRatio?: number
    title?: string
    desc?: string
    dialogContent?: React.ReactNode
    asChild?: boolean
    actionBtn: {
        name: string
        onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
    }
}

const CustomDialog = ({
    children,
    triggerClassNames = "",
    contentClassNames = "",
    img,
    imgAspectRatio,
    title,
    desc,
    actionBtn,
    dialogContent,
    asChild = false
}: Props) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger
                asChild={asChild}
                className={cn("relative overflow-hidden group", triggerClassNames)}
            >
                <div>
                    {children}
                    {img ? (
                        <div className=" hidden group-hover:grid absolute top-0 left-0 w-full h-full place-content-center">
                            <ExpandIcon className=" text-background" />
                        </div>
                    ) : null}
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent className={cn("sm:max-w-[425px]", contentClassNames)}>
                <AlertDialogHeader>
                    {title ? <AlertDialogTitle>{title}</AlertDialogTitle> : null}
                    {desc ? <AlertDialogDescription>{desc}</AlertDialogDescription> : null}
                </AlertDialogHeader>
                {img ? (
                    <AspectRatio
                        ratio={imgAspectRatio}
                        className="bg-muted rounded-md overflow-hidden"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className=" w-full h-full object-cover"
                        />
                    </AspectRatio>
                ) : null}
                {dialogContent ? dialogContent : null}
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={actionBtn.onClick}>{actionBtn.name}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomDialog
