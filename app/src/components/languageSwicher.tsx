"use client";

import { Dropdown, DropdownItem } from "flowbite-react";
import { languages, siteLink } from "../const";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LanguageSwicher({ dic }: { dic?: any }) {
  if (dic) {
    return (
      <Dropdown label={dic ? dic.langName : "Lang"} inline>
        {languages.map((lan, i) => {
          return (
            <DropdownItem key={i}>
              <a href={siteLink + "/" + lan.lang}>{lan.name}</a>
            </DropdownItem>
          );
        })}
      </Dropdown>
    );
  } else {
    return;
  }
}
