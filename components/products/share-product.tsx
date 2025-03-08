import { Check, CopyIcon, Link, MoreHorizontal, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useEffect, useState } from "react";
import { kebabCase } from "lodash";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function ShareProduct({ productCode, productName }: { productCode: string; productName: string }) {
  const [message, setMessage] = useState("");
  const [markdownMessage, setMarkdownMessage] = useState("");
  const [copied, setCopied] = useState<"message" | "link" | false>(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    const productLink = `https://www.earthycrafts.com/products/${kebabCase(productCode)}`;
    const markdownMessage = `**${productName}** (**${productCode.toUpperCase()}**) - a perfect choice for those who appreciate quality and style.\n\n${productLink}`;

    const message = `<b>${productName}</b> (<b>${productCode.toUpperCase()}</b>) - a perfect choice for those who appreciate quality and style.<br/><br/><span class=" text-blue-500">${productLink}</span>`;

    setMessage(message);
    setMarkdownMessage(markdownMessage);
    setLink(productLink);
  }, [productCode, productName]);

  const copyMessage = () => {
    try {
      navigator.clipboard.writeText(markdownMessage);
      setCopied("message");
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy message to clipboard", error);
    }
  };

  const copyLink = () => {
    try {
      navigator.clipboard.writeText(link);
      setCopied("link");
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy link to clipboard", error);
    }
  };

  const shareNative = () => {
    if (navigator.share) {
      navigator
        .share({
          title: productName,
          text: markdownMessage.replace(/\*\*/g, ""), // Remove markdown bold formatting
          url: link,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="text-base sm:w-full w-fit">
          <span className="sm:not-sr-only sr-only">Share</span>
          <Share2 />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this masterpiece</DialogTitle>
          <DialogDescription>Share our masterpiece with others and help them know us.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Copy Message */}
          <div>
            <span className="flex gap-2 items-end h-full">
              <span
                className=" text-sm bg-neutral-50 border border-neutral-200 p-2 rounded-lg"
                dangerouslySetInnerHTML={{ __html: message }}
              />
              <Button className="flex-col h-full flex-grow" onClick={copyMessage}>
                {copied === "message" ? <Check /> : <CopyIcon />}
              </Button>
            </span>
          </div>

          {/* Share buttons */}
          <div className="flex gap-2 items-center">
            <FacebookShareButton url={link} title={markdownMessage}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>

            <LinkedinShareButton url={link} title={markdownMessage}>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>

            <TwitterShareButton url={link} title={markdownMessage}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>

            <Button
              variant="outline"
              className="text-[40px] rounded-full h-[40px] w-[40px]"
              size="icon"
              onClick={copyLink}
            >
              {copied === "link" ? <Check /> : <Link />}
            </Button>

            {/* Native Share for Mobile */}
            <Button
              variant="outline"
              className="text-[40px] rounded-full h-[40px] w-[40px]"
              size="icon"
              onClick={shareNative}
            >
              <MoreHorizontal />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
