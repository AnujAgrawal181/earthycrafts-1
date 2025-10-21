import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { kebabCase, lowerCase } from "lodash";

export default function BreadcrumbsContext({ items, className }: { items: string[]; className?: string }) {
  return (
    <Breadcrumb className={cn("capitalize", className)}>
      <BreadcrumbList>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <BreadcrumbItem key={`breadcrumb-item-${index}`}>
              <BreadcrumbPage>{item}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <React.Fragment key={`breadcrumb-fragment-${index}`}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${kebabCase(item)}`}>
                  {item === "tukdi art"
                    ? "Artisan Stone Mosaic"
                    : item === "bali marble" || item === "bali stone" || item === "bali"
                    ? "Bali Stone"
                    : item === "artifacts"
                    ? "Artefacts"
                    : lowerCase(item)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
