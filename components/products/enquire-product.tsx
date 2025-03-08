import { Check, CopyIcon, Mail, NotebookPen, SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useEffect, useState } from "react";
import { capitalize } from "lodash";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import TooltipContext from "../contexts/tooltip-context";

export default function EnquireProduct({ productCode, productName }: { productCode: string; productName: string }) {
  const [message, setMessage] = useState("");
  const [htmlMessage, setHtmlMessage] = useState("");
  const [markdownMessage, setMarkdownMessage] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const markdownMessage = `Hello,\nI would like to enquire about the product **${capitalize(
      productName
    )}** (**${productCode.toUpperCase()}**).`;

    const htmlMessage = `Hello,<br>I would like to enquire about the product <b>${capitalize(
      productName
    )}</b> (<b>${productCode.toUpperCase()}</b>).`;

    const message = `Hello,\nI would like to enquire about the product ${capitalize(
      productName
    )} (${productCode.toUpperCase()}).`;

    setMessage(message);
    setHtmlMessage(htmlMessage);
    setMarkdownMessage(markdownMessage);
  }, [productCode, productName]);

  const copyMessage = () => {
    try {
      navigator.clipboard.writeText(markdownMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy message to clipboard", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="text-base w-full">
          Enquire Product
          <SendHorizontal />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enquire Product</DialogTitle>
          <DialogDescription>
            Copy the message below and send it to our customer service team to enquire about this product.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Copy Message */}
          <div>
            <span className="flex gap-2 items-end h-full">
              <span
                className=" text-sm bg-neutral-50 border border-neutral-200 p-2 rounded-lg"
                dangerouslySetInnerHTML={{ __html: htmlMessage }}
              />
              <Button className="flex-col h-full flex-grow" onClick={copyMessage}>
                {copied ? <Check /> : <CopyIcon />}
              </Button>
            </span>
          </div>

          {/* Share options */}
          <div className="flex gap-2">
            {/* Enquire on WhatsApp */}
            <DialogClose>
              <TooltipContext context="Enquire via WhatsApp">
                <Link
                  href={`${process.env.NEXT_PUBLIC_WHATSAPP_URL}?text=${encodeURIComponent(markdownMessage)}`}
                  target="_blank"
                >
                  <Button className="bg-green-400 hover:bg-green-500" variant="outline">
                    WhatsApp Us <FaWhatsapp />
                  </Button>
                </Link>
              </TooltipContext>
            </DialogClose>

            {/* Enquire on Facebook */}
            <DialogClose>
              <TooltipContext context="Enquire on Facebook">
                <Link href={process.env.NEXT_PUBLIC_FB_URL || "#"}>
                  <FaFacebook size={28} />
                  <span className="sr-only">Facebook</span>
                </Link>
              </TooltipContext>
            </DialogClose>

            {/* Enquire on Instagram */}
            <DialogClose>
              <TooltipContext context="Enquire on Instagram">
                <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}>
                  <FaInstagram size={28} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </TooltipContext>
            </DialogClose>

            {/* Enquire on LinkedIn */}
            <DialogClose>
              <TooltipContext context="Enquire on LinkedIn">
                <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}>
                  <FaLinkedin size={28} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </TooltipContext>
            </DialogClose>

            {/* Enquire on Email */}
            <DialogClose>
              <TooltipContext context="Enquire via Email">
                <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL?.trim()}`}>
                  <Mail size={28} />
                </Link>
              </TooltipContext>
            </DialogClose>

            {/* Enquire via Enquiry Form */}
            <DialogClose>
              <TooltipContext context="Enquire via Enquiry Form">
                <Link href={`/contact?text=${encodeURIComponent(message)}`} target="_blank">
                  <NotebookPen />
                  <span className="sr-only">Contact Us</span>
                </Link>
              </TooltipContext>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
