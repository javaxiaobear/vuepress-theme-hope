import { computed, defineComponent, h, resolveComponent } from "vue";
import MarkdownContent from "./MarkdownContent";
import PageMeta from "./PageMeta";
import PageNav from "./PageNav";
import PasswordModal from "./PasswordModal";
import { usePathEncrypt, useThemeData } from "../composables";

import type { PageInfoProps } from "@mr-hope/vuepress-plugin-components";
import type { VNode } from "vue";

export default defineComponent({
  name: "NormalPage",

  setup(_props, { slots }) {
    const themeData = useThemeData();
    const { isEncrypted, validateToken } = usePathEncrypt();

    const pageInfoProps = computed<PageInfoProps>(() => {
      return {
        titleIcon: true,
        titleIconPrefix: themeData.value.iconPrefix,
        items: themeData.value.pageInfo,
        categoryPath: "/category/$category/",
        tagPath: "/tag/$tag/",
        defaultAuthor: themeData.value.author,
        hint: themeData.value.pure !== false,
      };
    });

    return (): VNode =>
      h(
        "main",
        { class: "page" },
        isEncrypted.value
          ? h(PasswordModal, { page: true, onVerify: validateToken })
          : [
              slots.top?.(),
              h(resolveComponent("PageInfo"), { ...pageInfoProps.value }),
              h(MarkdownContent),
              h(PageMeta),
              h(PageNav),
              h(resolveComponent("PageComment")),
              slots.bottom?.(),
            ]
      );
  },
});
